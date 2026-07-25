"use client";
import { ArrowUpRight, Download } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import SplitText from "@/components/SplitText";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";

const Lightfall = dynamic(() => import("@/components/Lightfall"), { ssr: false });

export default function Home() {
  const { t } = useLang();
  const { theme } = useTheme();

  const stats = [
    { value: "1+", label: t("stats.exp") },
    { value: "5+", label: t("stats.proj") },
    { value: "10+", label: t("stats.tech") },
    { value: "100%", label: t("stats.passion") },
  ];

  return (
    <main className="relative selection:bg-[#845EC2]/20 selection:text-[#845EC2]">
      {/* HERO */}
      <section className="w-full min-h-[calc(100vh-80px)] relative overflow-hidden bg-[#F3EFFB] dark:bg-[#0B0F1A] transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-70 dark:opacity-60 pointer-events-auto">
          <Lightfall
            colors={theme === "dark" ? ['#845EC2', '#0081CF', '#008F7A'] : ['#845EC2', '#0081CF', '#FF7085']}
            backgroundColor={theme === "dark" ? "#0B0F1A" : "#F3EFFB"}
            speed={1}
            streakCount={4}
            streakWidth={1.2}
            streakLength={1.5}
            glow={1}
            density={0.8}
            twinkle={1}
            zoom={2.5}
            backgroundGlow={theme === "dark" ? 0.25 : 0}
            opacity={1}
            mouseInteraction={true}
            mouseStrength={1.5}
            mouseRadius={1}
          />
        </div>
        <div className="pointer-events-none absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-[#845EC2]/15 dark:bg-[#845EC2]/20 blur-[140px] z-0 animate-pulse" />
        <div className="pointer-events-none absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#0081CF]/15 dark:bg-[#0081CF]/20 blur-[120px] z-0" />

        <div className="relative z-10 w-full h-full flex flex-col pointer-events-none pt-12 md:pt-24 pb-20">
          <div className="flex-1 flex flex-col justify-center items-center px-6">
            <div className="pointer-events-auto mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-ultra-pill text-[#845EC2] dark:text-[#A78BFA] text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#845EC2] animate-pulse" />
              {t("hero.badge")}
            </div>

            <SplitText
              text="Hillmy Dyan"
              className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-extrabold text-center tracking-[-0.04em] text-slate-900 dark:text-white m-0 leading-none"
              delay={40}
              animationFrom={{ opacity: 0, transform: "translate3d(0,60px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              splitType="chars"
            />
            <div className="mt-4 mb-6 h-1.5 w-36 rounded-full bg-gradient-to-r from-[#845EC2] via-[#0081CF] to-[#008F7A] shadow-[0_0_15px_rgba(132,94,194,0.4)]" />
            <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-xl text-center pointer-events-auto font-normal leading-relaxed">
              {t("hero.desc")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center pointer-events-auto">
              <Link href="/projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#845EC2] text-white font-semibold text-sm hover:bg-[#6c43a7] transition-all duration-300 shadow-[0_8px_25px_rgba(132,94,194,0.35)] hover:scale-[1.03]">
                {t("hero.btn.projects")} <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="/cv.pdf"
                download="CV_Hillmy_Dyan.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0081CF] text-white font-semibold text-sm hover:bg-[#006bb3] transition-all duration-300 shadow-[0_8px_25px_rgba(0,129,207,0.35)] hover:scale-[1.03]"
              >
                <Download className="w-4 h-4" />
                {t("hero.btn.cv")}
              </a>
              <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-ultra-pill text-slate-800 dark:text-white font-semibold text-sm hover:border-slate-300 dark:hover:border-white/40 transition-all duration-300 shadow-sm hover:scale-[1.02]">
                {t("hero.btn.about")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="glass-ultra border-y-0 my-4 max-w-5xl mx-auto rounded-2xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0">
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col items-center gap-1 text-center ${i % 2 !== 0 ? "border-l border-slate-200/60 dark:border-white/10" : ""} md:border-l md:border-slate-200/60 md:dark:border-white/10 md:first:border-l-0`}>
              <span className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#845EC2] dark:from-[#A78BFA] to-[#0081CF] dark:to-[#38BDF8]">{s.value}</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
