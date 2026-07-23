"use client";
import { Atom, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-8 border-t border-slate-200/80 dark:border-white/10 bg-[#EBE5F7] dark:bg-[#070A14] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#845EC2] to-[#0081CF] flex items-center justify-center shadow-md">
                <Atom className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight group-hover:text-[#845EC2] dark:group-hover:text-[#845EC2] transition-colors">
                Hillmy Dyan
              </span>
            </Link>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
              {t("footer.desc")}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="https://github.com/hillmydyan" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass-ultra-pill flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-[#845EC2] hover:border-[#845EC2] hover:text-white transition-all hover:-translate-y-0.5">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/hillmydyan" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass-ultra-pill flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-[#0081CF] hover:border-[#0081CF] hover:text-white transition-all hover:-translate-y-0.5">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a href="mailto:hillmydyan@gmail.com" className="w-9 h-9 rounded-full glass-ultra-pill flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:border-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all hover:-translate-y-0.5">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Quick Links (Horizontal Line) */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 py-4 border-t border-b border-slate-200/60 dark:border-slate-800/80 mb-6">
          <Link href="/" className="text-xs font-semibold text-slate-600 hover:text-[#845EC2] dark:text-slate-400 dark:hover:text-white transition-colors">{t("nav.home")}</Link>
          <Link href="/about" className="text-xs font-semibold text-slate-600 hover:text-[#845EC2] dark:text-slate-400 dark:hover:text-white transition-colors">{t("nav.about")}</Link>
          <Link href="/skills" className="text-xs font-semibold text-slate-600 hover:text-[#845EC2] dark:text-slate-400 dark:hover:text-white transition-colors">{t("nav.skills")}</Link>
          <Link href="/experience" className="text-xs font-semibold text-slate-600 hover:text-[#845EC2] dark:text-slate-400 dark:hover:text-white transition-colors">{t("nav.experience")}</Link>
          <Link href="/projects" className="text-xs font-semibold text-slate-600 hover:text-[#845EC2] dark:text-slate-400 dark:hover:text-white transition-colors">{t("nav.projects")}</Link>
          <Link href="/contact" className="text-xs font-semibold text-slate-600 hover:text-[#845EC2] dark:text-slate-400 dark:hover:text-white transition-colors">{t("nav.contact")}</Link>
        </div>

        {/* Bottom Rights */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-400 dark:text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Hillmy Dyan. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider">{t("footer.open")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
