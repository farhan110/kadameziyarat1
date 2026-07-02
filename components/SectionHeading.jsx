import Reveal from "./Reveal";

function StarOrnament() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" aria-hidden="true">
      <path
        d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SectionHeading({ eyebrow, title, lead, center = true }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold ${center ? "justify-center" : ""}`}>
          <StarOrnament />
          {eyebrow}
          <StarOrnament />
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <div className={`ornament-line mt-6 w-32 ${center ? "mx-auto" : ""}`} />
      {lead && <p className="mt-6 text-base leading-relaxed text-sand">{lead}</p>}
    </Reveal>
  );
}
