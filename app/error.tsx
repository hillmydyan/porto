"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F3EFFB] dark:bg-[#0B0F1A] text-slate-900 dark:text-white">
      <div className="glass-ultra-card p-8 rounded-3xl max-w-md text-center space-y-4">
        <h2 className="text-2xl font-bold">Terjadi Kesalahan / Something went wrong</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Aplikasi mengalami kendala teknis sementara.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-xl bg-[#845EC2] text-white text-sm font-semibold hover:bg-[#6c43a7] transition-all"
          >
            Coba Lagi / Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl glass-ultra-pill text-sm font-semibold hover:scale-105 transition-all"
          >
            Beranda / Home
          </Link>
        </div>
      </div>
    </div>
  );
}
