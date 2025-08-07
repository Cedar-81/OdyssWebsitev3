"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subscribe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
    isVisible: boolean;
  }>({
    type: "success",
    message: "",
    isVisible: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.odyss.ng/webhook/452d9589-a570-4e81-b203-d63bc2286a4c", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast("success", "Successfully joined the waitlist!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          subscribe: false,
        });
      } else {
        showToast("error", "Something went wrong. Please try again.");
      }
    } catch (error) {
      showToast("error", "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="waitlist" className="space-y-6 px-8 lg:px-0">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Don&lsquo;t just travel become a <span className="text-brand">Tourist</span>
          </h2>
          <p className="lg:text-lg">
            From weddings to retreats, make every trip a tour to remember.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col text-sm gap-5">
          <div className="flex flex-col lg:flex-row justify-center gap-6">
            <div className="border border-brand rounded-xl flex flex-col gap-1 px-3 py-2">
              <label htmlFor="firstname" className="text-sm font-semibold">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="outline-none w-[10rem]"
                placeholder="How do we address you?"
                required
              />
            </div>
            <div className="border border-brand rounded-xl flex flex-col gap-1 px-3 py-2">
              <label htmlFor="lastname" className="text-sm font-semibold">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="outline-none w-[10rem]"
                placeholder="What's your surname?"
                required
              />
            </div>
            <div className="border border-brand rounded-xl flex flex-col gap-1 px-3 py-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="outline-none w-[10rem]"
                placeholder="How do we reach you?"
                required
              />
            </div>
          </div>
          <div className="flex gap-2 mx-auto font-semibold items-start lg:items-center">
            <input 
              type="checkbox" 
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleInputChange}
              className="mt-1 lg:mt-0" 
            />
            <p>Subscribe to get newsletters and updates from us</p>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-3 rounded-xl text-lg w-[20rem] mx-auto text-white bg-brand disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Joining..." : "Join the waitlist"}
          </button>
        </form>
      </section>

      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}
