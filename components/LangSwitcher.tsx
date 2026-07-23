"use client";
import { useLang } from "@/contexts/LangContext";

export function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
          lang === "en"
            ? "bg-white dark:bg-slate-900 text-[#845EC2] shadow-sm"
            : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("id")}
        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
          lang === "id"
            ? "bg-white dark:bg-slate-900 text-[#845EC2] shadow-sm"
            : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        ID
      </button>
    </div>
  );
}
