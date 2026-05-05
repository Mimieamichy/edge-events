import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { EdgeCursor } from "@/components/EdgeCursor";
import { MagneticButton } from "@/components/MagneticButton";
import hero from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edge Events — We Engineer Experiences" },
      { name: "description", content: "Edge Events designs and produces boundary-pushing corporate events, brand activations, product launches and high-end private experiences worldwide." },
      { property: "og:title", content: "Edge Events — We Engineer Experiences" },
      { property: "og:description", content: "Premium event production. Corporate galas, brand activations, product launches, private experiences." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

const SERVICES = [
  { n: "01", t: "Event Strategy", d: "Narrative-first concepts grounded in your brand objectives and audience psychology." },
  { n: "02", t: "Production & AV", d: "Stage, lighting, sound and video engineered to broadcast standards." },
  { n: "03", t: "Brand Activations", d: "Immersive installations that turn audiences into participants — and footage." },
  { n: "04", t: "Luxury Hospitality", d: "Private dinners, hosted travel and concierge moments curated to the second." },
  { n: "05", t: "Live Entertainment", d: "Talent buying, headliners, surprise drops and bespoke performance commissions." },
  { n: "06", t: "Digital Integration", d: "Hybrid streaming, on-site apps, RFID, and post-event content systems." },
];

const STEPS = [
  { n: "01", t: "Discovery", d: "We interrogate the brief. Audience, objective, KPI, constraint. Nothing assumed." },
  { n: "02", t: "Concept", d: "A central narrative — one bold idea — defended with story, scenography and detail." },
  { n: "03", t: "Production", d: "Engineering. Suppliers, runs of show, redundancies, contracts, contingencies." },
  { n: "04", t: "Execution", d: "Showtime. Calm command, military precision, an obsession with the guest's pulse." },
  { n: "05", t: "Debrief", d: "Hard data, honest review, content delivery — and a roadmap for what comes next." },
];

const TESTIMONIALS = [
  { q: "Edge didn't deliver an event — they delivered a moment our entire industry is still talking about.", n: "Yara Mansour", c: "CMO, Volta Automotive" },
  { q: "Calm under pressure, ferocious about the details. The only producer we trust with our flagship summit.", n: "Marcus Levin", c: "VP Brand, Northwind Capital" },
  { q: "It felt less like a launch and more like a film premiere we were lucky enough to star in.", n: "Inès Aubert", c: "Founder, Maison Aubert" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-12 md:py-5">
          <a href="#top" className="font-display text-2xl tracking-[0.18em] text-bone md:text-3xl">
            EDGE<span className="text-edge">.</span>
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="hover-edge font-sans text-xs uppercase tracking-[0.25em] text-bone/80">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group relative hidden md:inline-flex items-center gap-2 border border-bone/30 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.25em] text-bone transition-all duration-300 hover:border-edge hover:bg-edge hover:text-bone hover:shadow-[0_0_30px_-5px_var(--edge)]"
          >
            Book an Event
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a href="#contact" className="md:hidden font-sans text-[10px] uppercase tracking-[0.3em] text-edge">
            Book →
          </a>
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border backdrop-blur-xl bg-background/85"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-5">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="flex items-center justify-center py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-bone/75 active:text-edge"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="top" className="relative grain h-screen min-h-[760px] w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${y * 0.35}px, 0) scale(1.15)` }}
      >
        <img src={hero} alt="" className="h-full w-full object-cover opacity-50" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />
      </div>

      {/* Geometric mark */}
      <div
        className="pointer-events-none absolute right-[-8%] top-[12%] -z-10 hidden h-[520px] w-[520px] rotate-45 border border-edge/40 lg:block"
        style={{ transform: `rotate(45deg) translateY(${y * -0.2}px)` }}
      />
      <div
        className="pointer-events-none absolute left-[42%] top-[52%] -z-10 hidden h-3 w-3 bg-edge lg:block"
        style={{ transform: `translateY(${y * -0.5}px)`, boxShadow: "0 0 60px 10px var(--edge)" }}
      />

      <div className="mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-24 pt-32 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-14 bg-edge" />
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-bone/70">
            Est. 2014 — Worldwide
          </span>
        </div>

        <h1 className="font-display text-[18vw] leading-[0.85] tracking-tight text-bone sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]">
          <span className="block reveal in">WE DON'T</span>
          <span className="block reveal in" style={{ transitionDelay: "120ms" }}>PLAN EVENTS.</span>
          <span className="block italic font-editorial font-black text-edge text-glow reveal in" style={{ transitionDelay: "260ms" }}>
            we engineer
          </span>
          <span className="block reveal in" style={{ transitionDelay: "380ms" }}>EXPERIENCES.</span>
        </h1>

        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md font-sans text-base leading-relaxed text-bone/70">
            A production house for the brands that refuse to blend in. We design moments engineered to outlive the room they happen in.
          </p>
          <MagneticButton onClick={() => (window.location.href = "#contact")}>
            Start a Project <span aria-hidden>→</span>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden h-16 w-px -translate-x-1/2 overflow-hidden bg-bone/10 md:block">
        <span
          className="absolute left-0 top-0 block h-1/2 w-full bg-edge"
          style={{ animation: "scrollIndicator 2.4s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Product Launches", "Brand Activations", "Corporate Galas", "Private Experiences",
    "Conferences", "Award Ceremonies", "Pop-Ups", "Hosted Travel",
  ];
  const all = [...items, ...items];
  return (
    <section className="border-y border-border bg-background py-10 overflow-hidden">
      <div className="marquee gap-12 px-6">
        {all.map((t, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12">
            <span className="font-display text-5xl uppercase tracking-[0.06em] text-bone/90">{t}</span>
            <span className="h-2 w-2 rotate-45 bg-edge" />
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative grain px-6 py-32 md:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
        <div className="reveal lg:col-span-7">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-edge">— Philosophy</span>
          <p className="mt-8 font-editorial text-4xl italic leading-[1.1] text-bone md:text-6xl lg:text-7xl">
            "An event is the most expensive sentence a brand will ever speak. We make sure it lands."
          </p>
        </div>
        <div className="reveal flex flex-col justify-end lg:col-span-5" style={{ transitionDelay: "150ms" }}>
          <p className="font-sans text-base leading-[1.8] text-bone/70">
            Edge Events is a production house built by people who came up in film, fashion and live broadcast. We treat every brief like a one-night-only premiere — story-led, scenographic, and ruthlessly produced.
          </p>
          <p className="mt-6 font-sans text-base leading-[1.8] text-bone/70">
            From a 40-person dinner in the Atlas to a 12,000-seat keynote, the standard is the same: nothing on stage we wouldn't put our name on.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-24 grid max-w-[1400px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
        {[
          ["300+", "Events Produced"],
          ["12", "Countries"],
          ["98%", "Client Return Rate"],
        ].map(([n, l], i) => (
          <div key={i} className="reveal bg-background p-12" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="font-display text-7xl text-bone md:text-8xl">
              {n.replace(/[^0-9]/g, "")}
              <span className="text-edge">{n.replace(/[0-9]/g, "")}</span>
            </div>
            <div className="mt-3 font-sans text-xs uppercase tracking-[0.3em] text-bone/60">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 flex items-end justify-between gap-8">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-edge">— Capabilities</span>
            <h2 className="mt-6 font-display text-6xl leading-[0.9] text-bone md:text-8xl">
              Six disciplines.<br />
              <span className="italic font-editorial font-black text-edge">One standard.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              data-cursor="hover"
              className="reveal group relative overflow-hidden bg-background p-10 transition-colors duration-500 hover:bg-card md:p-12"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-edge scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
              <div className="font-sans text-xs uppercase tracking-[0.3em] text-edge">{s.n}</div>
              <h3 className="mt-8 font-display text-4xl text-bone md:text-5xl">{s.t}</h3>
              <p className="mt-6 max-w-sm font-sans text-sm leading-[1.7] text-bone/60">{s.d}</p>
              <div className="mt-10 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-bone/50 transition-all duration-500 group-hover:text-edge group-hover:gap-5">
                Capability brief <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative grain px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="reveal">
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-edge">— Selected Work</span>
            <h2 className="mt-6 font-display text-6xl leading-[0.9] text-bone md:text-8xl">
              The receipts.
            </h2>
          </div>
          <p className="reveal max-w-sm font-sans text-sm leading-[1.7] text-bone/60">
            A glimpse of recent productions across launches, activations and private moments.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <WorkCard img={work1} title="Aether 01 — Launch" type="Product Launch" tall className="col-span-12 md:col-span-7 row-span-2" />
          <WorkCard img={work2} title="Voltcon Pavilion" type="Brand Activation" className="col-span-12 md:col-span-5" />
          <WorkCard img={work3} title="The Saffron Awards" type="Award Ceremony" className="col-span-12 md:col-span-5" />
          <WorkCard img={work5} title="Northwind Summit" type="Corporate Conference" className="col-span-12 md:col-span-7" />
          <WorkCard img={work4} title="Maison Aubert Soirée" type="Private Experience" tall className="col-span-12 md:col-span-5" />
        </div>
      </div>
    </section>
  );
}

function WorkCard({ img, title, type, className = "", tall = false }: { img: string; title: string; type: string; className?: string; tall?: boolean }) {
  return (
    <div
      data-cursor="hover"
      className={`reveal group relative overflow-hidden bg-card ${tall ? "min-h-[520px]" : "min-h-[340px]"} ${className}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-edge/0 transition-colors duration-500 group-hover:bg-edge/10" />
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
        <div className="font-sans text-[11px] uppercase tracking-[0.3em] text-edge">{type}</div>
        <h3 className="mt-3 font-display text-4xl text-bone md:text-5xl">{title}</h3>
        <div className="mt-4 h-px w-0 bg-bone transition-all duration-700 group-hover:w-24" />
      </div>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-24 text-center">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-edge">— Process</span>
          <h2 className="mt-6 font-display text-6xl leading-[0.9] text-bone md:text-8xl">
            From brief to <span className="italic font-editorial font-black text-edge">bow</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          {STEPS.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <div key={s.n} className={`reveal relative grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-20 ${left ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className={left ? "md:text-right" : ""}>
                  <div className="font-display text-[120px] leading-none text-edge/20 md:text-[180px]">{s.n}</div>
                </div>
                <div>
                  <h3 className="font-display text-4xl text-bone md:text-5xl">{s.t}</h3>
                  <p className="mt-5 max-w-md font-sans text-base leading-[1.8] text-bone/65">{s.d}</p>
                </div>
                <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-edge md:block" style={{ boxShadow: "0 0 30px 4px var(--edge)" }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const cur = TESTIMONIALS[i];
  return (
    <section className="relative grain border-y border-border bg-card/40 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="font-editorial text-[260px] leading-none text-edge md:text-[400px]" style={{ marginBottom: "-100px" }}>
          "
        </div>
        <div className="relative min-h-[280px]">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-all duration-700"
              style={{ opacity: idx === i ? 1 : 0, transform: idx === i ? "translateY(0)" : "translateY(20px)" }}
            >
              <p className="font-editorial text-3xl italic leading-[1.25] text-bone md:text-5xl">
                {t.q}
              </p>
              <div className="mt-12 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-edge/20 font-display text-xl text-edge">
                  {t.n.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-bone">{t.n}</div>
                  <div className="font-sans text-xs uppercase tracking-[0.2em] text-bone/50">{t.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-3">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              data-cursor="hover"
              onClick={() => setI(idx)}
              className={`h-px w-16 transition-all duration-500 ${idx === i ? "bg-edge" : "bg-bone/20"}`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative grain overflow-hidden px-6 py-40 md:px-12">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.24 25 / 0.25), transparent 60%)" }}
      />
      <div className="mx-auto max-w-[1400px] text-center">
        <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-edge">— Let's Talk</span>
        <h2 className="reveal mt-8 font-display text-[14vw] leading-[0.85] text-bone md:text-[8.5vw]">
          LET'S BUILD<br />
          <span className="italic font-editorial font-black text-edge text-glow">something</span><br />
          UNFORGETTABLE.
        </h2>

        <div className="mt-16 flex justify-center">
          <MagneticButton>
            Start a Project <span aria-hidden>→</span>
          </MagneticButton>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {[
            ["Email", "hello@edge-events.com"],
            ["Phone", "+1 (212) 555 0143"],
          ].map(([l, v]) => (
            <a key={l} href={l === "Email" ? `mailto:${v}` : `tel:${v.replace(/\D/g, "")}`} className="group block">
              <div className="font-sans text-[11px] uppercase tracking-[0.4em] text-bone/50">{l}</div>
              <div className="mt-3 font-display text-3xl text-bone transition-colors duration-300 group-hover:text-edge md:text-4xl">{v}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <a href="#top" className="font-display text-2xl tracking-[0.2em] text-bone">
          EDGE<span className="text-edge">.</span>
        </a>
        <nav className="flex flex-wrap gap-8">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="hover-edge font-sans text-[11px] uppercase tracking-[0.3em] text-bone/60">{l}</a>
          ))}
        </nav>
        <div className="flex gap-6">
          {["IG", "LN", "VM", "BE"].map((s) => (
            <a key={s} href="#" data-cursor="hover" className="font-sans text-[11px] uppercase tracking-[0.3em] text-bone/60 hover:text-edge">{s}</a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1600px] justify-between font-sans text-[11px] uppercase tracking-[0.3em] text-bone/40">
        <span>© {new Date().getFullYear()} Edge Events</span>
        <span>Worldwide — Headquartered in NYC</span>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="relative bg-background text-foreground pb-14 md:pb-0">
      <EdgeCursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
