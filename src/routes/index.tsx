import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  HERO,
  ABOUT,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  CERTS,
  ACHIEVEMENTS,
  CONTACT,
  FOOTER,
} from "@/content";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [pct, setPct] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const start = Date.now();
    const iv = setInterval(() => {
      const p = Math.min(100, Math.floor((Date.now() - start) / 18));
      setPct(p);
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => setLoading(false), 400);
      }
    }, 30);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const upd = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      );
    };
    upd();
    const iv = setInterval(upd, 1000);
    return () => clearInterval(iv);
  }, []);

  if (loading) return <Loader pct={pct} />;

  return (
    <div className="relative min-h-screen text-foreground">
      <div className="liquid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <TopBar time={time} />
      <main className="relative mx-auto max-w-6xl px-6 pb-32 pt-32 sm:px-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Loader({ pct }: { pct: number }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="liquid-bg" />
      <div className="orb orb-1" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-[10px] tracking-[0.3em] text-muted-foreground">INITIALIZING</div>
        <div className="glass-card mt-8 rounded-2xl px-8 py-6">
          <div className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
            {String(pct).padStart(2, "0")}
            <span className="text-accent">%</span>
          </div>
        </div>
        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-muted/50">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-4 text-[10px] tracking-[0.4em] text-muted-foreground">
          LIQUID GLASS // LOADING
        </div>
      </div>
    </div>
  );
}

function TopBar({ time }: { time: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header py-3" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-[10px] tracking-[0.25em] text-muted-foreground sm:px-10">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="status-dot absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-foreground font-medium">ONLINE</span>
        </div>
        <nav className="hidden gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="link-hover text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="tabular-nums text-foreground/70">{time} IST</div>
      </div>
    </header>
  );
}

function SectionHeader({ id, num, title }: { id: string; num: string; title: string }) {
  return (
    <div id={id} className="mb-12">
      <div className="flex items-end justify-between">
        <div className="flex items-baseline gap-4">
          <span className="glass-pill rounded-lg px-3 py-1 text-[10px] tracking-[0.3em] text-accent">
            {num}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="glass-divider w-32" />
      </div>
      <div className="glass-divider mt-4" />
    </div>
  );
}

function Hero() {
  return (
    <section className="fade-up flex min-h-[85vh] flex-col justify-center">
      <div className="glass-pill inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[10px] tracking-[0.3em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-accent glow-pulse" />
        {HERO.location} // PORTFOLIO_v2.0
      </div>
      <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
        {HERO.firstName}
        <br />
        <span className="bg-gradient-to-r from-muted-foreground via-accent/80 to-muted-foreground bg-clip-text text-transparent">
          {HERO.lastName}
        </span>
        <span className="cursor ml-3 inline-block h-[0.75em] w-[0.35em] rounded-sm bg-accent align-middle" />
      </h1>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {HERO.tagline}
      </p>
      <div className="mt-10 flex flex-wrap gap-4 text-xs tracking-wider">
        <a
          href="#projects"
          className="glass-btn-primary rounded-xl px-6 py-3 font-medium transition-all"
        >
          VIEW WORK →
        </a>
        <a href="#contact" className="glass-btn rounded-xl px-6 py-3 font-medium">
          GET IN TOUCH
        </a>
      </div>
      <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {HERO.stats.map((s, i) => (
          <div
            key={s.label}
            className="glass-card group rounded-xl p-5"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground">{s.label}</div>
            <div className="mt-2 text-base font-medium text-foreground">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mt-40">
      <SectionHeader id="about" num="01" title="ABOUT" />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="glass-card rounded-2xl p-8 lg:col-span-2">
          <p className="text-base leading-relaxed text-foreground lg:text-lg">{ABOUT.bio}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {ABOUT.bioSecondary}
          </p>
        </div>
        <div className="space-y-4">
          <div className="glass-card rounded-xl p-6">
            <div className="text-[10px] tracking-[0.25em] text-accent">EDUCATION</div>
            <div className="mt-3 text-foreground font-medium">{ABOUT.education.degree}</div>
            <div className="text-sm text-muted-foreground">{ABOUT.education.school}</div>
            <div className="mt-1 text-xs text-muted-foreground">{ABOUT.education.detail}</div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="text-[10px] tracking-[0.25em] text-accent">HSC</div>
            <div className="mt-3 text-foreground">{ABOUT.hsc.school}</div>
            <div className="text-xs text-muted-foreground">{ABOUT.hsc.detail}</div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="text-[10px] tracking-[0.25em] text-accent">LANGUAGES</div>
            <div className="mt-3 text-foreground">{ABOUT.languages}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="mt-40">
      <SectionHeader id="experience" num="02" title="EXPERIENCE" />
      <div className="space-y-4">
        {EXPERIENCE.map((e, i) => (
          <article
            key={e.year + e.org}
            className="glass-row group rounded-xl p-6 transition-all hover:rounded-2xl md:grid md:grid-cols-[100px_1fr_1fr] md:gap-8"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="mb-3 text-xs tracking-[0.3em] text-accent md:mb-0">{e.year}</div>
            <div>
              <div className="text-lg font-medium text-foreground">{e.role}</div>
              <div className="mt-1 text-sm text-muted-foreground">{e.org}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:mt-0">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-accent">▹</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="mt-40">
      <SectionHeader id="projects" num="03" title="SELECTED PROJECTS" />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <a
            key={p.id}
            href={p.link || "#"}
            target={p.link ? "_blank" : undefined}
            rel="noreferrer"
            className="glass-card group relative flex flex-col justify-between rounded-2xl p-8"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="shimmer absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between text-[10px] tracking-[0.3em] text-muted-foreground">
                <span className="glass-pill rounded-md px-2 py-1">PROJECT / {p.id}</span>
                <span className="text-accent transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
                {p.name}
              </h3>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-accent">{p.tag}</div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="glass-pill rounded-md px-3 py-1.5 text-[10px] tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="mt-40">
      <SectionHeader id="skills" num="04" title="SKILLS / STACK" />
      <div className="grid gap-6 lg:grid-cols-2">
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <div
            key={cat}
            className="glass-card rounded-xl p-6"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="text-[10px] tracking-[0.25em] text-accent">// {cat.toUpperCase()}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="glass-pill rounded-lg px-3 py-1.5 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="glass-card mt-8 rounded-xl p-6">
        <div className="text-[10px] tracking-[0.25em] text-accent">// CERTIFICATIONS</div>
        <ul className="mt-4 grid gap-3 text-sm text-foreground md:grid-cols-2">
          {CERTS.map((c) => (
            <li key={c} className="flex items-start gap-3">
              <span className="mt-1 text-accent">✓</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="mt-40">
      <SectionHeader id="achievements" num="05" title="ACHIEVEMENTS" />
      <div className="grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={a.title + a.where}
            className="glass-card rounded-xl p-6"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="glass-pill inline-block rounded-md px-2 py-1 text-[10px] tracking-[0.2em] text-accent">
              {a.place}
            </div>
            <div className="mt-4 text-lg font-medium text-foreground">{a.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{a.where}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mt-40 pb-20">
      <SectionHeader id="contact" num="06" title="CONTACT" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {CONTACT.headline}
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              {CONTACT.headlineSecondary}
            </span>
          </h3>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {CONTACT.blurb}
          </p>
          <div className="mt-8">
            <div className="text-[10px] tracking-[0.25em] text-accent">// BASED IN</div>
            <div className="mt-2 text-sm text-foreground">{CONTACT.location}</div>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-8">
          <ul className="space-y-2">
            {CONTACT.links.map((l) => (
              <li key={l.k}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass-row group flex items-center justify-between rounded-xl px-4 py-4 transition-all hover:rounded-2xl"
                >
                  <span className="text-[10px] tracking-[0.25em] text-accent">{l.k}</span>
                  <span className="flex items-center gap-3 text-sm text-foreground">
                    {l.v}
                    <span className="text-accent transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="glass-header relative mt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-[10px] tracking-[0.3em] text-muted-foreground sm:flex-row sm:px-10">
        <div className="text-foreground/60">{FOOTER}</div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent glow-pulse" />
          <span className="text-accent/80">// END_OF_TRANSMISSION</span>
        </div>
      </div>
    </footer>
  );
}
