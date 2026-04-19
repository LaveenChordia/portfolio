"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const experiences = [
  {
    role: "Co-Founder",
    company: "Nexalyte Tech Solutions",
    type: "Startup",
    period: "Oct 2025 — Present",
    color: "#ffffff",
    icon: "🚀",
    bullets: [
      "Built custom software and AI-driven workflow solutions for MSMEs.",
      "Developed client-specific systems from requirements analysis to deployment.",
      "Commercialized via service delivery, licensing, and subscriptions.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "The Tech Clan",
    type: "Internship",
    period: "Jun 2025 — Jun 2026",
    color: "#a3a3a3",
    icon: "💻",
    bullets: [
      "Built production web apps for legal and healthcare domains.",
      "Implemented frontend, backend, and AI/LLM API integrations.",
      "Conducted applied research on LLMs, GPUs, and emerging ML models.",
    ],
  },
  {
    role: "Business Development Intern",
    company: "Aergon Prestressing Systems",
    type: "Internship",
    period: "Jun 2024 — Jul 2024",
    color: "#8b5cf6",
    icon: "📈",
    bullets: [
      "Identified and qualified client leads through research and outreach.",
      "Supported tendering, bid documentation, and RFQ coordination.",
      "Acted as liaison between engineers and clients through pre-contract phase.",
    ],
  },
  {
    role: "Business Operations & Strategy",
    company: "Roopsangam — Family Business",
    type: "Ongoing",
    period: "2018 — Present",
    color: "#10b981",
    icon: "🏪",
    bullets: [
      "Executed pricing strategies based on sales velocity and past trends.",
      "Automated inventory tracking, reporting, and coordination workflows.",
      "Analyzed historical sales data to optimize stock and reduce dead inventory.",
    ],
  },
];

const projects = [
  {
    title: "Violence Detection System",
    subtitle: "Deep Learning · Computer Vision",
    desc: "Automated violence detection using Hybrid CNN–LSTM (ResNet50 + Optical Flow), achieving 93.25% accuracy. Real-time video with 0.1s frame latency and SMTP-based automated security alerts.",
    tags: ["CNN", "LSTM", "ResNet50", "Python", "OpenCV"],
    stat: "93.25%",
    statLbl: "Detection Accuracy",
    color: "#ffffff",
    emoji: "🛡️",
  },
  {
    title: "MarketWise",
    subtitle: "FinTech · Stock Prediction",
    desc: "Stock prediction platform using Zerodha API and Random Forest models. Includes trend forecasting, sentiment analysis, divergence modeling, and a 'What If?' simulation engine.",
    tags: ["Python", "Random Forest", "Zerodha API", "FinTech"],
    stat: "80/20",
    statLbl: "Validated Split",
    color: "#a3a3a3",
    emoji: "📈",
  },
  {
    title: "Online Fraud Detection",
    subtitle: "Full-Stack · FinTech",
    desc: "End-to-end fraud detection system with intuitive frontend (HTML/CSS/JS), Python backend fraud logic, transaction analysis dashboard, and integrated data pipeline visualizations.",
    tags: ["Python", "JavaScript", "HTML/CSS", "FinTech"],
    stat: "Full-Stack",
    statLbl: "End-to-End",
    color: "#8b5cf6",
    emoji: "🔒",
  },
  {
    title: "Elderly Social Platform",
    subtitle: "Social Impact · International",
    desc: "Built at Singapore's Global Impact Startup Challenge — multilingual, voice-enabled web interface for elderly communities addressing social isolation. Led business model and shipped MVP.",
    tags: ["Voice UI", "Multilingual", "MVP", "Social Impact"],
    stat: "🌏 3rd Place",
    statLbl: "International",
    color: "#10b981",
    emoji: "🤝",
  },
];

const honours = [
  { place: "1st", event: "Fusion 2025 — FinTech Hackathon", org: "IIC–E-Cell & IEEE, SKNCOE", detail: "600+ participants · National Level", color: "#f59e0b", emoji: "🥇" },
  { place: "1st", event: "Pitchathon", org: "Vishwakarma University", detail: "Pitch Competition", color: "#f59e0b", emoji: "🥇" },
  { place: "1st", event: "National Science Day Hackathon", org: "National Science Day", detail: "Hackathon", color: "#f59e0b", emoji: "🥇" },
  { place: "2nd", event: "National Level Engineering Project Development Competition", org: "Symbiosis International University", detail: "Project Competition", color: "#94a3b8", emoji: "🥈" },
  { place: "2nd", event: "Visionary Hackathon", org: "Hackathon", detail: "Competition", color: "#94a3b8", emoji: "🥈" },
  { place: "2nd", event: "VYOMA Zonal Level Prototype Competition", org: "AISSMS IOIT", detail: "Zonal Level", color: "#94a3b8", emoji: "🥈" },
  { place: "2nd", event: "CONVENE National Level Project Competition", org: "Project Exhibition", detail: "National Level", color: "#94a3b8", emoji: "🥈" },
  { place: "3rd", event: "International Global Impact Startup Challenge", org: "Singapore University of Social Sciences", detail: "International Level", color: "#cd7f32", emoji: "🌏" },
  { place: "3rd", event: "CONVENE National Level Project Competition", org: "Ideation Exhibition", detail: "National Level", color: "#cd7f32", emoji: "🥉" },
  { place: "Consolation", event: "Innovation Fest", org: "Binghamton University New York", detail: "Collaboration", color: "#475569", emoji: "🏅" },
];

const extras = [
  { icon: "💃", label: "Dance Head", org: "VU Cultural Committee" },
  { icon: "⚽", label: "Inter-College Football Champions (2x)", org: "MIT-WPU — Team Captain" },
  { icon: "🏸", label: "All India University West Zone Badminton", org: "Vishwakarma University" },
  { icon: "🏆", label: "State Vishwanath Sports Meet 2025", org: "Badminton — 50+ universities" },
  { icon: "🎤", label: "Debate Competition Winner", org: "Solo & Group — VU" },
];

const skillGroups = [
  { cat: "Languages & Frameworks", icon: "⚡", color: "#ffffff", skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"] },
  { cat: "AI & Machine Learning", icon: "🤖", color: "#a3a3a3", skills: ["LLM Integration", "OpenAI API", "Anthropic API", "Hugging Face", "Applied ML Research", "Computer Vision"] },
  { cat: "Databases & Data", icon: "🗄️", color: "#8b5cf6", skills: ["MongoDB", "MySQL", "REST APIs", "Power BI", "Excel"] },
  { cat: "Product & Business", icon: "📊", color: "#10b981", skills: ["Product Discovery", "MVP Development", "Startup Ops", "MSME Digitization", "Pricing Strategy"] },
  { cat: "Tools & Practices", icon: "🛠️", color: "#f59e0b", skills: ["Git", "Process Automation", "Requirements Analysis", "Client Validation"] },
];

const certs = [
  { icon: "🎓", name: "IBM Generative AI for Project Managers", org: "Coursera" },
  { icon: "🐍", name: "Python Using AI", org: "AI for Techies" },
  { icon: "📊", name: "Power BI Workshop", org: "Office Masters" },
];

/* ─────────────────────────────────────────
   HERO CANVAS (scroll-linked animation)
───────────────────────────────────────── */
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    type P = { x: number; y: number; vx: number; vy: number; r: number; org: number; alpha: number };
    let particles: P[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 90 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2 + 0.5,
        org: Math.random() > 0.5 ? 1 : 0,  // 1=orange, 0=blue
        alpha: Math.random() * 0.55 + 0.1,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    // Track scroll progress
    const heroWrap = document.getElementById("hero-wrap")!;
    const onScroll = () => {
      const rect = heroWrap.getBoundingClientRect();
      const total = heroWrap.offsetHeight - window.innerHeight;
      progressRef.current = Math.max(0, Math.min(1, -rect.top / total));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll-linked overlay visibility
    const o1 = document.getElementById("o1");
    const o2 = document.getElementById("o2");
    const o3 = document.getElementById("o3");

    const lerp = (a: number, b: number, t: number) => a + (b - a) * Math.max(0, Math.min(1, t));
    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const updateOverlays = (p: number) => {
      if (!o1 || !o2 || !o3) return;
      // o1: 0–0.28 visible, 0.28–0.36 fade out
      const p1 = p < 0.28 ? 1 : ease(Math.max(0, 1 - (p - 0.28) / 0.1));
      // o2: 0.28–0.38 fade in, 0.52–0.60 fade out
      const p2 = p < 0.28 ? 0 : p < 0.38 ? ease((p - 0.28) / 0.1) : p < 0.52 ? 1 : ease(Math.max(0, 1 - (p - 0.52) / 0.1));
      // o3: 0.56–0.66 fade in, 0.82–0.92 fade out
      const p3 = p < 0.56 ? 0 : p < 0.66 ? ease((p - 0.56) / 0.1) : 1;

      o1.style.opacity = String(p1);
      o2.style.opacity = String(p2);
      o3.style.opacity = String(p3);
      o2.style.transform = `translateX(${lerp(-30, 0, (p - 0.28) / 0.12)}px)`;
      o3.style.transform = `translateX(${lerp(30, 0, (p - 0.56) / 0.12)}px)`;
    };

    const draw = () => {
      const p = progressRef.current;
      updateOverlays(p);
      const w = canvas.width, h = canvas.height;

      // Deep dark base
      ctx.fillStyle = `rgb(5,8,18)`;
      ctx.fillRect(0, 0, w, h);

      // Orange radial — top right
      const og = ctx.createRadialGradient(w * 0.72, h * 0.22, 0, w * 0.72, h * 0.22, w * 0.55);
      og.addColorStop(0, `rgba(255,255,255,${0.13 + p * 0.06})`);
      og.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = og; ctx.fillRect(0, 0, w, h);

      // Blue radial — bottom left
      const bg2 = ctx.createRadialGradient(w * 0.22, h * 0.78, 0, w * 0.22, h * 0.78, w * 0.6);
      bg2.addColorStop(0, `rgba(163,163,163,${0.10 + p * 0.08})`);
      bg2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = bg2; ctx.fillRect(0, 0, w, h);

      // Center glow
      const cg = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.3);
      cg.addColorStop(0, `rgba(255,255,255,${0.04 + p * 0.03})`);
      cg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = cg; ctx.fillRect(0, 0, w, h);

      // Particles
      particles.forEach(pt => {
        pt.x += pt.vx; pt.y += pt.vy;
        if (pt.x < 0) pt.x = w; if (pt.x > w) pt.x = 0;
        if (pt.y < 0) pt.y = h; if (pt.y > h) pt.y = 0;
        const col = pt.org ? `rgba(255,255,255,${pt.alpha})` : `rgba(163,163,163,${pt.alpha})`;
        ctx.beginPath(); ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = col; ctx.fill();
      });

      // Thin horizontal streaks
      for (let i = 0; i < 4; i++) {
        const y = h * (0.2 + i * 0.2);
        const sg = ctx.createLinearGradient(0, y, w, y);
        sg.addColorStop(0, "rgba(0,0,0,0)");
        sg.addColorStop(0.4, `rgba(255,255,255,${0.05 + p * 0.03})`);
        sg.addColorStop(0.6, `rgba(163,163,163,${0.04 + p * 0.02})`);
        sg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = sg; ctx.fillRect(0, y - 0.5, w, 1);
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />;
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Page() {
  return (
    <main style={{ background: "#050812", minHeight: "100vh" }}>

      {/* ════════════════════════════════
          HERO — 500vh Scrollytelling
      ════════════════════════════════ */}
      <div id="hero-wrap" className="hero-wrap">
        <div className="hero-sticky">
          <HeroCanvas />

          {/* Nav */}
          <nav className="hero-nav">
            <span className="hero-logo">LC</span>
            <ul className="hero-links">
              {["About", "Experience", "Projects", "Contact"].map(n => (
                <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
              ))}
            </ul>
          </nav>

          {/* Overlay 1 — Center: Name */}
          <div className="hero-overlay" id="o1" style={{ opacity: 1 }}>
            <span className="avail-badge">Open to Opportunities</span>
            <h1 className="hero-h1">
              <span className="gradient-text">Laveen</span><br />
              <span style={{ color: "#f1f5f9" }}>Chordia</span>
            </h1>
            <p className="hero-sub">User-focused builder of scalable products</p>
          </div>

          {/* Overlay 2 — Left: What I Do */}
          <div className="hero-overlay" id="o2" style={{ opacity: 0 }}>
            <span className="eyebrow">What I Build</span>
            <h2 className="hero-h2" style={{ color: "#f1f5f9" }}>
              I build<br />
              <span className="gradient-text">digital</span><br />
              experiences.
            </h2>
            <p className="hero-sub" style={{ maxWidth: 340 }}>
              From AI-driven workflows for MSMEs to production web apps — delivering real business value.
            </p>
          </div>

          {/* Overlay 3 — Right: Mission */}
          <div className="hero-overlay" id="o3" style={{ opacity: 0 }}>
            <span className="eyebrow eyebrow-blue">My Mission</span>
            <h2 className="hero-h2" style={{ color: "#f1f5f9", textAlign: "right" }}>
              Bridging<br />
              <span className="gradient-text">design</span><br />
              &amp; engineering.
            </h2>
            <p className="hero-sub" style={{ maxWidth: 340, textAlign: "right" }}>
              Co-Founder of Nexalyte Tech — building software that solves real problems for real businesses.
            </p>
          </div>

          {/* Scroll hint */}
          <div className="scroll-hint">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            scroll to explore
          </div>

          {/* Corner labels */}
          <span style={{ position: "absolute", bottom: 28, right: 40, zIndex: 10, color: "#334155", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Pune, India</span>
        </div>
      </div>

      <div className="divider" />

      {/* ════════════════════════════════
          ABOUT
      ════════════════════════════════ */}
      <section id="about" className="section">
        <div className="about-grid">
          {/* Left — bio */}
          <div>
            <span className="eyebrow">About Me</span>
            <h2 className="about-head">
              Student.<br />Builder.<br />
              <span className="gradient-text">Co-Founder.</span>
            </h2>
            <p className="about-bio">
              I&apos;m <strong>Laveen Subhash Chordia</strong>, a B.Tech Computer Engineering student at Vishwakarma University (<span className="hi" style={{ color: "#ffffff" }}>CGPA: 9.19</span>) and Co-Founder of <strong>Nexalyte Tech Solutions</strong>.
            </p>
            <p className="about-bio" style={{ marginTop: 14 }}>
              I build AI-driven software for MSMEs, full-stack production apps across legal, healthcare, and fintech domains, and conduct applied ML research — from LLMs to Computer Vision.
            </p>
            <p className="about-bio" style={{ marginTop: 14 }}>
              Off-screen: football team captain, All India Badminton representative at VU, and Dance Head at VU&apos;s Cultural Committee.
            </p>
          </div>

          {/* Right — stats + education */}
          <div>
            <div className="stat-grid">
              {[
                { n: "9.19", lbl: "CGPA", sub: "Vishwakarma University", c: "#ffffff" },
                { n: "3+", lbl: "Roles & Internships", sub: "Real product experience", c: "#a3a3a3" },
                { n: "5", lbl: "Competition Awards", sub: "National & International", c: "#8b5cf6" },
                { n: "4", lbl: "Projects Shipped", sub: "AI · FinTech · Impact", c: "#10b981" },
              ].map(s => (
                <div key={s.lbl} className="card stat-card">
                  <div className="stat-num" style={{ color: s.c }}>{s.n}</div>
                  <div className="stat-lbl">{s.lbl}</div>
                  <div className="stat-sub">{s.sub}</div>
                </div>
              ))}

              {/* Education spanning both columns */}
              <div className="card edu-card" style={{ gridColumn: "span 2" }}>
                <div className="eyebrow" style={{ marginBottom: 16 }}>Education</div>
                <div className="edu-row">
                  <div>
                    <div className="edu-name">B.Tech — Computer Engineering</div>
                    <div className="edu-org">Vishwakarma University, Pune · 2023–2026</div>
                  </div>
                  <div className="edu-grade" style={{ color: "#ffffff" }}>9.19 / 10</div>
                </div>
                <div className="edu-row">
                  <div>
                    <div className="edu-name">Diploma — Computer Engineering</div>
                    <div className="edu-org">MIT WPU School of Diploma · 2020–2023</div>
                  </div>
                  <div className="edu-grade" style={{ color: "#a3a3a3" }}>85.03%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ background: "linear-gradient(90deg, transparent, rgba(163,163,163,0.2), transparent)" }} />

      {/* ════════════════════════════════
          EXPERIENCE
      ════════════════════════════════ */}
      <section id="experience" className="section">
        <span className="eyebrow">Career</span>
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="t-item">
              <div className="t-left">
                <div className="t-icon" style={{ background: `${exp.color}1a`, border: `1.5px solid ${exp.color}50` }}>
                  {exp.icon}
                </div>
                {i < experiences.length - 1 && (
                  <div className="t-line" style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)` }} />
                )}
              </div>
              <div className="t-body">
                <div className="card t-card">
                  <div className="t-hdr">
                    <div>
                      <div className="t-role">{exp.role}</div>
                      <div className="t-company" style={{ color: exp.color }}>{exp.company}</div>
                    </div>
                    <div className="t-meta">
                      <span className="t-period">{exp.period}</span>
                      <span className="t-type" style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="t-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="t-bullet">
                        <span className="t-arrow" style={{ color: exp.color }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════════
          PROJECTS
      ════════════════════════════════ */}
      <section id="projects" className="section">
        <span className="eyebrow">Work</span>
        <h2 className="section-title">Projects</h2>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <div key={i} className="card proj-card">
              <div className="proj-orb" style={{ background: p.color }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="proj-top">
                  <div>
                    <span className="proj-emoji">{p.emoji}</span>
                    <div className="proj-title">{p.title}</div>
                    <div className="proj-sub" style={{ color: p.color }}>{p.subtitle}</div>
                  </div>
                  <div className="proj-stat">
                    <div className="proj-stat-n" style={{ color: p.color }}>{p.stat}</div>
                    <div className="proj-stat-l">{p.statLbl}</div>
                  </div>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag" style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

      {/* ════════════════════════════════
          HONOURS
      ════════════════════════════════ */}
      <section id="honours" className="section">
        <span className="eyebrow">Recognition</span>
        <h2 className="section-title">Honours &amp; Awards</h2>

        <div className="hon-grid">
          {honours.map((h, i) => (
            <div key={i} className="card hon-card">
              <span className="hon-emoji">{h.emoji}</span>
              <span className="hon-place" style={{ color: h.color }}>
                {h.place}{["1st", "2nd", "3rd"].includes(h.place) ? " Place" : " Prize"}
              </span>
              <div className="hon-event">{h.event}</div>
              <div className="hon-org">{h.org}</div>
              <div className="hon-detail">{h.detail}</div>
            </div>
          ))}
        </div>

        <span className="eyebrow eyebrow-blue" style={{ marginBottom: 20 }}>Extra-Curricular</span>
        <div className="extras">
          {extras.map((e, i) => (
            <div key={i} className="card extra-pill">
              <span className="extra-icon">{e.icon}</span>
              <div>
                <div className="extra-lbl">{e.label}</div>
                <div className="extra-org">{e.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════════
          SKILLS
      ════════════════════════════════ */}
      <section id="skills" className="section">
        <span className="eyebrow">Expertise</span>
        <h2 className="section-title">Skills</h2>

        <div className="sk-grid">
          {skillGroups.map((g, i) => (
            <div key={i} className="card sk-card">
              <div className="sk-head">
                <span className="sk-icon">{g.icon}</span>
                <span className="sk-name">{g.cat}</span>
              </div>
              <div className="sk-tags">
                {g.skills.map(s => (
                  <span key={s} className="tag" style={{ background: `${g.color}12`, color: g.color, border: `1px solid ${g.color}25` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <span className="eyebrow eyebrow-blue" style={{ marginBottom: 16 }}>Certifications</span>
        <div className="cert-row">
          {certs.map((c, i) => (
            <div key={i} className="card cert-card">
              <span className="cert-icon">{c.icon}</span>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-org">{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" style={{ background: "linear-gradient(90deg, transparent, rgba(163,163,163,0.2), transparent)" }} />

      {/* ════════════════════════════════
          CONTACT
      ════════════════════════════════ */}
      <section id="contact" className="section">
        <div className="contact-inner">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="contact-h">
            Let&apos;s build something<br />
            <span className="gradient-text">amazing together.</span>
          </h2>
          <p className="contact-sub">
            Whether you have a project idea, want to collaborate, or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-links">
            {[
              {
                href: "mailto:work.laveen@gmail.com", lbl: "Email", val: "work.laveen@gmail.com", color: "#ffffff",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              },
              {
                href: "https://linkedin.com/in/chordialaveen/", lbl: "LinkedIn", val: "chordialaveen", color: "#a3a3a3",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#a3a3a3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              },
              {
                href: "tel:+917722097510", lbl: "Phone", val: "+91 7722097510", color: "#10b981",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
              },
            ].map(l => (
              <a
                key={l.lbl}
                href={l.href}
                target={l.lbl === "LinkedIn" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card contact-link"
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${l.color}25`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
              >
                {l.icon}
                <div>
                  <span className="cl-lbl">{l.lbl}</span>
                  <span className="cl-val">{l.val}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="footer-bar">
            <span className="footer-copy">© 2026 Laveen Subhash Chordia — Pune, India</span>
            <div className="open-badge">
              <div className="dot-green" />
              Open to opportunities
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
