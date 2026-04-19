"use client";
import { motion } from "framer-motion";

const honours = [
  {
    place: "1st",
    event: "Fusion 2025 — FinTech Hackathon",
    org: "IIC–E-Cell & IEEE, SKNCOE",
    detail: "600+ participants · National Level",
    color: "#f59e0b",
    icon: "🥇",
  },
  {
    place: "1st",
    event: "Pitchathon",
    org: "Vishwakarma University",
    detail: "Pitch Competition",
    color: "#f59e0b",
    icon: "🥇",
  },
  {
    place: "1st",
    event: "National Science Day Hackathon",
    org: "National Science Day",
    detail: "Hackathon",
    color: "#f59e0b",
    icon: "🥇",
  },
  {
    place: "2nd",
    event: "National Level Engineering Project Development Competition",
    org: "Symbiosis International University",
    detail: "Project Competition",
    color: "#94a3b8",
    icon: "🥈",
  },
  {
    place: "2nd",
    event: "Visionary Hackathon",
    org: "Hackathon",
    detail: "Competition",
    color: "#94a3b8",
    icon: "🥈",
  },
  {
    place: "2nd",
    event: "VYOMA Zonal Level Prototype Competition",
    org: "AISSMS IOIT",
    detail: "Zonal Level",
    color: "#94a3b8",
    icon: "🥈",
  },
  {
    place: "2nd",
    event: "CONVENE National Level Project Competition",
    org: "Project Exhibition",
    detail: "National Level",
    color: "#94a3b8",
    icon: "🥈",
  },
  {
    place: "3rd",
    event: "International Global Impact Startup Challenge",
    org: "Singapore University of Social Sciences",
    detail: "International Level",
    color: "#cd7f32",
    icon: "🌏",
  },
  {
    place: "3rd",
    event: "CONVENE National Level Project Competition",
    org: "Ideation Exhibition",
    detail: "National Level",
    color: "#cd7f32",
    icon: "🥉",
  },
  {
    place: "Consolation",
    event: "Innovation Fest",
    org: "Binghamton University New York",
    detail: "Collaboration",
    color: "#475569",
    icon: "🏅",
  },
];

const extras = [
  { label: "Dance Head", org: "VU Cultural Committee", icon: "💃" },
  { label: "Football Champions (2x)", org: "MIT-WPU CS Dept — Team Captain", icon: "⚽" },
  { label: "All India University West Zone Badminton", org: "Vishwakarma University", icon: "🏸" },
  { label: "State Vishwanath Sports Meet 2025", org: "Badminton — 50+ universities", icon: "🏆" },
  { label: "Debate Competition Winner", org: "Solo & Group — Vishwakarma University", icon: "🎤" },
];

export default function HonoursSection() {
  return (
    <section id="honours" className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-300 mb-3">Recognition</p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-100 section-header">Honours & Awards</h2>
      </motion.div>

      {/* Competition wins */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {honours.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-5 hover:border-white/15 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{h.icon}</span>
              <div>
                <span
                  className="text-xs font-black tracking-widest uppercase"
                  style={{ color: h.color }}
                >
                  {h.place}{["1st", "2nd", "3rd"].includes(h.place) ? " Place" : " Prize"}
                </span>
                <h3 className="text-sm font-bold text-slate-200 mt-0.5">{h.event}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{h.org}</p>
                <p className="text-xs text-slate-600 mt-1">{h.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra-curricular */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-6">Extra-Curricular</p>
        <div className="flex flex-wrap gap-3">
          {extras.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:border-white/15 transition-all duration-200"
            >
              <span className="text-lg">{e.icon}</span>
              <div>
                <p className="text-sm font-semibold text-slate-200">{e.label}</p>
                <p className="text-xs text-slate-500">{e.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
