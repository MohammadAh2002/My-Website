import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6"
    >
      <SectionHeader
        eyebrow="Things I've built"
        title="Projects"
        subtitle="A selection of personal and learning projects. Click any card for details."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} onOpen={setSelected} />
          </motion.div>
        ))}
      </div>

      {/* Detail modal */}
      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <div className="space-y-6">
            <Badge variant="accent">{selected.category}</Badge>

            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              {selected.fullDescription}
            </p>

            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                <CheckCircle2 size={16} className="text-accent" /> Key features
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
                Tech stack
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {selected.repo && (
                <Button href={selected.repo} variant="outline">
                  <Github size={16} /> View code
                </Button>
              )}
              {selected.link && selected.link !== selected.repo && (
                <Button href={selected.link} variant="primary">
                  <ExternalLink size={16} /> Live / More
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
