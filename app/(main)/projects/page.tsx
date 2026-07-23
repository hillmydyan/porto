"use client";
import { useState } from "react";
import { ExternalLink, Layers, Cpu, Globe, Smartphone, X, CheckCircle2, ChevronRight, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ScrollReveal } from "@/components/ScrollReveal";
import ElectricBorder from "@/components/ElectricBorder";
import { useLang } from "@/contexts/LangContext";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  year: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  screenshots: { title: string; desc: string; gradient: string }[];
}

export default function Projects() {
  const { t, lang } = useLang();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "SIJUKO - KOPMA Unila Platform",
      category: lang === "id" ? "Web & Mobile Ecosystem" : "Web & Mobile Ecosystem",
      shortDesc: lang === "id" 
        ? "Ekosistem Web User, Mobile App, dan Backend Panel Koperasi Mahasiswa Unila dengan sistem keamanan terintegrasi."
        : "Complete Web User, Mobile App, and Backend Admin Panel ecosystem with integrated cross-platform security.",
      fullDesc: lang === "id"
        ? "Platform e-commerce dan manajemen Koperasi Mahasiswa Unila (SIJUKO). Mencakup halaman Web User untuk transaksi online, modul fitur baru pada aplikasi mobile, optimasi query panel backend, dan penerapan Cross-Platform Security Hardening."
        : "Comprehensive e-commerce & management platform for KOPMA Unila (SIJUKO). Features a Web User storefront, new mobile app functionality, optimized backend panel queries, and cross-platform security hardening.",
      tools: ["Next.js", "React Native", "Laravel", "TailwindCSS", "MySQL", "Docker"],
      gradient: "from-[#845EC2] to-[#0081CF]",
      icon: Globe,
      year: "2026",
      githubUrl: "https://github.com/hillmydyan/sijuko-kopma-unila",
      liveUrl: "https://sijuko.kopma-unila.ac.id",
      features: lang === "id" ? [
        "Web User Storefront untuk katalog produk & transaksi koperasi online",
        "Modul fitur aplikasi mobile SIJUKO responsif",
        "Backend admin panel dengan optimasi performa query database",
        "Keamanan sistem lintas platform (Cross-Platform Security Build)"
      ] : [
        "Web User Storefront for online cooperative catalog & transactions",
        "Responsive feature module integration for SIJUKO Mobile App",
        "Optimized backend admin panel query performance",
        "Cross-Platform Security Build & vulnerability protection"
      ],
      screenshots: [
        { title: "Web User Homepage", desc: "Halaman katalog produk & checkout belanja SIJUKO", gradient: "from-[#845EC2] to-[#2C73D2]" },
        { title: "Mobile App Interface", desc: "Tampilan aplikasi mobile SIJUKO dengan fitur baru", gradient: "from-[#0081CF] to-[#0089BA]" },
        { title: "Backend Admin Panel", desc: "Panel pengelolaan inventaris & laporan transaksi KOPMA", gradient: "from-[#0089BA] to-[#008F7A]" }
      ]
    },
    {
      id: 2,
      title: "CSIRT Kominfo Incident & Security System",
      category: lang === "id" ? "Cyber Security & Incident Management" : "Cyber Security & Incident Management",
      shortDesc: lang === "id"
        ? "Sistem ticketing CSIRT dan platform investigasi celah keamanan serangan injection & defacement."
        : "Government CSIRT ticketing system and cyber threat mitigation platform for web defacement attacks.",
      fullDesc: lang === "id"
        ? "Sistem penanganan insiden keamanan jaringan Kominfo Lam-Sel. Mengembangkan portal ticketing CSIRT, menganalisis website terinfeksi serangan injection & defacement judi online, serta menginvestigasi celah keamanan backend."
        : "Cyber incident management system for Kominfo Lam-Sel. Built the CSIRT ticketing portal, analyzed websites targeted by SQL injection & defacement attacks, and deployed backend vulnerability patches.",
      tools: ["PHP/Laravel", "MySQL", "Security Audit", "REST API", "TailwindCSS"],
      gradient: "from-[#0081CF] to-[#0089BA]",
      icon: Cpu,
      year: "2024",
      githubUrl: "https://github.com/hillmydyan/csirt-kominfo-system",
      liveUrl: "https://csirt.lampungselatankab.go.id",
      features: lang === "id" ? [
        "Sistem Ticketing CSIRT untuk pelaporan insiden keamanan cyber",
        "Dashboard analisis serangan injection & defacement judi online",
        "Investigasi celah keamanan backend & rekomendasi patching",
        "Sistem log audit keamanan real-time"
      ] : [
        "CSIRT Incident Ticketing system for security reporting",
        "Cyber attack analysis dashboard for SQL injection & defacement",
        "Backend vulnerability investigation & patching framework",
        "Real-time security audit logging"
      ],
      screenshots: [
        { title: "CSIRT Ticketing Dashboard", desc: "Dashboard pelaporan & penanganan insiden cyber", gradient: "from-[#0081CF] to-[#0089BA]" },
        { title: "Defacement Analysis View", desc: "Panel investigasi serangan injection & defacement", gradient: "from-[#0089BA] to-[#008F7A]" },
        { title: "Security Log Audit", desc: "Sistem pengawasan celah keamanan backend server", gradient: "from-[#845EC2] to-[#0081CF]" }
      ]
    },
    {
      id: 3,
      title: "Ultra-Refractive Glass Portfolio",
      category: lang === "id" ? "Creative Web Engineering" : "Creative Web Engineering",
      shortDesc: lang === "id"
        ? "Website portofolio interaktif dengan efek Ultra-Refractive Glassmorphism, 3D WebGL, dan animasi GSAP."
        : "Award-caliber interactive portfolio with Ultra-Refractive Glassmorphism, 3D WebGL shaders, and GSAP animations.",
      fullDesc: lang === "id"
        ? "Pengembangan website portofolio modern menggunakan Next.js 14 App Router, TypeScript, TailwindCSS, komponen MagicBento interaktif, Three.js 3D Canvas, dan sistem Ultra-Refractive Glassmorphism ganda (Light & Dark theme)."
        : "State-of-the-art developer portfolio built with Next.js 14 App Router, TypeScript, TailwindCSS, MagicBento interactive grid, Three.js WebGL shaders, and a dual Light/Dark Ultra-Refractive Glass design system.",
      tools: ["Next.js 14", "TypeScript", "Three.js", "GSAP", "TailwindCSS"],
      gradient: "from-[#0089BA] to-[#008F7A]",
      icon: Layers,
      year: "2026",
      githubUrl: "https://github.com/hillmydyan/ultra-glass-portfolio",
      liveUrl: "https://hillmydyan.vercel.app",
      features: lang === "id" ? [
        "Sistem Ultra-Refractive Glassmorphism ganda (Light Pearl & Dark Obsidian)",
        "Komponen MagicBento interaktif dengan Spotlight & Particle Stars",
        "Integrasi animasi 3D WebGL & physics Lanyard",
        "Dukungan penuh bilingual i18n (Indonesia & English)"
      ] : [
        "Dual Ultra-Refractive Glass design system (Light Pearl & Dark Obsidian)",
        "MagicBento interactive grid with Spotlight & Particle Stars",
        "3D WebGL shader integration & physics-based 3D Lanyard",
        "Full bilingual i18n support (Indonesian & English)"
      ],
      screenshots: [
        { title: "Hero & 3D Interactive Scene", desc: "Tampilan utama dengan shader 3D & Ultra Glass navbar", gradient: "from-[#0089BA] to-[#008F7A]" },
        { title: "MagicBento Skills Showcase", desc: "Grid bento interaktif dengan efek kursor spotlight & bintang", gradient: "from-[#845EC2] to-[#0081CF]" },
        { title: "Experience Timeline View", desc: "Timeline karir profesional dengan kartu frosted glass", gradient: "from-[#0081CF] to-[#0089BA]" }
      ]
    },
    {
      id: 4,
      title: "Smart Analytics & Commerce Engine",
      category: lang === "id" ? "Full-Stack Enterprise Web" : "Full-Stack Enterprise Web",
      shortDesc: lang === "id"
        ? "Dashboard analitik real-time dan platform e-commerce headless berkecepatan tinggi."
        : "Real-time analytics dashboard and high-speed headless e-commerce storefront.",
      fullDesc: lang === "id"
        ? "Platform e-commerce enterprise dengan arsitektur headless, visualisasi data real-time menggunakan WebSockets, dan integrasi payment gateway."
        : "Enterprise headless commerce platform with real-time WebSocket data visualization, inventory management, and automated payment gateway integration.",
      tools: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets"],
      gradient: "from-[#008F7A] to-[#845EC2]",
      icon: Smartphone,
      year: "2025",
      githubUrl: "https://github.com/hillmydyan/smart-analytics-commerce",
      liveUrl: "https://smart-commerce-demo.vercel.app",
      features: lang === "id" ? [
        "Visualisasi data penjualan real-time via WebSockets",
        "Storefront headless cepat dengan optimasi SSR",
        "Manajemen inventaris stok otomatis",
        "Integrasi payment gateway terenkripsi"
      ] : [
        "Real-time sales data visualization via WebSockets",
        "High-speed headless storefront with SSR optimization",
        "Automated stock inventory management system",
        "Encrypted payment gateway integration"
      ],
      screenshots: [
        { title: "Real-Time Sales Dashboard", desc: "Grafik analitik penjualan & transaksi pengguna", gradient: "from-[#008F7A] to-[#845EC2]" },
        { title: "Storefront Product Catalog", desc: "Tampilan katalog produk e-commerce headless", gradient: "from-[#845EC2] to-[#0081CF]" },
        { title: "Checkout & Payment Flow", desc: "Alur pembayaran cepat dengan integrasi payment gateway", gradient: "from-[#0081CF] to-[#0089BA]" }
      ]
    }
  ];

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveImageIdx(0);
  };

  return (
    <div className="py-24 px-6 bg-[#F3EFFB] dark:bg-[#0B0F1A] transition-colors duration-300 relative overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background Ambient Glowing Blobs */}
      <div className="pointer-events-none absolute top-20 right-10 w-[600px] h-[600px] rounded-full bg-[#845EC2]/12 dark:bg-[#845EC2]/18 blur-[140px] z-0 animate-pulse" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-[#0081CF]/12 dark:bg-[#0081CF]/18 blur-[120px] z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#845EC2] dark:text-[#A78BFA] mb-5 px-4 py-2 rounded-full glass-ultra-pill">
                <span className="w-2 h-2 rounded-full bg-[#845EC2] dark:bg-[#A78BFA] animate-pulse" />
                {t("projects.title")}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {t("projects.heading")}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 font-normal max-w-md text-base md:text-right leading-relaxed">
              {t("projects.desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <ScrollReveal key={project.id} delay={0.15 + index * 0.08} yOffset={50}>
                <ElectricBorder borderRadius={24} chaos={0.12} color="#845EC2" className="group h-full">
                  <div className="relative rounded-3xl overflow-hidden glass-ultra-card h-full flex flex-col hover:-translate-y-1.5 transition-all duration-300">
                    {/* CARD COVER HEADER */}
                    <div className={`h-52 w-full bg-gradient-to-br ${project.gradient} relative flex flex-col justify-between p-6 overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="relative z-10 flex items-center justify-between w-full">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-white/80 text-xs font-extrabold tracking-widest">{project.year}</span>
                      </div>

                      <div className="relative z-10 flex items-end justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                          <Icon className="w-6 h-6" />
                        </div>

                        {/* QUICK ACTION BUTTONS */}
                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110"
                            title="GitHub Repository"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all hover:scale-110"
                            title="Live Domain Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#845EC2] dark:group-hover:text-[#A78BFA] transition-colors leading-tight mb-3">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                          {project.shortDesc}
                        </p>
                      </div>

                      <div>
                        <div className="flex gap-2 flex-wrap mb-6">
                          {project.tools.map((tool) => (
                            <span key={tool} className="text-xs px-3 py-1 rounded-lg glass-ultra-pill text-slate-700 dark:text-slate-300 font-semibold">
                              {tool}
                            </span>
                          ))}
                        </div>

                        {/* TRIGGER DETAIL MODAL */}
                        <button
                          onClick={() => handleOpenModal(project)}
                          className="w-full py-3 px-4 rounded-xl glass-ultra-pill font-bold text-xs text-[#845EC2] dark:text-[#A78BFA] hover:bg-[#845EC2] hover:text-white dark:hover:bg-[#845EC2] dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <span>{lang === "id" ? "Lihat Detail & Tangkapan Halaman" : "View Details & Screenshots"}</span>
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </ElectricBorder>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-ultra-card rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass-ultra-pill text-slate-600 dark:text-slate-300 hover:bg-rose-500 hover:text-white transition-all z-10"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* MODAL HEADER */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#845EC2]/15 text-[#845EC2] dark:text-[#A78BFA] border border-[#845EC2]/30 mb-3 inline-block">
                {selectedProject.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                {selectedProject.fullDesc}
              </p>
            </div>

            {/* SCREENSHOTS / IMAGE GALLERY CAROUSEL */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon className="w-4 h-4 text-[#845EC2] dark:text-[#A78BFA]" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {lang === "id" ? "Tangkapan Halaman Proyek" : "Project Screenshots"}
                </h4>
              </div>

              {/* SCREENSHOT MAIN VIEW */}
              <div className={`w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br ${selectedProject.screenshots[activeImageIdx].gradient} p-6 flex flex-col justify-end relative overflow-hidden shadow-inner border border-white/20 mb-4 transition-all duration-300`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 bg-slate-950/75 backdrop-blur-md p-4 rounded-xl border border-white/20 max-w-md">
                  <h5 className="font-bold text-white text-base mb-1">
                    {selectedProject.screenshots[activeImageIdx].title}
                  </h5>
                  <p className="text-slate-300 text-xs">
                    {selectedProject.screenshots[activeImageIdx].desc}
                  </p>
                </div>
              </div>

              {/* SCREENSHOT TABS */}
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.screenshots.map((screen, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`p-3 rounded-xl border transition-all text-left ${
                      activeImageIdx === idx
                        ? "bg-[#845EC2]/20 border-[#845EC2] text-slate-900 dark:text-white font-bold"
                        : "glass-ultra-pill text-slate-600 dark:text-slate-400 border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span className="text-xs font-semibold block truncate">{screen.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* KEY FEATURES LIST */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                {lang === "id" ? "Fitur Utama System" : "Key System Features"}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl glass-ultra-pill">
                    <CheckCircle2 className="w-4 h-4 text-[#845EC2] dark:text-[#A78BFA] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 text-xs md:text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TECH STACK & ACTION LINKS */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200/80 dark:border-white/10">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <span key={tool} className="text-xs px-3 py-1.5 rounded-lg bg-[#845EC2]/10 text-[#845EC2] dark:text-[#A78BFA] font-bold border border-[#845EC2]/20">
                    {tool}
                  </span>
                ))}
              </div>

              {/* ACTION LINKS BUTTONS */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-[#845EC2] dark:hover:bg-[#845EC2] dark:hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#845EC2] to-[#0081CF] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Domain Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
