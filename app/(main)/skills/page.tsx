"use client";
import { Layout, Server, Cpu, Terminal, Shield, GitBranch, Database, Code, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLang } from "@/contexts/LangContext";
import MagicBento, { BentoCardData } from "@/components/MagicBento";

export default function SkillsPage() {
  const { t, lang } = useLang();

  const frontendCards: BentoCardData[] = [
    {
      title: "React.js & Next.js",
      label: "Frontend Core",
      level: lang === "id" ? "Menengah" : "Intermediate",
      description: lang === "id" ? "Pengembangan komponen UI interaktif, App Router, dan SSR/SPA." : "Building interactive UI components, App Router, and SSR/SPA web apps.",
      icon: Layout,
      featured: true
    },
    {
      title: "TypeScript",
      label: "Type Safety",
      level: lang === "id" ? "Menengah" : "Intermediate",
      description: lang === "id" ? "Penulisan kode type-safe untuk struktur aplikasi yang lebih rapi." : "Type-safe codebases for structured and maintainable applications.",
      icon: Code
    },
    {
      title: "TailwindCSS & Glassmorphism",
      label: "Styling",
      level: lang === "id" ? "Profisien" : "Proficient",
      description: lang === "id" ? "Penerapan tata letak responsif, UI modern, dan custom CSS utility." : "Responsive layouts, modern glass UI, and clean CSS styling.",
      icon: Globe
    },
    {
      title: "Three.js & Canvas FX",
      label: "Web Animation",
      level: lang === "id" ? "Eksploratif" : "Exploratory",
      description: lang === "id" ? "Eksperimen animasi 3D web interaktif dan rendering visual." : "Interactive 3D visual experiments and web canvas rendering.",
      icon: Cpu
    },
    {
      title: "State Management (Zustand)",
      label: "State Logic",
      level: lang === "id" ? "Menengah" : "Intermediate",
      description: lang === "id" ? "Pengelolaan state aplikasi dengan Zustand dan React Context." : "Managing application state using Zustand and React Context.",
      icon: Database
    }
  ];

  const backendCards: BentoCardData[] = [
    {
      title: "Node.js & Express",
      label: "Backend Core",
      level: lang === "id" ? "Menengah" : "Intermediate",
      description: lang === "id" ? "Pembuatan RESTful API sederhana, routing, dan middleware." : "Building clean RESTful APIs, routing, and custom middleware.",
      icon: Server,
      featured: true
    },
    {
      title: "Laravel & PHP",
      label: "MVC Framework",
      level: lang === "id" ? "Menengah" : "Intermediate",
      description: lang === "id" ? "Pengembangan aplikasi web MVC dan integrasi ORM Eloquent." : "Developing web apps with MVC structure and Eloquent ORM.",
      icon: Code
    },
    {
      title: "MySQL & PostgreSQL",
      label: "Database",
      level: lang === "id" ? "Menengah" : "Intermediate",
      description: lang === "id" ? "Perancangan skema relasional dan penulisan query dasar." : "Relational schema design and writing clean database queries.",
      icon: Database
    },
    {
      title: "RESTful API Integration",
      label: "Architecture",
      level: lang === "id" ? "Profisien" : "Proficient",
      description: lang === "id" ? "Desain endpoint terstruktur, JSON response, dan autentikasi JWT." : "Structured endpoint design, JSON responses, and JWT auth.",
      icon: Globe
    },
    {
      title: "Python Scripting",
      label: "Automation",
      level: lang === "id" ? "Dasar" : "Basic",
      description: lang === "id" ? "Scripting otomatisasi data sederhana dan integrasi script dasar." : "Basic task automation scripting and data processing.",
      icon: Terminal
    }
  ];

  const devopsCards: BentoCardData[] = [
    {
      title: "Git & GitHub Workflow",
      label: "Version Control",
      level: lang === "id" ? "Profisien" : "Proficient",
      description: lang === "id" ? "Manajemen repositori kode dan alur kerja kolaborasi tim." : "Code repository management and collaborative Git workflows.",
      icon: GitBranch,
      featured: true
    },
    {
      title: "Docker Basics",
      label: "Infrastructure",
      level: lang === "id" ? "Menengah" : "Intermediate",
      description: lang === "id" ? "Penggunaan container Docker dasar untuk lingkungan pengembangan." : "Basic Docker containerization for development environment setup.",
      icon: Server
    },
    {
      title: "Linux & Web Hosting",
      label: "Cloud Ops",
      level: lang === "id" ? "Menengah" : "Intermediate",
      description: lang === "id" ? "Perintah dasar Linux Ubuntu, Nginx reverse proxy, dan VPS/Vercel." : "Ubuntu CLI basics, Nginx reverse proxy, and VPS/Vercel deployments.",
      icon: Terminal
    },
    {
      title: "MikroTik & Networking",
      label: "Network Admin",
      level: lang === "id" ? "Dasar - Menengah" : "Basic - Intermediate",
      description: lang === "id" ? "Konfigurasi dasar routing jaringan, VLAN, dan pengaturan firewall." : "Basic network routing configuration, VLANs, and firewall rules.",
      icon: Shield
    },
    {
      title: "Cyber Security Fundamentals",
      label: "Security",
      level: lang === "id" ? "Dasar" : "Basic",
      description: lang === "id" ? "Pemahaman dasar keamanan web dan analisis kerentanan sistem." : "Understanding web security principles and vulnerability awareness.",
      icon: Shield
    }
  ];

  return (
    <div className="py-24 px-6 bg-[#F3EFFB] dark:bg-[#0B0F1A] transition-colors duration-300 relative overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background Ambient Glowing Blobs */}
      <div className="pointer-events-none absolute top-20 -left-20 w-[650px] h-[650px] rounded-full bg-[#845EC2]/12 dark:bg-[#845EC2]/18 blur-[150px] z-0 animate-pulse" />
      <div className="pointer-events-none absolute top-1/2 right-0 w-[550px] h-[550px] rounded-full bg-[#0081CF]/12 dark:bg-[#0081CF]/18 blur-[130px] z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#845EC2] dark:text-[#A78BFA] mb-5 px-4 py-2 rounded-full glass-ultra-pill">
              <span className="w-2 h-2 rounded-full bg-[#845EC2] dark:bg-[#A78BFA] animate-pulse" />
              {t("skills.title")}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              {t("skills.heading")}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-normal text-base md:text-lg leading-relaxed">
              {t("skills.subheading")}
            </p>
          </div>
        </ScrollReveal>

        {/* SKILLS MAGIC BENTO SECTIONS */}
        <div className="space-y-16">
          {/* FRONTEND */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200/80 dark:border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#845EC2]/15 dark:bg-[#845EC2]/25 border border-[#845EC2]/30 flex items-center justify-center text-[#845EC2] dark:text-[#A78BFA]">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t("skills.frontend")}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {lang === "id" ? "Pengembangan tampilan web yang responsif & interaktif" : "Responsive & interactive web user interfaces"}
                  </p>
                </div>
              </div>

              <MagicBento 
                cards={frontendCards}
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 94, 194"
              />
            </div>
          </ScrollReveal>

          {/* BACKEND */}
          <ScrollReveal delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200/80 dark:border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0081CF]/15 dark:bg-[#0081CF]/25 border border-[#0081CF]/30 flex items-center justify-center text-[#0081CF] dark:text-[#38BDF8]">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t("skills.backend")}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {lang === "id" ? "Pengembangan API terstruktur & manajemen database" : "Structured API development & database management"}
                  </p>
                </div>
              </div>

              <MagicBento 
                cards={backendCards}
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="0, 129, 207"
              />
            </div>
          </ScrollReveal>

          {/* DEVOPS */}
          <ScrollReveal delay={0.25}>
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200/80 dark:border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#008F7A]/15 dark:bg-[#008F7A]/25 border border-[#008F7A]/30 flex items-center justify-center text-[#008F7A] dark:text-[#2DD4BF]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t("skills.devops")}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {lang === "id" ? "Pengelolaan repositori, container dasar & infrastruktur" : "Repository management, basic containers & infrastructure"}
                  </p>
                </div>
              </div>

              <MagicBento 
                cards={devopsCards}
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="0, 143, 122"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
