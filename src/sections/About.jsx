import { useRef, useState } from "react";
import { Languages, Sparkles, Award, User, ExternalLink } from "lucide-react";
import { profile, certifications } from "../data/portfolio";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import Badge from "../components/Badge";

function AboutParagraphs({ paragraphs }) {
  return paragraphs.map((text, index) => (
    <p
      key={index}
      className="mb-4 leading-relaxed text-slate-600 dark:text-slate-400 last:mb-0"
    >
      {text}
    </p>
  ));
}

export default function About() {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  const handleMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6">
      <SectionHeader
        eyebrow="Get to know me"
        title="About Me"
        subtitle="A quick snapshot of who I am, what I speak, and what drives me."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Bio with cursor spotlight */}
        <ScrollReveal className="lg:col-span-2">
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
            className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Spotlight */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
              style={{
                opacity: spotlight.active ? 1 : 0,
                background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(118,181,186,0.12), transparent 40%)`,
              }}
            />
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <User size={24} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {profile.role}
              </h3>
              <div className="mb-4">
                <AboutParagraphs paragraphs={profile.about} />
              </div>

              <div className="mt-6">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <Sparkles size={16} className="text-accent" /> Currently exploring
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.currentlyLearning.map((item) => (
                    <Badge key={item} variant="accent">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right column: languages + interests */}
        <div className="flex flex-col gap-6">
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="mb-4 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                <Languages size={18} className="text-accent" /> Languages
              </p>
              <ul className="space-y-3">
                {profile.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-slate-700 dark:text-slate-300">
                      {lang.name}
                    </span>
                    <span className="font-mono text-xs text-accent">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="mb-4 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                <Award size={18} className="text-accent" /> Certifications
              </p>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="flex-1">
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {cert.title}
                        </span>
                        <span className="block text-xs text-slate-500">
                          {cert.institution} · {cert.period}
                        </span>
                      </span>
                      <ExternalLink
                        size={14}
                        className="mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-accent"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
