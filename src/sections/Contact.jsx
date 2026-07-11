import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { profile, contact } from "../data/portfolio";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import { copyToClipboard } from "../lib/utils";

function CopyRow({ icon: Icon, label, value, copyValue }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(copyValue);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
        <Icon size={20} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-slate-500">{label}</p>
        <p className="truncate text-sm text-slate-900 dark:text-slate-100">
          {value}
        </p>
      </div>
      <button
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-accent dark:hover:bg-slate-800"
      >
        {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6"
    >
      <SectionHeader
        eyebrow="Say hello"
        title={contact.title}
        subtitle={contact.subtitle}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        {/* Left: info */}
        <div className="space-y-4">
          <CopyRow
            icon={Mail}
            label="Email"
            value={profile.email}
            copyValue={profile.email}
          />
          <CopyRow
            icon={Phone}
            label="Phone"
            value={profile.phone}
            copyValue={profile.phone}
          />
          <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Location</p>
              <p className="text-sm text-slate-900 dark:text-slate-100">
                {profile.location}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
              Find me online
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:p-8">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
