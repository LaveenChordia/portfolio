"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Violence Detection System",
    subtitle: "Deep Learning · Computer Vision",
    description:
      "Automated violence detection using Hybrid CNN–LSTM (ResNet50 + Optical Flow) achieving 93.25% accuracy. Real-time video processing with 0.1s frame latency and SMTP-based automated alerts.",
    tags: ["CNN", "LSTM", "ResNet50", "Python", "Computer Vision"],
    stat: "93.25% accuracy",
    statLabel: "Detection Accuracy",
    color: "#ffffff",
    emoji: "🛡️",
    link: "#",
  },
  {
    title: "MarketWise",
    subtitle: "FinTech · ML · Stock Prediction",
    description:
      "Web-based stock prediction platform using Zerodha API and Random Forest models. Includes trend forecasting, sentiment analysis, divergence modeling, and a What If? simulation engine.",
    tags: ["Python", "Random Forest", "Zerodha API", "JavaScript", "ML"],
    stat: "80/20 split",
    statLabel: "Validated Models",
    color: "#a3a3a3",
    emoji: "📈",
    link: "#",
  },
  {
    title: "Online Fraud Detection",
    subtitle: "Full-Stack · FinTech",
    description:
      "End-to-end fraud detection system with intuitive frontend (HTML/CSS/JS), Python backend fraud logic, transaction analysis UI, and integrated data pipeline visualizations.",
    tags: ["Python", "JavaScript", "HTML/CSS", "Financial Tech"],
    stat: "Full-Stack",
    statLabel: "End-to-End System",
    color: "#8b5cf6",
    emoji: "🔒",
    link: "#",
  },
  {
    title: "Elderly Social Platform",
    subtitle: "Social Impact · International",
    description:
      "Built at the Global Impact Startup Challenge (Singapore) — multilingual, voice-enabled web interface for elderly communities. Led business model design and shipped an MVP.",
    tags: ["Voice UI", "Multilingual", "MVP", "Social Impact", "UX"],
    stat: "🌏 Singapore",
    statLabel: "Int'l Challenge",
    color: "#10b981",
    emoji: "🤝",
    link: "#",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-300 mb-3">Work</p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-100 section-header">Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="glass rounded-2xl p-7 group cursor-pointer relative overflow-hidden transition-all duration-300"
            style={{
              boxShadow: `0 0 0 0 ${p.color}00`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${p.color}20, 0 0 0 1px ${p.color}30`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${p.color}00`;
            }}
          >
            {/* Background gradient orb */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{ background: p.color }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl mb-1 block">{p.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: p.color }}>
                    {p.subtitle}
                  </p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-lg font-black" style={{ color: p.color }}>{p.stat}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{p.statLabel}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                    style={{
                      background: `${p.color}12`,
                      color: p.color,
                      border: `1px solid ${p.color}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
