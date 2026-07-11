import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";

export default function ProjectCard({ project, onOpen }) {
  return (
    <Card className="group flex h-full flex-col" onClick={() => onOpen(project)}>
      {/* Colored top bar / icon */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <FolderGit2 size={24} />
        </div>
        <Badge variant="outline">{project.category}</Badge>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="mb-5 flex-1 text-sm text-slate-600 dark:text-slate-400">
        {project.shortDescription}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge>+{project.technologies.length - 4}</Badge>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
        <span className="text-sm font-medium text-accent">View details</span>
        <div className="flex items-center gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 transition-colors hover:text-accent"
            >
              <Github size={18} />
            </a>
          )}
          <ArrowUpRight
            size={18}
            className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
      </div>
    </Card>
  );
}
