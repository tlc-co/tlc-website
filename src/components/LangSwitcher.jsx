"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en"; // Default to 'en' if locale is missing
  const newLocale = currentLocale === "ar" ? "en" : "ar";
  const buttonText = currentLocale === "ar" ? "English" : "العربية";

  const handleLocaleChange = () => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // Update the locale segment

    // Get the current query string (preserve query parameters)
    const queryParams = window.location.search;

    // Reconstruct the URL with the updated locale and query parameters
    const updatedUrl = `${segments.join("/")}${queryParams}`;
    
    // Navigate to the updated URL
    router.push(updatedUrl);
  };

  return (
    <button
      onClick={handleLocaleChange}
      className=" text-secondary md:text-white font-bold rounded-md"
    >
      {buttonText}
    </button>
  );
}
