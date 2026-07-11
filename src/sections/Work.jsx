import { useState } from "react";
import { ExternalLink, Linkedin, Target, Lightbulb, CheckCircle2, TrendingUp } from "lucide-react";
import { workProjects } from "../data/portfolio";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import WorkProjectCard from "../components/WorkProjectCard";
import Modal from "../components/Modal";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="work"
      className="scroll-mt-20 bg-slate-100/50 py-24 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Delivered work"
          title="Professional Projects"
          subtitle="Production systems I've designed, built, and delivered for real businesses."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <WorkProjectCard project={project} onOpen={setSelected} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <div className="space-y-6">
            {selected.image && (
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{selected.client}</Badge>
              <Badge variant="outline">{selected.period}</Badge>
            </div>

            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              {selected.fullDescription}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  <Target size={16} className="text-accent" /> Problem
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {selected.problem}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  <Lightbulb size={16} className="text-accent" /> Solution
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {selected.solution}
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                <CheckCircle2 size={16} className="text-accent" /> Features delivered
              </p>
              <ul className="columns-1 gap-x-4 sm:columns-2">
                {selected.features.map((f) => (
                  <li
                    key={f}
                    className="mb-2 flex items-start gap-2 break-inside-avoid text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-accent/10 p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-accent">
                <TrendingUp size={16} /> Result
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {selected.result}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {selected.link && selected.link !== "#" && (
                <Button href={selected.link} variant="primary">
                  <ExternalLink size={16} /> View website
                </Button>
              )}
              {selected.linkedin && selected.linkedin !== "#" && (
                <Button href={selected.linkedin} variant="outline">
                  <Linkedin size={16} /> View LinkedIn post
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
