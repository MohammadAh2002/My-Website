import { useState } from "react";
import { ExternalLink, GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { education } from "../data/portfolio";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import EducationCard from "../components/EducationCard";
import Modal from "../components/Modal";
import Badge from "../components/Badge";
import Button from "../components/Button";

const typeIcons = {
  Education: GraduationCap,
  Certification: Award,
  Course: BookOpen,
};

export default function Education() {
  const [selected, setSelected] = useState(null);
  const Icon = selected ? typeIcons[selected.type] || GraduationCap : null;

  return (
    <section
      id="education"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6"
    >
      <SectionHeader
        eyebrow="Learning & credentials"
        title="Education, Certifications & Courses"
        subtitle="Formal education and continuous learning that shape my engineering foundation."
      />

      {(() => {
        const [featured, ...rest] = education;
        return (
          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <EducationCard item={featured} onOpen={setSelected} featured />
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {rest.map((item, i) => (
                <ScrollReveal key={item.id} delay={(i + 1) * 0.1}>
                  <EducationCard item={item} onOpen={setSelected} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })()}

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                {Icon && <Icon size={22} />}
              </div>
              <div>
                <p className="font-medium text-accent">{selected.institution}</p>
                <p className="font-mono text-xs text-slate-500">
                  {selected.period}
                </p>
              </div>
              <Badge variant="outline" className="ml-auto">
                {selected.type}
              </Badge>
            </div>

            {selected.highlights && (
              <ul className="space-y-2">
                {selected.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {selected.description}
            </p>

            {selected.link && selected.link !== "#" && (
              <Button href={selected.link} variant="outline">
                <ExternalLink size={16} /> View credential
              </Button>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
