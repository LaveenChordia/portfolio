"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    role: "Co-Founder",
    company: "Nexalyte Tech Solutions",
    type: "Startup",
    period: "Oct 2025 — Present",
    color: "#ffffff",
    icon: "🚀",
    bullets: [
      "Built custom software and AI-driven workflow solutions for MSMEs",
      "Developed client-specific systems from requirements analysis to deployment",
      "Commercialized solutions via service delivery, licensing, and subscriptions",
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
      "Built production web apps for legal and healthcare domains",
      "Worked across the full stack — frontend, backend, and AI API integrations",
      "Conducted applied research on LLMs, GPUs, and emerging ML models",
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
      "Identified and qualified client leads through market research and outreach",
      "Supported tendering and proposals by coordinating RFQs and bid documentation",
      "Served as liaison between engineers and clients for pre-contract discussions",
    ],
  },
  {
    role: "Business Operations & Strategy",
    company: "Roopsangam",
    type: "Family Business",
    period: "2018 — Present",
    color: "#10b981",
    icon: "🏪",
    bullets: [
      "Executed pricing/discount strategies based on sales velocity and trends",
      "Automated manual operational tasks (inventory, reporting, coordination)",
      "Analyzed historical sales data to optimize stock planning and margins",
    ],
  },
];

function TimelineItem({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative flex gap-6 mb-12"
    >
      {/* Left dot + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-lg"
          style={{ background: `${exp.color}22`, border: `1.5px solid ${exp.color}50` }}
        >
          {exp.icon}
        </div>
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 mt-3" style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)` }} />
        )}
      </div>

      {/* Card */}
      <div className="glass rounded-2xl p-6 flex-1 hover:border-white/15 transition-all duration-300 group">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
            <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-slate-500">{exp.period}</span>
            <span
              className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
            >
              {exp.type}
            </span>
          </div>
        </div>
        <ul className="space-y-1.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="text-slate-400 text-sm flex gap-2">
              <span style={{ color: exp.color }} className="mt-0.5 shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="py-28 px-6 md:px-16 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-300 mb-3">Career</p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-100 section-header">Work Experience</h2>
      </motion.div>
      <div>
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
