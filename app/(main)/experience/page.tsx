"use client";
import { Calendar, Building2, CheckCircle2, ShieldCheck, Code2, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLang } from "@/contexts/LangContext";

export default function ExperiencePage() {
  const { t, lang } = useLang();

  const experiences = [
    {
      id: 0,
      role: "Full-Stack & Mobile Engineer",
      company: "Koperasi Mahasiswa Unila (KOPMA)",
      period: lang === "id" ? "Maret 2026 – Juli 2026" : "March 2026 – July 2026",
      icon: Code2,
      color: "from-[#845EC2] to-[#0081CF]",
      badge: lang === "id" ? "Web, Mobile & App Security" : "Web, Mobile & App Security",
      bullets: lang === "id" ? [
        "Merancang dan mengimplementasikan web ekosistem User SIJUKO (Sistem Informasi Penjualan Koperasi)",
        "Mengembangkan dan mengintegrasikan fitur-fitur baru pada aplikasi Mobile SIJUKO",
        "Melakukan optimasi performa backend panel KOPMA dan efisiensi query database",
        "Membangun arsitektur keamanan (Cross-Platform Security Hardening) pada platform Web & Mobile"
      ] : [
        "Architected and implemented the SIJUKO User Web ecosystem (Cooperative Information & Commerce System)",
        "Engineered and integrated new feature modules into the SIJUKO Mobile Application",
        "Optimized KOPMA backend admin panel performance and database query efficiency",
        "Built cross-platform security hardening architectures across Web and Mobile applications"
      ],
      tags: ["SIJUKO Web", "Mobile App Development", "Backend Optimization", "Cross-Platform Security", "Full-Stack"]
    },
    {
      id: 1,
      role: "Full-Stack & Web Security Intern",
      company: "Kementerian Komunikasi dan Informatika Lam-Sel",
      period: lang === "id" ? "Mei 2024 – Juli 2024" : "May 2024 – July 2024",
      icon: ShieldCheck,
      color: "from-[#845EC2] to-[#2C73D2]",
      badge: lang === "id" ? "Pemerintahan & Keamanan Web" : "Government & Web Security",
      bullets: lang === "id" ? [
        "Mengembangkan Sistem Ticketing pada platform CSIRT (Computer Security Incident Response Team)",
        "Menganalisis dan memitigasi website terinfeksi serangan injection & defacement judi online",
        "Melakukan investigasi celah keamanan backend serta mengimplementasikan security patches"
      ] : [
        "Developed a Ticketing Incident Management System for the CSIRT (Computer Security Incident Response Team) platform",
        "Analyzed and mitigated cyber threats involving SQL injection & defacement attacks hijacking web browsers into online gambling content",
        "Investigated backend vulnerability root sources and deployed robust security patches"
      ],
      tags: ["PHP/Laravel", "CSIRT Ticketing", "Vulnerability Analysis", "SQL Injection Mitigation", "Backend Security"]
    },
    {
      id: 2,
      role: "Freelance Full-Stack Developer",
      company: "Independent Client Projects",
      period: lang === "id" ? "Maret 2022 – Sekarang" : "March 2022 – Present",
      icon: Code2,
      color: "from-[#0081CF] to-[#0089BA]",
      badge: lang === "id" ? "Pengembangan Web Full-Stack" : "Full-Stack Web Engineering",
      bullets: lang === "id" ? [
        "Mengembangkan aplikasi web custom berkinerja tinggi sesuai kebutuhan spesifik klien",
        "Mendesain antarmuka UI/UX yang responsif, modern, dan berorientasi pada pengalaman pengguna terbaik",
        "Merancang arsitektur database relasional yang skalabel dan efisien",
        "Mengelola deployment server, Nginx reverse proxy, serta konfigurasi cloud hosting"
      ] : [
        "Developed high-performance custom web applications tailored to specific client business requirements",
        "Designed responsive, modern UI/UX interfaces centered around optimal user experience & Ultra Glass aesthetics",
        "Architected scalable, efficient relational database schemas and API endpoints",
        "Managed cloud server deployments, Nginx reverse proxy configurations, and DNS routing"
      ],
      tags: ["React", "Next.js", "Laravel", "TailwindCSS", "Node.js", "MySQL", "Cloud Deployment"]
    },
    {
      id: 3,
      role: "Academic Software & Architecture Consultant",
      company: "Freelance Technical Advisory",
      period: lang === "id" ? "Januari 2024 – Sekarang" : "January 2024 – Present",
      icon: GraduationCap,
      color: "from-[#0089BA] to-[#008F7A]",
      badge: lang === "id" ? "Konsultasi Teknis & Arsitektur" : "Technical Advisory & Architecture",
      bullets: lang === "id" ? [
        "Memberikan bimbingan teknis tingkat lanjut kepada mahasiswa dalam pengembangan aplikasi web tugas akhir & proyek",
        "Membantu perancangan arsitektur sistem, skema database, dan alur pemrosesan aplikasi",
        "Membimbing implementasi antarmuka UI/UX dan logika pemrograman frontend/backend",
        "Memberikan konsultasi debugging, optimasi performa kode, serta penyusunan dokumentasi teknis"
      ] : [
        "Provided advanced technical mentorship to engineering students in building complex web applications for final theses & projects",
        "Guided system architecture design, database schema modeling, and core application workflows",
        "Mentored UI/UX implementations, frontend/backend logic execution, and code refactoring",
        "Conducted code debugging sessions, performance optimization, and comprehensive technical documentation drafting"
      ],
      tags: ["System Architecture", "Database Schema Design", "Code Optimization", "Debugging", "Technical Advisory"]
    }
  ];

  return (
    <div className="py-24 px-6 bg-[#F3EFFB] dark:bg-[#0B0F1A] transition-colors duration-300 relative overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background Ambient Glowing Blobs */}
      <div className="pointer-events-none absolute top-20 -left-20 w-[650px] h-[650px] rounded-full bg-[#845EC2]/12 dark:bg-[#845EC2]/18 blur-[150px] z-0 animate-pulse" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-[#0081CF]/12 dark:bg-[#0081CF]/18 blur-[130px] z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#845EC2] dark:text-[#A78BFA] mb-5 px-4 py-2 rounded-full glass-ultra-pill">
              <span className="w-2 h-2 rounded-full bg-[#845EC2] dark:bg-[#A78BFA] animate-pulse" />
              {t("exp.title")}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              {t("exp.heading")}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-normal text-base md:text-lg leading-relaxed">
              {t("exp.subheading")}
            </p>
          </div>
        </ScrollReveal>

        {/* TIMELINE CARDS */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-[#845EC2]/30 space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <ScrollReveal key={exp.id} delay={0.15 + index * 0.1} yOffset={40}>
                <div className="relative group">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-10 h-10 rounded-2xl bg-[#845EC2] text-white border-4 border-[#F3EFFB] dark:border-[#0B0F1A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="glass-ultra-card p-8 rounded-3xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 border-b border-slate-200/80 dark:border-white/10 pb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#845EC2] dark:group-hover:text-[#A78BFA] transition-colors">
                            {exp.role}
                          </h3>
                        </div>
                        <p className="text-sm font-semibold text-[#845EC2] dark:text-[#A78BFA] flex items-center gap-2">
                          <Building2 className="w-4 h-4 inline" />
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3.5 py-1.5 rounded-full glass-ultra-pill text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#845EC2]/10 text-[#845EC2] dark:text-[#A78BFA] border border-[#845EC2]/20">
                          {exp.badge}
                        </span>
                      </div>
                    </div>

                    {/* BULLET POINTS */}
                    <div className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#845EC2] dark:text-[#A78BFA] flex-shrink-0 mt-0.5" />
                          <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60 dark:border-white/10">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3.5 py-1.5 rounded-xl glass-ultra-pill text-slate-800 dark:text-slate-200 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
