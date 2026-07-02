import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, lead, arabic }) {
  return (
    <section className="relative overflow-hidden bg-night pt-40 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,#26231f_0%,#0a0908_65%)]" />
      <div className="girih pointer-events-none absolute inset-0 opacity-25" />
      <div className="dome-glow absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {arabic && (
          <Reveal variant="reveal-scale">
            <p className="font-arabic text-xl text-gold/85 sm:text-2xl">{arabic}</p>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal delay={100}>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={200}>
          <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={320}>
          <div className="ornament-line mx-auto mt-7 w-36" />
        </Reveal>
        {lead && (
          <Reveal delay={420}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-sand">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
