"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F1A] text-white min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="bg-slate-900/80 border border-white/20 p-8 rounded-3xl max-w-md text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl font-bold">Global System Error</h2>
          <p className="text-sm text-slate-300">
            Terjadi kesalahan sistem global pada aplikasi.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-[#845EC2] text-white text-sm font-semibold hover:bg-[#6c43a7] transition-all"
          >
            Refresh System
          </button>
        </div>
      </body>
    </html>
  );
}
