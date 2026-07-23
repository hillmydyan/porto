"use client";
import dynamic from "next/dynamic";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLang } from "@/contexts/LangContext";

const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false });

export default function About() {
  const { t } = useLang();

  return (
    <div className="relative pt-32 pb-32 bg-[#F3EFFB] dark:bg-[#0B0F1A] transition-colors duration-300 overflow-hidden min-h-[calc(100vh-80px)]">
      <div className="pointer-events-none absolute top-10 -left-20 w-[550px] h-[550px] rounded-full bg-[#845EC2]/12 dark:bg-[#845EC2]/15 blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-[450px] h-[450px] rounded-full bg-[#0081CF]/12 dark:bg-[#0081CF]/15 blur-[120px] z-0" />
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[1000px] z-20 pointer-events-auto">
        <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
      </div>
      <div className="px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col gap-16">
            <div className="flex-1 md:max-w-[52%]">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#845EC2] dark:text-[#A78BFA] mb-6">
                <span className="w-8 h-px bg-[#845EC2] dark:bg-[#A78BFA]" />
                {t("nav.about")} Me
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.05]">
                {t("about.title")}<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#845EC2] dark:from-[#A78BFA] via-[#0081CF] dark:via-[#38BDF8] to-[#008F7A] dark:to-[#2DD4BF]">{t("about.title2")}</span>
              </h2>
              <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                <p className="text-slate-900 dark:text-white font-semibold text-lg md:text-xl">{t("about.p1")}</p>
                <p className="text-slate-600 dark:text-slate-300">{t("about.p2")}</p>
                <p className="text-slate-500 dark:text-slate-400">{t("about.p3")}</p>
              </div>
              <div className="mt-10 pt-10 border-t border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-500">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React","Next.js","TypeScript","TailwindCSS","Node.js","Laravel","MySQL","Python","Three.js","WebGL","UI/UX Design","MikroTik","Cyber Security","HTML","PHP","VirtualBox"].map(skill => (
                    <span key={skill} className="px-3.5 py-1.5 rounded-lg glass-ultra-pill text-slate-800 dark:text-slate-200 text-sm font-medium hover:border-[#845EC2]/60 dark:hover:border-[#845EC2]/60 hover:text-[#845EC2] dark:hover:text-[#A78BFA] transition-all cursor-default hover:scale-105">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="block md:hidden w-full h-[380px] mt-14 relative z-20 pointer-events-auto">
                <Lanyard position={[0, 0, 22]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
