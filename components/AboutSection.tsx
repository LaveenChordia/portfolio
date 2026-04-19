"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-400 mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-8 section-header leading-tight">
            Student.<br />Builder.<br />
            <span className="gradient-text">Co-Founder.</span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I&apos;m <span className="text-slate-200 font-semibold">Laveen Subhash Chordia</span>, a B.Tech Computer Engineering student at Vishwakarma University (CGPA: 9.19) and Co-Founder of <span className="text-orange-400 font-semibold">Nexalyte Tech Solutions</span>.
            </p>
            <p>
              I build AI-driven software for MSMEs, full-stack production apps (legal, healthcare, fintech), and explore cutting-edge ML — from LLMs to Computer Vision. My work sits at the intersection of business strategy and engineering.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m captaining football teams, representing VU in All India Badminton, or leading dance performances at VU&apos;s Cultural Committee.
            </p>
          </div>
        </motion.div>

        {/* Right: Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { stat: "9.19", label: "CGPA", sub: "Vishwakarma University", color: "#f97316" },
            { stat: "3+", label: "Startups & Internships", sub: "Real product experience", color: "#3b82f6" },
            { stat: "5", label: "Competition Awards", sub: "National & International", color: "#8b5cf6" },
            { stat: "4", label: "Projects Shipped", sub: "AI · FinTech · Social Impact", color: "#10b981" },
          ].map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group"
            >
              <div
                className="text-4xl font-black mb-1 group-hover:scale-105 transition-transform duration-300 origin-left"
                style={{ color: item.color }}
              >
                {item.stat}
              </div>
              <div className="text-sm font-bold text-slate-200">{item.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
            </div>
          ))}

          {/* Education card */}
          <div className="glass rounded-2xl p-5 col-span-2 hover:border-white/15 transition-all duration-300">
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-3">Education</p>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-slate-200">B.Tech — Computer Engineering</p>
                  <p className="text-xs text-slate-500">Vishwakarma University, Pune · 2023–2026</p>
                </div>
                <span className="text-orange-400 font-black text-sm shrink-0">9.19 / 10</span>
              </div>
              <div className="w-full h-px bg-white/5" />
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-slate-200">Diploma — Computer Engineering</p>
                  <p className="text-xs text-slate-500">MIT WPU School of Diploma · 2020–2023</p>
                </div>
                <span className="text-blue-400 font-black text-sm shrink-0">85.03%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
