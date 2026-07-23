"use client";
import { Layout, Server, Cpu, Terminal, Shield, GitBranch, Database, Code, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLang } from "@/contexts/LangContext";
import MagicBento, { BentoCardData } from "@/components/MagicBento";

export default function SkillsPage() {
  const { t, lang } = useLang();

  const frontendCards: BentoCardData[] = [
    {
      title: "React.js & Next.js 14/15",
      label: "Frontend Core",
      level: "Advanced",
      description: lang === "id" ? "Pengembangan SSR, SSG, App Router modern, dan SPA performa tinggi." : "Modern SSR, SSG, App Router architecture, and high-performance SPAs.",
      icon: Layout,
      featured: true
    },
    {
      title: "TypeScript",
      label: "Type Safety",
      level: "Advanced",
      description: lang === "id" ? "Pengembangan type-safe, arsitektur modular, dan maintenance tinggi." : "Type-safe codebases, modular architecture, and high maintainability.",
      icon: Code
    },
    {
      title: "TailwindCSS & Ultra Glass",
      label: "Styling",
      level: "Expert",
      description: lang === "id" ? "Desain responsif, Ultra-Refractive Glassmorphism, dan custom CSS system." : "Responsive layouts, Ultra-Refractive Glassmorphism, and custom CSS design systems.",
      icon: Globe
    },
    {
      title: "Three.js & WebGL",
      label: "3D Graphics",
      level: "Intermediate",
      description: lang === "id" ? "Animasi 3D interaktif, shader OGL, dan rendering Canvas 60fps." : "Interactive 3D animations, OGL shaders, and 60fps Canvas rendering.",
      icon: Cpu
    },
    {
      title: "Zustand & State Management",
      label: "State Logic",
      level: "Advanced",
      description: lang === "id" ? "Pengelolaan state global dengan Zustand, Redux Toolkit, dan React Context." : "Global state management with Zustand, Redux Toolkit, and React Context.",
      icon: Database
    }
  ];

  const backendCards: BentoCardData[] = [
    {
      title: "Node.js & Express",
      label: "Backend Core",
      level: "Advanced",
      description: lang === "id" ? "RESTful API cepat, middleware kustom, dan microservices." : "High-speed RESTful APIs, custom middleware, and microservices.",
      icon: Server,
      featured: true
    },
    {
      title: "Laravel & PHP",
      label: "MVC Framework",
      level: "Advanced",
      description: lang === "id" ? "Aplikasi web MVC full-stack, ORM Eloquent, dan autentikasi." : "Full-stack MVC web apps, Eloquent ORM, and secure authentication.",
      icon: Code
    },
    {
      title: "MySQL & PostgreSQL",
      label: "Database",
      level: "Advanced",
      description: lang === "id" ? "Perancangan skema relasional, indexing, dan optimasi query." : "Relational schema design, indexing, and query optimization.",
      icon: Database
    },
    {
      title: "Python Scripting",
      label: "Automation",
      level: "Intermediate",
      description: lang === "id" ? "Scripting otomatisasi data, backend AI integration, dan scraping." : "Data automation scripting, AI backend integrations, and scraping.",
      icon: Terminal
    },
    {
      title: "REST API & GraphQL",
      label: "Architecture",
      level: "Advanced",
      description: lang === "id" ? "Desain endpoint aman, autentikasi JWT, dan dokumentasi Swagger." : "Secure endpoint design, JWT auth, and Swagger API docs.",
      icon: Globe
    }
  ];

  const devopsCards: BentoCardData[] = [
    {
      title: "Docker & Containerization",
      label: "Infrastructure",
      level: "Intermediate",
      description: lang === "id" ? "Isolasi container, Docker Compose, dan deployment terstandar." : "Container isolation, Docker Compose, and standardized deployments.",
      icon: Server,
      featured: true
    },
    {
      title: "Git & GitHub Actions",
      label: "CI / CD",
      level: "Advanced",
      description: lang === "id" ? "Version control workflow, CI/CD pipeline, dan kolaborasi repositori." : "Version control workflow, CI/CD pipelines, and repository collaboration.",
      icon: GitBranch
    },
    {
      title: "MikroTik & Networking",
      label: "Network Admin",
      level: "Intermediate",
      description: lang === "id" ? "Routing, VLAN, firewall rules, dan manajemen bandwidth jaringan." : "Routing, VLANs, firewall rules, and network bandwidth control.",
      icon: Shield
    },
    {
      title: "Cyber Security & Server Labs",
      label: "Security",
      level: "Intermediate",
      description: lang === "id" ? "Analisis vulnerability, web defacement investigation, dan VirtualBox." : "Vulnerability analysis, web defacement investigation, and VirtualBox labs.",
      icon: Shield
    },
    {
      title: "Linux & Cloud Deployment",
      label: "Cloud Ops",
      level: "Intermediate",
      description: lang === "id" ? "Ubuntu server, Nginx reverse proxy, dan deployment Vercel/VPS." : "Ubuntu server admin, Nginx reverse proxy, and Vercel/VPS deployments.",
      icon: Terminal
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
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Responsive & high-performance UI engineering</p>
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
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Scalable APIs, database schemas & server architecture</p>
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
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Docker, CI/CD, networking & security analysis</p>
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
