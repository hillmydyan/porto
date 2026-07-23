import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F3EFFB] dark:bg-[#0B0F1A] text-slate-900 dark:text-white">
      <div className="glass-ultra-card p-10 rounded-3xl max-w-md text-center space-y-5">
        <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#845EC2] to-[#0081CF]">404</span>
        <h2 className="text-2xl font-bold">Halaman Tidak Ditemukan</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-[#845EC2] text-white text-sm font-semibold hover:bg-[#6c43a7] transition-all shadow-md"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
