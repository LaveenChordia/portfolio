"use client";
import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "work.laveen@gmail.com",
    href: "mailto:work.laveen@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: "#f97316",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/chordialaveen",
    href: "https://www.linkedin.com/in/chordialaveen/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "#3b82f6",
  },
  {
    label: "Phone",
    value: "+91 7722097510",
    href: "tel:+917722097510",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
      </svg>
    ),
    color: "#10b981",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 md:px-16 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-400 mb-4">Get in Touch</p>
        <h2 className="text-4xl md:text-6xl font-black text-slate-100 mb-6 leading-tight">
          Let&apos;s build something<br />
          <span className="gradient-text">amazing together.</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Whether you have a project in mind, want to collaborate, or just say hi — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.label !== "Phone" && link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2, scale: 1.03 }}
              className="glass rounded-2xl px-6 py-4 flex items-center gap-3 hover:border-white/15 transition-all duration-300 group"
              style={{
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${link.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <span style={{ color: link.color }}>{link.icon}</span>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">{link.label}</p>
                <p className="text-sm font-semibold text-slate-200">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 Laveen Subhash Chordia · Pune, India
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-slate-500 text-sm">Open to opportunities</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
