import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laveen Chordia — Developer & Co-Founder",
  description: "Portfolio of Laveen Subhash Chordia — Full-Stack Developer, Co-Founder of Nexalyte Tech Solutions, and B.Tech Computer Engineering student at Vishwakarma University with CGPA 9.19.",
  keywords: ["Laveen Chordia", "Full Stack Developer", "Portfolio", "Nexalyte", "Vishwakarma University"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#050812] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
