"use client";
import { Mail, Code, Briefcase, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLang } from "@/contexts/LangContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <div className="py-24 px-6 bg-[#F3EFFB] dark:bg-[#0B0F1A] transition-colors duration-300 relative overflow-hidden min-h-[calc(100vh-80px)]">
      <div className="pointer-events-none absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-[#845EC2]/12 dark:bg-[#845EC2]/15 blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#0081CF]/12 dark:bg-[#0081CF]/15 blur-[120px] z-0" />
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal delay={0.1}>
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#845EC2] dark:text-[#A78BFA] mb-5">
              <span className="w-8 h-px bg-[#845EC2] dark:bg-[#A78BFA]" />
              {t("nav.contact")}
              <span className="w-8 h-px bg-[#845EC2] dark:bg-[#A78BFA]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">{t("contact.heading")}</h2>
            <p className="text-slate-600 dark:text-slate-300 font-normal max-w-lg mx-auto text-base leading-relaxed">
              {t("contact.subheading")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <ScrollReveal delay={0.2} yOffset={40}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t("contact.info")}</h3>
              <div className="space-y-6">
                <a href="mailto:hillmy03@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-[#845EC2] dark:hover:text-[#A78BFA] transition-colors group">
                  <div className="w-12 h-12 rounded-2xl glass-ultra-pill flex items-center justify-center group-hover:border-[#845EC2]/50 transition-all group-hover:scale-105">
                    <Mail className="w-5 h-5 text-[#845EC2] dark:text-[#A78BFA]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="font-medium">hillmy03@gmail.com</p>
                  </div>
                </a>
                <a href="https://github.com/hillmydyan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-[#845EC2] dark:hover:text-[#A78BFA] transition-colors group">
                  <div className="w-12 h-12 rounded-2xl glass-ultra-pill flex items-center justify-center group-hover:border-[#845EC2]/50 transition-all group-hover:scale-105">
                    <Code className="w-5 h-5 text-[#845EC2] dark:text-[#A78BFA]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Github</p>
                    <p className="font-medium">github.com/hillmydyan</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/hillmydyan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-[#845EC2] dark:hover:text-[#A78BFA] transition-colors group">
                  <div className="w-12 h-12 rounded-2xl glass-ultra-pill flex items-center justify-center group-hover:border-[#845EC2]/50 transition-all group-hover:scale-105">
                    <Briefcase className="w-5 h-5 text-[#845EC2] dark:text-[#A78BFA]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/hillmydyan</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} yOffset={40}>
            <form className="space-y-5 glass-ultra-card p-8 rounded-3xl">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.form.name")}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl glass-ultra-pill text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#845EC2]/50 transition-all" placeholder={t("contact.placeholder.name")} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.form.email")}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl glass-ultra-pill text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#845EC2]/50 transition-all" placeholder={t("contact.placeholder.email")} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.form.message")}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl glass-ultra-pill text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#845EC2]/50 transition-all resize-none" placeholder={t("contact.placeholder.message")}></textarea>
              </div>
              <button type="button" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-[#845EC2] dark:hover:bg-[#845EC2] dark:hover:text-white transition-all shadow-md">
                {t("contact.form.send")} <Send className="w-4 h-4" />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
