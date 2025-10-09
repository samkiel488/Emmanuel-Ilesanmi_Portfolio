"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(5, "Message is too short"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Message sent successfully!");
      reset();
    } else {
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center h-screen px-6 md:px-12 lg:px-24 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Toaster position="top-center" />
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Me</h2>
      <p className="max-w-lg text-gray-600 dark:text-gray-400 mb-8">
        Have an inquiry or want to connect? Send a message directly below.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#daa520]"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email")}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#daa520]"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <textarea
          placeholder="Your Message"
          rows={5}
          {...register("message")}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#daa520]"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#daa520] hover:bg-[#c19a3f] text-white font-medium py-3 rounded-lg flex items-center justify-center transition-all"
        >
          {isSubmitting ? "Sending..." : (<><Send size={18} className="mr-2" /> Send Message</>)}
        </button>
      </form>
    </motion.section>
  );
}
