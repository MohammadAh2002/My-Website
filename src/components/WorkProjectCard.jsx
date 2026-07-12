import { Briefcase, ArrowUpRight } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";

export default function WorkProjectCard({ project, onOpen }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden" onClick={() => onOpen(project)}>
      {project.image && (
        <div className="relative -mx-6 -mt-6 mb-5 aspect-video w-[calc(100%+3rem)] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
        </div>
      )}

      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Briefcase size={22} />
        </div>
        <Badge variant="outline">{project.client}</Badge>
      </div>

      <h3 className="mb-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="mb-3 font-mono text-xs text-slate-500">
        {project.period}
      </p>
      <p className="mb-5 flex-1 text-sm text-slate-600 dark:text-slate-400">
        {project.shortDescription}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

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
