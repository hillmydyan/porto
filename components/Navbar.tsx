"use client";
import { Atom, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { ThemeToggle } from "./ThemeToggle";
import { LangSwitcher } from "./LangSwitcher";

export function Navbar() {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full pt-6 px-4 md:px-6 z-[100] flex justify-center transition-transform duration-300">
      <nav className="pointer-events-auto flex flex-col w-full max-w-5xl glass-ultra rounded-2xl p-3 md:px-5 transition-all">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#845EC2] to-[#0081CF] flex items-center justify-center shadow-md">
                <Atom className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-900 dark:text-white font-bold text-base tracking-tight group-hover:text-[#845EC2] dark:group-hover:text-[#845EC2] transition-colors">
                Hillmy Dyan
              </span>
            </Link>
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 font-semibold hidden md:inline-block">
              Available
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 mr-4">
              <Link href="/" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                {t("nav.home")}
              </Link>
              <Link href="/about" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                {t("nav.about")}
              </Link>
              <Link href="/skills" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                {t("nav.skills")}
              </Link>
              <Link href="/experience" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                {t("nav.experience")}
              </Link>
              <Link href="/projects" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                {t("nav.projects")}
              </Link>
              <a
                href="/cv.pdf"
                download="CV_Hillmy_Dyan.pdf"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#845EC2] dark:text-[#A78BFA] hover:text-white hover:bg-[#845EC2] dark:hover:bg-[#845EC2] dark:hover:text-white border border-[#845EC2]/40 px-3.5 py-1.5 rounded-lg transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                CV
              </a>
              <Link href="/contact" className="ml-1 text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-4 py-2 rounded-lg hover:bg-[#845EC2] dark:hover:bg-[#845EC2] dark:hover:text-white transition-all shadow-sm">
                {t("nav.contact")}
              </Link>
            </div>
            
            <div className="flex items-center gap-2 md:border-l border-slate-200 dark:border-slate-800 md:pl-4">
              <LangSwitcher />
              <ThemeToggle />
              <button 
                className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 pt-4 pb-2 px-2 border-t border-slate-100 dark:border-slate-800 mt-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              {t("nav.home")}
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              {t("nav.about")}
            </Link>
            <Link href="/skills" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              {t("nav.skills")}
            </Link>
            <Link href="/experience" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              {t("nav.experience")}
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              {t("nav.projects")}
            </Link>
            <a
              href="/cv.pdf"
              download="CV_Hillmy_Dyan.pdf"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#845EC2] dark:text-[#A78BFA] border border-[#845EC2]/40 px-3 py-2.5 rounded-lg hover:bg-[#845EC2] hover:text-white transition-all text-center mt-1"
            >
              <Download className="w-4 h-4" />
              {t("hero.btn.cv")}
            </a>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-3 py-2.5 rounded-lg hover:bg-[#845EC2] dark:hover:bg-[#845EC2] dark:hover:text-white transition-all shadow-sm text-center">
              {t("nav.contact")}
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
