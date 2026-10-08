import type { ReactNode } from "react";

interface TerminalWindowProps {
  /** Shown in the title bar. */
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * The site's signature "code editor window" chrome — title bar plus the three
 * traffic-light spheres. Previously duplicated in Hero and Experience; this is
 * now the only place that markup exists.
 */
export function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <div className="terminal-spheres" aria-hidden="true">
          <span className="terminal-sphere bg-chrome-red" />
          <span className="terminal-sphere bg-chrome-yellow" />
          <span className="terminal-sphere bg-chrome-green" />
        </div>
        <span className="terminal-title">{title}</span>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
