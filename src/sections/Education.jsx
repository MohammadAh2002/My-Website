import { useState } from "react";
import { ExternalLink, GraduationCap, Award, BookOpen, CheckCircle2, BadgeCheck, ImageOff } from "lucide-react";
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
  const [imageError, setImageError] = useState(false);
  const Icon = selected ? typeIcons[selected.type] || GraduationCap : null;

  const openItem = (item) => {
    setImageError(false);
    setSelected(item);
  };

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
              <EducationCard item={featured} onOpen={openItem} featured />
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {rest.map((item, i) => (
                <ScrollReveal key={item.id} delay={(i + 1) * 0.1}>
                  <EducationCard item={item} onOpen={openItem} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })()}

      <Modal
        isOpen={!!selected}
        onClose={() => {
          setSelected(null);
          setImageError(false);
        }}
        title={selected?.title}
      >
        {selected && (
          <div className="space-y-5">
            {selected.image && (
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                {imageError ? (
                  <div className="flex h-48 flex-col items-center justify-center gap-2 text-slate-400">
                    <ImageOff size={28} />
                    <span className="text-xs">Credential image unavailable</span>
                  </div>
                ) : (
                  <img
                    src={selected.image}
                    alt={`${selected.title} credential`}
                    className="h-auto w-full object-contain"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            )}

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

            {selected.credentialId && (
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-800/50">
                <BadgeCheck size={16} className="shrink-0 text-accent" />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Credential ID
                </span>
                <span className="ml-auto font-mono text-xs font-medium text-slate-700 dark:text-slate-200">
                  {selected.credentialId}
                </span>
              </div>
            )}

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
