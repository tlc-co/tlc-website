"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Btn from "../btns/Btn";

export default function CareerForm({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);

    // Example: Send data to API route
    const response = await fetch("/api/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      {submitted ? (
        <p className="text-green-600">
          Your application has been submitted successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="border p-2 w-full"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-bold">
              Phone
            </label>
            <input
              id="phone"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone must contain only numbers",
                },
              })}
              className="border p-2 w-full"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="border p-2 w-full"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Choose a Job */}
          <div>
            <label htmlFor="job" className="block text-sm font-bold">
              Choose a Job
            </label>
            <select
              id="job"
              {...register("job", { required: "Please choose a job" })}
              className="border p-2 w-full"
            >
              <option value="">Select a Job</option>
              {
                data.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))
              }
            </select>
            {errors.job && <p className="text-red-500">{errors.job.message}</p>}
          </div>

          {/* Upload CV */}
          <div>
            <label htmlFor="cv" className="block text-sm font-bold">
              Upload CV
            </label>
            <input
              id="cv"
              type="file"
              {...register("cv", { required: "Please upload your CV" })}
              className="border p-2 w-full"
            />
            {errors.cv && <p className="text-red-500">{errors.cv.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", {
                maxLength: {
                  value: 500,
                  message: "Message cannot exceed 500 characters",
                },
              })}
              className="border p-2 w-full"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Btn
            bg="bg-secondary px-12 "
            color="text-white text-sm font-bold"
            text="SEND"
            rounded="rounded"
            hover="hover:opacity-80"
            type="submit"
          />
        </form>
      )}
    </div>
  );
}
