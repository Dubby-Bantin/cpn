"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { showToast } from "@/lib/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

    emailjs
      .send(
        "service_avzrpke", // Replace with your Service ID
        "template_iodguli", // Replace with your Template ID
        formData, // Form data object
        "5k9V7EoxwZK4SIKr_" // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          showToast("Email sent successfully!", "success");
          setIsLoading(false);
          setFormData({ name: "", email: "", message: "" }); // Reset form fields
        },
        (err) => {
          console.error("Failed to send email.", err);
          showToast(err.message, "error");
          setIsLoading(false);
        }
      );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            type="text"
            className="h-[50px] bg-transparent border border-gray-400 outline-none text-[18px] px-5"
          />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            className="h-[50px] bg-transparent border border-gray-400 outline-none text-[18px] px-5"
          />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            cols={50}
            rows={10}
            className="p-4 bg-transparent border border-gray-400 outline-none text-[18px]"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } h-[50px] bg-transparent border border-black outline-none text-[18px] w-full px-5`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
