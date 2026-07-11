import { GitPullRequest, Github, ExternalLink } from "lucide-react";
import { openSource, profile } from "../data/portfolio";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6"
    >
      <SectionHeader
        eyebrow="Community work"
        title="Open Source Contributions"
        subtitle="My involvement in the open-source community."
      />

      <div className="space-y-6">
        {openSource.contributions.map((contrib) => (
          <ScrollReveal key={contrib.project}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <GitPullRequest size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {contrib.project}
                </h3>
              </div>

              <p className="mb-5 leading-relaxed text-slate-600 dark:text-slate-400">
                {contrib.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {contrib.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={contrib.repo} variant="outline">
                  <Github size={16} /> View repository
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {openSource.description}
            </p>
            <Button href={profile.socials.github} variant="primary">
              <ExternalLink size={16} /> View GitHub profile
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
