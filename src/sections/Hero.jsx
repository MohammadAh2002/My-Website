import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Globe } from "lucide-react";
import { profile } from "../data/portfolio";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const line = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={line}
            className="mb-4 flex items-center gap-2 font-mono text-sm text-accent"
          >
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
            Hi there, I&apos;m
          </motion.p>

          <motion.h1
            variants={line}
            className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={line}
            className="mt-3 text-xl font-semibold text-accent sm:text-2xl"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            variants={line}
            className="mt-2 font-mono text-sm text-slate-500 dark:text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={line}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={line}
            className="mt-6 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-accent" /> {profile.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={16} className="text-accent" /> Available for work
            </span>
            <span className="flex items-center gap-1.5">
              <Globe size={16} className="text-accent" /> Available to work remotely
            </span>
          </motion.div>

          <motion.div variants={line} className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Get in touch</Button>
            <Button href="#projects" variant="outline">
              View my work
            </Button>
          </motion.div>

          <motion.div variants={line} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right: profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-accent/10 dark:border-slate-800">
            <img
              src="./Images/MyImage.png"
              alt={profile.name}
              className="h-full w-full max-w-md object-cover"
            />
          </div>

          <motion.div
            className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-2xl bg-accent/30 blur-2xl"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
