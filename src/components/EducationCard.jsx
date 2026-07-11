import { GraduationCap, Award, BookOpen, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";

const typeIcons = {
  Education: GraduationCap,
  Certification: Award,
  Course: BookOpen,
};

export default function EducationCard({ item, onOpen, featured = false }) {
  const Icon = typeIcons[item.type] || GraduationCap;

  return (
    <Card
      className={`group flex h-full flex-col ${featured ? "border-accent/30 bg-accent/[0.03]" : ""}`}
      onClick={() => onOpen(item)}
    >
      <div className="mb-5 flex items-center justify-between">
        <div
          className={`flex items-center justify-center rounded-xl bg-accent/15 text-accent ${featured ? "h-16 w-16" : "h-12 w-12"}`}
        >
          <Icon size={featured ? 32 : 24} />
        </div>
        <Badge variant="outline">{item.type}</Badge>
      </div>

      <h3
        className={`mb-1 font-semibold text-slate-900 dark:text-slate-100 ${featured ? "text-2xl" : "text-lg"}`}
      >
        {item.title}
      </h3>
      <p className={`mb-1 font-medium text-accent ${featured ? "text-base" : "text-sm"}`}>
        {item.institution}
      </p>
      <p className={`mb-4 font-mono text-slate-500 ${featured ? "text-sm" : "text-xs"}`}>
        {item.period}
      </p>

      <ul
        className={`mb-5 flex-1 space-y-1.5 text-slate-600 dark:text-slate-400 ${featured ? "text-sm" : "text-xs"}`}
      >
        {item.highlights?.slice(0, featured ? 4 : 3).map((h) => (
          <li key={h} className="flex items-start gap-2">
            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
        <span className="text-sm font-medium text-accent">View details</span>
        <ArrowUpRight
          size={18}
          className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
    </Card>
  );
}
