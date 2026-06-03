import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { PlayerCard } from "@/components/PlayerCard";
import { players, categories } from "@/data/players";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YouthScouting — Scouting de fútbol juvenil argentino" },
      {
        name: "description",
        content:
          "Plataforma premium de scouting para descubrir y seguir a los mejores juveniles del fútbol argentino. Video, estadísticas y reportes en un solo lugar.",
      },
      { property: "og:title", content: "YouthScouting— Scouting juvenil argentino" },
      {
        property: "og:description",
        content: "Descubrí a la próxima generación del fútbol argentino.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = players.slice(0, 4);
  return (
    <div className="min-h-screen bg-surface-900 text-slate-200">
      <SiteNav />
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero + buscador */}
        <section className="mb-16">
          <div className="mb-3 flex items-center gap-2">
            <div className="size-1.5 animate-pulse rounded-full bg-brand"></div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand">
              Temporada 2024/25 · Live
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black uppercase italic tracking-tight text-white text-balance">
            Próxima Generación{" "}
            <span className="text-stroke">Argentina</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-400">
            Acceso exclusivo a métricas avanzadas, video-análisis y reportes de campo
            de las divisiones inferiores del fútbol argentino.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-2 rounded-2xl border border-white/5 bg-surface-800 p-2">
            <div className="min-w-[200px] flex-1 px-4 py-2">
              <span className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
                Buscador
              </span>
              <input
                type="text"
                placeholder="Nombre, club o ciudad..."
                className="w-full border-none bg-transparent p-0 text-white outline-none placeholder:text-slate-600"
              />
            </div>
            <div className="hidden h-10 w-px bg-white/10 md:block"></div>
            <div className="px-4 py-2">
              <span className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
                Posición
              </span>
              <select className="border-none bg-transparent p-0 text-sm text-white outline-none">
                <option>Todos</option>
                <option>Enganche</option>
                <option>Extremo</option>
                <option>Central</option>
              </select>
            </div>
            <div className="hidden h-10 w-px bg-white/10 md:block"></div>
            <div className="px-4 py-2">
              <span className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
                Categoría
              </span>
              <select className="border-none bg-transparent p-0 text-sm text-white outline-none">
                {categories
                  .filter((c) => c !== "Todas")
                  .map((c) => (
                    <option key={c}>{c}</option>
                  ))}
              </select>
            </div>
            <Link
              to="/explorador"
              className="rounded-xl bg-brand px-8 py-3 font-display text-sm font-black text-brand-foreground transition-transform hover:scale-[1.02]"
            >
              BUSCAR TALENTO
            </Link>
          </div>

          {/* Filtros rápidos */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Reserva", "Quinta", "Zurdos", "Centrales con salida", "Extremos veloces", "Goleadores", "Arqueros modernos"].map(
              (chip) => (
                <button
                  key={chip}
                  className="rounded-full border border-white/10 bg-surface-800 px-4 py-1.5 text-xs text-slate-300 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {chip}
                </button>
              ),
            )}
          </div>
        </section>

        {/* Destacados */}
        <section>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold uppercase italic text-white">
              Jugadores Destacados
            </h2>
            <Link
              to="/explorador"
              className="text-xs font-bold uppercase tracking-widest text-brand hover:underline"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <PlayerCard key={p.id} player={p} />
            ))}
          </div>
        </section>

        {/* Stats banda */}
        <section className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border border-white/5 bg-surface-800 p-8 md:grid-cols-4">
          {[
            { k: "142", v: "Prospectos rastreados" },
            { k: "24", v: "Clubes cubiertos" },
            { k: "1.2k", v: "Videos analizados" },
            { k: "98%", v: "Precisión scouting" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl font-black text-brand">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.v}</div>
            </div>
          ))}
        </section>
      </main>

      <footer className="mt-20 border-t border-white/5 py-10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          © 2025 YouthScouting — Scouting del fútbol argentino
        </p>
      </footer>
    </div>
  );
}
