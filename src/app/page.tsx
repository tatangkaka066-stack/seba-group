const services = [
  {
    title: "Agentic AI",
    desc: "AI agent otonom yang bekerja untuk Anda 24/7 — riset, coding, analisis, dan eksekusi tugas.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Web Development",
    desc: "Website & aplikasi modern dengan Next.js, React, dan TypeScript — cepat, SEO-friendly, scalable.",
    icon: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  },
  {
    title: "Automation",
    desc: "Otomatisasi workflow bisnis: data entry, report generation, monitoring, dan integrasi sistem.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Digital Strategy",
    desc: "Strategi transformasi digital yang terukur — dari audit hingga implementasi dan optimasi.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { value: "24/7", label: "AI Agent Bekerja" },
  { value: "10x", label: "Lebih Cepat" },
  { value: "100%", label: "Terotomatisasi" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-sm">
              S
            </div>
            <span className="font-semibold text-lg tracking-tight">
              SEBA GROUP
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#layanan" className="hover:text-white transition-colors">Layanan</a>
            <a href="#tentang" className="hover:text-white transition-colors">Tentang</a>
            <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
          </div>
          <a href="#kontak" className="rounded-full bg-white text-zinc-950 px-5 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors">
            Mulai Sekarang
          </a>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/30 blur-[120px] rounded-full" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Agentic AI · Automation · Web Development
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Transformasi Bisnis dengan
            <br />
            Kekuatan Agentic AI
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            SEBA GROUP membantu bisnis Anda bergerak lebih cepat dengan AI agent otonom, automation, dan web development modern. Fokus pada strategi — biarkan teknologi bekerja untuk Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#kontak" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3 font-medium hover:opacity-90 transition-opacity">
              Hubungi Tim Kami
            </a>
            <a href="#layanan" className="w-full sm:w-auto rounded-full border border-zinc-800 px-8 py-3 font-medium text-zinc-300 hover:bg-zinc-900 transition-colors">
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800/50 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="layanan" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Layanan Kami</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Solusi end-to-end untuk kebutuhan digital bisnis Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8 hover:border-violet-500/50 hover:bg-zinc-900/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center mb-5 group-hover:bg-violet-600/30 transition-colors">
                  <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Kenapa SEBA GROUP?</h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Kami bukan sekadar vendor teknologi. Kami partner transformasi digital yang memahami bahwa setiap bisnis unik.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="rounded-xl border border-zinc-800/50 p-6">
              <h3 className="font-semibold mb-2">Result-Driven</h3>
              <p className="text-sm text-zinc-400">Fokus pada hasil terukur, bukan sekadar deliverable.</p>
            </div>
            <div className="rounded-xl border border-zinc-800/50 p-6">
              <h3 className="font-semibold mb-2">Tech-Forward</h3>
              <p className="text-sm text-zinc-400">Selalu pakai teknologi terbaru yang terbukti stabil.</p>
            </div>
            <div className="rounded-xl border border-zinc-800/50 p-6">
              <h3 className="font-semibold mb-2">Partnership</h3>
              <p className="text-sm text-zinc-400">Kami tumbuh bersama klien, bukan sekadar proyek.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/10 to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Siap Mentransformasi Bisnis Anda?</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
            Jadwalkan konsultasi gratis hari ini. Diskusikan kebutuhan Anda dengan tim kami — tanpa komitmen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@sebagroup.id" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3 font-medium hover:opacity-90 transition-opacity">
              Hubungi Kami
            </a>
            <a href="https://wa.me/6280000000000" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto rounded-full border border-zinc-800 px-8 py-3 font-medium text-zinc-300 hover:bg-zinc-900 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800/50 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-[10px]">S</div>
            <span>SEBA GROUP</span>
          </div>
          <div>© 2026 SEBA GROUP. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
