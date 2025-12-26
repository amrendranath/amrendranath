import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          id={`${id}-heading`}
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
