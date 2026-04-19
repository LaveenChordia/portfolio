"use client";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export default function ScrollyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const { scrollYProgress } = useScroll({ target: containerRef });

  // Scroll-linked opacity/position for three text overlays
  const text1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.28, 0.35], [1, 1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.28, 0.35], ["0%", "-5%", "-10%"]);

  const text2Opacity = useTransform(scrollYProgress, [0.28, 0.38, 0.52, 0.60], [0, 1, 1, 0]);
  const text2X = useTransform(scrollYProgress, [0.28, 0.38, 0.60], ["-6%", "0%", "-6%"]);

  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.80, 0.88], [0, 1, 1, 0]);
  const text3X = useTransform(scrollYProgress, [0.55, 0.65, 0.88], ["6%", "0%", "6%"]);

  // Canvas background color transitions with scroll
  const gradientProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init particles
    const NUM = 80;
    particlesRef.current = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 0.5,
      color: Math.random() > 0.5 ? "#ffffff" : "#a3a3a3",
      alpha: Math.random() * 0.6 + 0.1,
    }));

    let progress = 0;
    const unsubscribe = gradientProgress.on("change", (v) => { progress = v; });

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Cinematic dual-tone gradient background
      const r = Math.round(5 + progress * 8);
      const g = Math.round(8 + progress * 4);
      const b = Math.round(18 + progress * 10);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(0, 0, w, h);

      // Radial glow — orange top-right
      const orangeGlow = ctx.createRadialGradient(w * 0.75, h * 0.2, 0, w * 0.75, h * 0.2, w * 0.5);
      orangeGlow.addColorStop(0, `rgba(255,255,255,${0.12 + progress * 0.06})`);
      orangeGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = orangeGlow;
      ctx.fillRect(0, 0, w, h);

      // Radial glow — blue bottom-left
      const blueGlow = ctx.createRadialGradient(w * 0.25, h * 0.8, 0, w * 0.25, h * 0.8, w * 0.6);
      blueGlow.addColorStop(0, `rgba(163,163,163,${0.10 + progress * 0.08})`);
      blueGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = blueGlow;
      ctx.fillRect(0, 0, w, h);

      // Center spotlight
      const centerGlow = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.35);
      centerGlow.addColorStop(0, `rgba(255,255,255,${0.04 + progress * 0.04})`);
      centerGlow.addColorStop(0.5, `rgba(163,163,163,${0.03})`);
      centerGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, w, h);

      // Particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", `,${p.alpha})`).replace("rgb", "rgba");
        ctx.fill();
      });

      // Horizontal light streaks
      for (let i = 0; i < 3; i++) {
        const y = h * (0.3 + i * 0.2);
        const grad = ctx.createLinearGradient(0, y, w, y);
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.3 + progress * 0.2, `rgba(255,255,255,${0.06 + progress * 0.04})`);
        grad.addColorStop(0.7 - progress * 0.1, `rgba(163,163,163,${0.04 + progress * 0.03})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, y - 0.5, w, 1);
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
      unsubscribe();
    };
  }, [gradientProgress]);

  return (
    <div ref={containerRef} style={{ height: "500vh" }} className="relative">
      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-8 py-6">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-neutral-300">
            LC
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-neutral-300 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Text #1 — Center: Name & Title (0–30%) */}
        <motion.div
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8"
        >
          <div className="badge mb-6 fade-up">Available for Opportunities</div>
          <h1 className="text-6xl md:text-8xl font-black mb-3 leading-none tracking-tight">
            <span className="gradient-text">Laveen</span>
            <br />
            <span className="text-slate-100">Chordia</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light mt-4 max-w-lg">
            Full-Stack Developer · Co-Founder · CGPA 9.19
          </p>
          <div className="mt-8 flex gap-3 flex-wrap justify-center">
            {["React", "Python", "Next.js", "AI/ML", "MongoDB"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-center gap-2 text-slate-500 text-sm animate-bounce">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            scroll to explore
          </div>
        </motion.div>

        {/* Text #2 — Left: Tagline (30–60%) */}
        <motion.div
          style={{ opacity: text2Opacity, x: text2X }}
          className="absolute inset-0 flex flex-col justify-center pl-12 md:pl-24 z-10 max-w-xl"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-300 mb-4">
            What I do
          </p>
          <h2 className="text-5xl md:text-7xl font-black leading-tight text-slate-100">
            I build<br />
            <span className="gradient-text">digital</span><br />
            experiences.
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-sm leading-relaxed">
            From AI-driven workflows to production web apps — delivering real business value.
          </p>
        </motion.div>

        {/* Text #3 — Right: Mission (60–88%) */}
        <motion.div
          style={{ opacity: text3Opacity, x: text3X }}
          className="absolute inset-0 flex flex-col justify-center items-end pr-12 md:pr-24 z-10"
        >
          <div className="max-w-lg text-right">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-4">
              My mission
            </p>
            <h2 className="text-5xl md:text-7xl font-black leading-tight text-slate-100">
              Bridging<br />
              <span className="gradient-text">design</span><br />
              & engineering.
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              Co-Founder of Nexalyte Tech — building software that solves real problems for real businesses.
            </p>
          </div>
        </motion.div>

        {/* Decorative corner lines */}
        <div className="absolute bottom-8 right-8 z-10 text-slate-600 text-xs tracking-widest uppercase">
          Pune, India
        </div>
        <div className="absolute bottom-8 left-8 z-10 flex items-center gap-2">
          <div className="w-6 h-px bg-neutral-400/50 neon-line" />
          <span className="text-slate-600 text-xs tracking-widest uppercase">2026</span>
        </div>
      </div>
    </div>
  );
}
