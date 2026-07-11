import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import Button from "./Button";
import { cn } from "../lib/utils";

const initialData = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdaqnavy";

  const validate = () => {
    const next = {};
    if (!data.name.trim()) next.name = "Name is required";
    if (!data.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Enter a valid email";
    if (!data.subject.trim()) next.subject = "Subject is required";
    if (!data.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setData(initialData);
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {fields.map((field, i) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <label
            htmlFor={field.name}
            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            value={data[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            aria-invalid={!!errors[field.name]}
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-accent dark:bg-slate-950 dark:text-slate-100",
              errors[field.name]
                ? "border-red-400 dark:border-red-500"
                : "border-slate-300 dark:border-slate-700"
            )}
          />
          {errors[field.name] && (
            <p className="mt-1 text-xs text-red-500">{errors[field.name]}</p>
          )}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.24 }}
      >
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={data.message}
          onChange={handleChange}
          placeholder="Tell me about your project or idea..."
          aria-invalid={!!errors.message}
          className={cn(
            "w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-accent dark:bg-slate-950 dark:text-slate-100",
            errors.message
              ? "border-red-400 dark:border-red-500"
              : "border-slate-300 dark:border-slate-700"
          )}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </motion.div>

      <Button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "loading" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 size={18} className="animate-spin" /> Sending...
            </motion.span>
          ) : status === "success" ? (
            <motion.span
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 size={18} /> Message Sent!
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send size={18} /> Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      {status === "success" && (
        <p className="text-center text-sm text-accent">
          Thanks for reaching out, I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
