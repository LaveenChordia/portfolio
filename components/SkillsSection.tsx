"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    color: "#ffffff",
    icon: "⚡",
    skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    category: "AI & Machine Learning",
    color: "#a3a3a3",
    icon: "🤖",
    skills: ["LLM Integration", "OpenAI API", "Anthropic API", "Hugging Face", "Applied ML Research", "Computer Vision"],
  },
  {
    category: "Data & Databases",
    color: "#8b5cf6",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "REST APIs", "Power BI", "Excel", "Data Pipelines"],
  },
  {
    category: "Product & Business",
    color: "#10b981",
    icon: "📊",
    skills: ["Product Discovery", "MVP Development", "Startup Operations", "MSME Digitization", "Pricing Strategy", "Stakeholder Management"],
  },
  {
    category: "Tools & Practices",
    color: "#f59e0b",
    icon: "🛠️",
    skills: ["Git", "Process Automation", "Requirements Analysis", "Client Validation", "Data-Driven Decisions"],
  },
];

const certs = [
  { name: "IBM Generative AI for Project Managers", org: "Coursera", icon: "🎓" },
  { name: "Python Using AI", org: "AI for Techies", icon: "🐍" },
  { name: "Power BI Workshop", org: "Office Masters", icon: "📊" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-300 mb-3">Expertise</p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-100 section-header">Skills</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{group.icon}</span>
              <h3 className="text-sm font-bold text-slate-300">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: `${group.color}12`,
                    color: group.color,
                    border: `1px solid ${group.color}25`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-6">Certifications</p>
        <div className="flex flex-wrap gap-4">
          {certs.map((c, i) => (
            <div key={i} className="glass rounded-xl px-5 py-3 flex items-center gap-3 hover:border-white/15 transition-all duration-200">
              <span className="text-xl">{c.icon}</span>
              <div>
                <p className="text-sm font-semibold text-slate-200">{c.name}</p>
                <p className="text-xs text-slate-500">{c.org}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
