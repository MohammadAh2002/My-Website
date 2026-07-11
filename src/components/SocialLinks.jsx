import { Linkedin, Github, Mail, BookText } from "lucide-react";
import { profile } from "../data/portfolio";
import { cn } from "../lib/utils";

export default function SocialLinks({ className = "", size = 20 }) {
  const links = [
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
    { label: "GitHub", href: profile.socials.github, Icon: Github },
    { label: "Medium", href: profile.socials.medium, Icon: BookText },
    { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map(({ label, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20 dark:border-slate-700 dark:text-slate-300"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
