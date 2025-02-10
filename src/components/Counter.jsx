"use client";

import { useEffect, useState, useRef } from "react";

export default function Counter({ value }) {
  // Current shown value
  const [currentValue, setCurrentValue] = useState(0);
  // Target Value to reach
  const [targetValue, setTargetValue] = useState(0);
  // Number of steps to reach
  const steps = 5;
  // Latency between each step
  const lag = 10;
  // To check if the element is in view
  const [inView, setInView] = useState(false);
  const ref = useRef();

  // Update the target value when the `value` prop changes
  useEffect(() => {
    setTargetValue(value);
  }, [value]);

  // Intersection Observer: Detect if the counter is in view
  useEffect(() => {
    
    const counter = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (counter) {
      observer.observe(counter);
    }

    return () => {
      if (counter) {
        observer.unobserve(counter);
      }
    };
  }, []);

  // Updating current value to reach the target value
  useEffect(() => {
    if (inView && currentValue !== targetValue) {
      const timeout = setTimeout(() => {
        setCurrentValue((prevCurr) => {
          const distance = Math.abs(targetValue - prevCurr);
          const stepSize = Math.ceil(distance / steps);
          return prevCurr < targetValue
            ? prevCurr + stepSize
            : prevCurr - stepSize;
        });
      }, lag);

      return () => clearTimeout(timeout); // Clean up timeout on unmount or re-render
    }
  }, [currentValue, targetValue, inView]);

  return (
    <div className="flex items-center gap-2 justify-center" dir="ltr">
      <div
        ref={ref}
        className="flex justify-center md:h-16 h-10 text-base leading-4 overflow-hidden"
      >
        {(currentValue + "").split("").map((val, idx) => (
          <div
            className="text-blueShades-400 md:text-6xl text-4xl font-semibold duration-[2000ms] transition-all leading-[1em]" // Line height explicitly set
            key={idx}
            style={{
              marginTop: `-${val}em`,
              height: "1em", // Ensure each "line" matches the font height
            }}
          >
            {/* Ensure digits are stacked correctly */}
            {[...Array(10).keys()].map((digit) => (
              <div key={digit} data-val={digit} className="text-center">
                {digit}
              </div>
            ))}
          </div>
        ))}
      </div>

      <span className="text-blueShades-400 md:text-6xl text-4xl">+</span>
    </div>
  );
}
