"use client";
import { useState } from "react";
import { ExternalLink, Layers, Cpu, Globe, Smartphone, X, CheckCircle2, ChevronRight, Image as ImageIcon, Maximize2, ChevronLeft, Shield } from "lucide-react";
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
  screenshots: { title: string; desc: string; gradient: string; image?: string }[];
}

export default function Projects() {
  const { t, lang } = useLang();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isFullscreenPreview, setIsFullscreenPreview] = useState(false);

  const handlePrevImage = () => {
    if (!selectedProject) return;
    setActiveImageIdx((prev) => (prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    if (!selectedProject) return;
    setActiveImageIdx((prev) => (prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1));
  };

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
      githubUrl: "https://github.com/hillmydyan/wesite-sijuko-kopma-unila",
      liveUrl: "https://sijuko.kopmaunilaofficial.com",
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
        {
          title: lang === "id" ? "Dashboard Utama SIJUKO" : "Main Dashboard View",
          desc: lang === "id" ? "Tampilan saldo simpanan, poin anggota, berita KOPMA & jadwal" : "Member savings balance, points, news & schedules",
          gradient: "from-[#845EC2] to-[#2C73D2]",
          image: "/assets/sijuko/dashboard.png"
        },
        {
          title: lang === "id" ? "Halaman Autentikasi Login" : "Login Portal View",
          desc: lang === "id" ? "Halaman login anggota dengan proteksi keamanan terenkripsi" : "Member login page with encrypted security authentication",
          gradient: "from-[#0081CF] to-[#0089BA]",
          image: "/assets/sijuko/login.png"
        },
        {
          title: lang === "id" ? "Modul Kegiatan & Presensi" : "Events & Attendance Scanner",
          desc: lang === "id" ? "Pemindai QR presensi kehadiran & daftar piket sekretariat" : "Attendance QR code scanner & secretariat duty schedules",
          gradient: "from-[#0089BA] to-[#008F7A]",
          image: "/assets/sijuko/kegiatan.png"
        }
      ]
    },
    {
      id: 2,
      title: "Kominfo Captive Portal & Hotspot Security",
      category: lang === "id" ? "Network Infrastructure & Captive Portal" : "Network Infrastructure & Captive Portal",
      shortDesc: lang === "id"
        ? "Sistem Captive Portal Hotspot Kominfo Lampung Selatan dengan halaman autentikasi user dan monitoring kuota real-time."
        : "Kominfo Lampung Selatan Hotspot Captive Portal system with custom user authentication and real-time bandwidth monitoring.",
      fullDesc: lang === "id"
        ? "Sistem Captive Portal dan Manajemen Hotspot Jaringan Dinas Kominfo Lampung Selatan. Dirancang untuk mengamankan akses jaringan publik & internal, mengintegrasikan halaman autentikasi responsif, serta menampilkan dashboard status koneksi, IP, MAC address, dan pemakaian kuota internet secara real-time."
        : "Hotspot Captive Portal and Network Access Control system for Diskominfo Lampung Selatan. Engineered for secure public & internal network authentication, featuring a responsive login interface and real-time user bandwidth/session monitoring.",
      tools: ["HTML5/CSS3", "JavaScript", "MikroTik RouterOS", "Network Security", "TailwindCSS"],
      gradient: "from-[#0081CF] to-[#0089BA]",
      icon: Cpu,
      year: "2024",
      githubUrl: "https://github.com/hillmydyan/KP-KOMINFO-LOGIN-PAGE",
      liveUrl: "https://csirt.lampungselatankab.go.id",
      features: lang === "id" ? [
        "Sistem Autentikasi Portal Login Hotspot Kominfo Lampung Selatan",
        "Monitoring real-time status sesi, durasi terhubung & sisa kuota",
        "Integrasi halaman status jaringan captive portal MikroTik",
        "Keamanan akses jaringan lokal & proteksi autentikasi user"
      ] : [
        "Authentication system for Kominfo Lampung Selatan Hotspot Login Portal",
        "Real-time monitoring for user session status, uptime & quota left",
        "MikroTik captive portal status page integration",
        "Local network access control & secure user authentication"
      ],
      screenshots: [
        {
          title: lang === "id" ? "Portal Login Hotspot Kominfo" : "Kominfo Hotspot Login Portal",
          desc: lang === "id" ? "Halaman masuk portal wifi & jaringan Kominfo Lampung Selatan" : "Wifi hotspot login portal for Kominfo Lampung Selatan",
          gradient: "from-[#0081CF] to-[#0089BA]",
          image: "/assets/kominfo/login_landing.png"
        },
        {
          title: lang === "id" ? "Tabel Status Kuota & Sesi" : "Session & Bandwidth Status Table",
          desc: lang === "id" ? "Monitoring IP address, MAC, sisa kuota, dan durasi terhubung" : "Monitoring IP, MAC address, remaining bytes, and session uptime",
          gradient: "from-[#0089BA] to-[#008F7A]",
          image: "/assets/kominfo/status_table.png"
        }
      ]
    },
    {
      id: 3,
      title: "Web-Based Penetration Testing Lab (Tugas Akhir)",
      category: lang === "id" ? "Cyber Security & Cloud Infrastructure" : "Cyber Security & Cloud Infrastructure",
      shortDesc: lang === "id"
        ? "Platform laboratorium penetrasi testing berbasis website interaktif untuk simulasi dan edukasi keamanan jaringan."
        : "Interactive web-based penetration testing laboratory platform for network security simulations and cybersecurity education.",
      fullDesc: lang === "id"
        ? "Platform Laboratorium Penetrasi Testing Berbasis Web (Tugas Akhir). Dirancang untuk simulasi dan edukasi keamanan jaringan interaktif menggunakan arsitektur container Docker, backend Python Flask, manajemen VirtualBox VM, integrasi remote desktop Apache Guacamole, dan web server Apache."
        : "Web-Based Penetration Testing Laboratory Platform (Final Project). Engineered for interactive network security training using Docker container architecture, Python Flask backend, VirtualBox VM orchestration, Apache Guacamole remote access gateway, and Apache web server.",
      tools: ["Python", "Flask", "Docker", "Apache Guacamole", "VirtualBox", "Apache", "Cyber Security"],
      gradient: "from-[#845EC2] to-[#0089BA]",
      icon: Shield,
      year: "2026",
      githubUrl: "https://github.com/hillmydyan/TA-Peneterasi-Lab",
      liveUrl: "https://github.com/hillmydyan/TA-Peneterasi-Lab",
      features: lang === "id" ? [
        "Akses remote lab penetrasi testing langsung via browser dengan Apache Guacamole",
        "Orkestrasi lingkungan virtual & container otomatis dengan Docker & VirtualBox",
        "Backend manajemen sesi lab interaktif berbasis Python Flask",
        "Modul simulasi pengujian celah keamanan jaringan (DDoS, Sniffing, DNS Spoofing)"
      ] : [
        "Direct browser-based remote penetration lab access via Apache Guacamole gateway",
        "Automated virtual environment orchestration powered by Docker & VirtualBox",
        "Python Flask backend for interactive lab session management",
        "Isolated network vulnerability testing & attack simulation modules (DDoS, Sniffing, DNS Spoofing)"
      ],
      screenshots: [
        {
          title: lang === "id" ? "Menu Skenario Penetrasi Network" : "Network Pentest Scenario Menu",
          desc: lang === "id" ? "Pilihan skenario simulasi serangan (DDoS Attack, Sniffing, DNS Spoofing)" : "Interactive attack scenario selection (DDoS, Sniffing, DNS Spoofing)",
          gradient: "from-[#845EC2] to-[#0081CF]",
          image: "/assets/TA/scenarios.png"
        },
        {
          title: lang === "id" ? "Sesi Remote Desktop Apache Guacamole" : "Apache Guacamole Remote VM Session",
          desc: lang === "id" ? "Tampilan sesi remote Attacker Kali Linux & Target Victim VM via browser" : "Live browser-based desktop view for Attacker Kali Linux & Target Victim VM",
          gradient: "from-[#0081CF] to-[#0089BA]",
          image: "/assets/TA/practice_vm.png"
        },
        {
          title: lang === "id" ? "Modul Instruksi & Panduan Serangan" : "Pentest Attack Simulation Guide",
          desc: lang === "id" ? "Langkah-langkah eksekusi tools (slowhttptest), identifikasi target & analisa" : "Step-by-step execution instructions (slowhttptest), target ID & attack analysis",
          gradient: "from-[#0089BA] to-[#008F7A]",
          image: "/assets/TA/guide.png"
        },
        {
          title: lang === "id" ? "Portal Sign In Akses Lab Virtual" : "CyberLab Virtual Access Portal",
          desc: lang === "id" ? "Halaman autentikasi login pengguna untuk mengakses platform lab virtual" : "User authentication sign-in portal for accessing the virtual lab",
          gradient: "from-[#845EC2] to-[#2C73D2]",
          image: "/assets/TA/login.png"
        }
      ]
    },
    {
      id: 4,
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
      id: 5,
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
              <div
                onClick={() => {
                  if (selectedProject.screenshots[activeImageIdx].image) {
                    setIsFullscreenPreview(true);
                  }
                }}
                className={`w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br ${selectedProject.screenshots[activeImageIdx].gradient} p-6 flex flex-col justify-end relative overflow-hidden shadow-inner border border-white/20 mb-4 transition-all duration-300 ${
                  selectedProject.screenshots[activeImageIdx].image ? "cursor-pointer group/img" : ""
                }`}
              >
                {selectedProject.screenshots[activeImageIdx].image && (
                  <>
                    <img
                      src={selectedProject.screenshots[activeImageIdx].image}
                      alt={selectedProject.screenshots[activeImageIdx].title}
                      className="absolute inset-0 w-full h-full object-cover object-top z-0 transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-10 opacity-90 group-hover/img:opacity-100 transition-opacity">
                      <span className="px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 border border-white/20 shadow-lg group-hover/img:bg-[#845EC2] transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{lang === "id" ? "Klik untuk Pratinjau" : "Click to Preview"}</span>
                      </span>
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent z-[1]" />
                <div className="relative z-10 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/20 max-w-md shadow-lg">
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

      {/* FULLSCREEN IMAGE LIGHTBOX MODAL */}
      {isFullscreenPreview && selectedProject && selectedProject.screenshots[activeImageIdx].image && (
        <div 
          className="fixed inset-0 z-[300] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn select-none"
          onClick={() => setIsFullscreenPreview(false)}
        >
          {/* TOP CONTROLS BAR */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                {activeImageIdx + 1} / {selectedProject.screenshots.length}
              </span>
              <h4 className="text-white font-bold text-sm md:text-base hidden sm:block truncate max-w-md">
                {selectedProject.screenshots[activeImageIdx].title}
              </h4>
            </div>

            <button
              onClick={() => setIsFullscreenPreview(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-rose-500 text-white transition-all backdrop-blur-md border border-white/20 shadow-xl hover:scale-110"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* NAVIGATION BUTTON LEFT */}
          {selectedProject.screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#845EC2] text-white transition-all backdrop-blur-md border border-white/20 shadow-xl z-20 hover:scale-110"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* MAIN ENLARGED IMAGE */}
          <div 
            className="relative max-w-6xl max-h-[80vh] w-full flex items-center justify-center p-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.screenshots[activeImageIdx].image}
              alt={selectedProject.screenshots[activeImageIdx].title}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/20 shadow-2xl animate-scaleUp"
            />
          </div>

          {/* NAVIGATION BUTTON RIGHT */}
          {selectedProject.screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#845EC2] text-white transition-all backdrop-blur-md border border-white/20 shadow-xl z-20 hover:scale-110"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* BOTTOM CAPTION BAR */}
          <div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-lg w-[90%] bg-slate-900/85 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center z-20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="font-bold text-white text-sm md:text-base mb-1">
              {selectedProject.screenshots[activeImageIdx].title}
            </h5>
            <p className="text-slate-300 text-xs leading-relaxed">
              {selectedProject.screenshots[activeImageIdx].desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
