import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { ClubsSidebar } from "@/components/ClubsSidebar";
import { PlayerPhoto } from "@/components/PlayerPhoto";
import { players } from "@/data/players";
import { formatClubDisplay, getClubFullName } from "@/lib/clubs";

export const Route = createFileRoute("/jugador/$id")({
  head: ({ params }) => {
    const player = players.find((p) => p.id === params.id);
    return {
      meta: [
        { title: player ? `${player.name} — YouthScouting` : "Jugador — YouthScouting" },
        {
          name: "description",
          content: player
            ? `Perfil de scouting de ${player.name}, ${player.positionFull} de ${getClubFullName(player.club)}.`
            : "Perfil de jugador.",
        },
        ...(player
          ? [
              { property: "og:title", content: `${player.name} — ${getClubFullName(player.club)}` },
              { property: "og:image", content: player.image },
            ]
          : []),
      ],
    };
  },
  loader: ({ params }) => {
    const player = players.find((p) => p.id === params.id);
    if (!player) throw notFound();
    return { player: player };
  },
  component: PlayerPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-surface-900 text-slate-200">
      <SiteNav />
      <div className="mx-auto max-w-md p-20 text-center">
        <h1 className="font-display text-3xl font-black">Jugador no encontrado</h1>
        <Link to="/explorador" className="mt-4 inline-block text-brand">
          ← Volver al explorador
        </Link>
      </div>
    </div>
  ),
});

function PlayerPage() {
  const { player } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-surface-900 text-slate-200">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 py-10">
        <Link
          to="/explorador"
          className="mb-6 inline-block text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand"
        >
          ← Explorador
        </Link>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <ClubsSidebar />
          <div>
        {/* Hero */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative">
            <PlayerPhoto
              src={player.image}
              alt={player.name}
              loading="eager"
              className="aspect-[4/5] w-full rounded-2xl border border-white/5"
            />
            <div
              title={getClubFullName(player.club)}
              className="absolute left-4 right-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase backdrop-blur-md"
            >
              {formatClubDisplay(player.club)}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xs font-bold uppercase tracking-widest text-brand">
              {player.category} · {player.positionFull}
            </div>
            <h1 className="mt-2 font-display text-5xl md:text-6xl font-black uppercase italic text-white">
              {player.name}
            </h1>

            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/5 py-6 sm:grid-cols-4">
              <Info label="Edad" value={`${player.age} años`} />
              <Info label="Nacimiento" value={`${player.birthYear}`} />
              <Info label="Altura" value={`${player.height} cm`} />
              <Info label="Pierna" value={player.foot} />
              <Info label="Nacionalidad" value={player.nationality} />
              <Info label="Rating" value={player.rating.toFixed(1)} highlight />
              <Info
                label="Club"
                value={formatClubDisplay(player.club)}
                title={getClubFullName(player.club)}
              />
              <Info label="Categoría" value={player.category} />
              <Info label="Posición" value={player.position} />
              <Info
                label="Representante"
                value={player.agent}
                className="col-span-2 sm:col-span-3"
                noTruncate
              />
            </div>

            <div className="mt-6 flex gap-3">
              <button className="rounded-xl bg-brand px-6 py-3 font-display text-sm font-black text-brand-foreground transition-transform hover:scale-[1.02]">
                ★ AGREGAR A FAVORITOS
              </button>
              <button className="rounded-xl border border-white/10 bg-surface-800 px-6 py-3 text-sm font-bold uppercase text-white hover:bg-surface-700">
                + Lista
              </button>
            </div>

            {/* Stats básicas */}
            <div className="mt-8">
              <h2 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Stats básicas
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {player.basicStats.map((s: { label: string; value: string | number }) => (
                  <div key={s.label} className="rounded-xl border border-white/5 bg-surface-900 p-3 text-center">
                    <div className="text-[10px] uppercase tracking-widest text-slate-500">{s.label}</div>
                    <div className="font-display mt-1 text-xl font-black text-white">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scouting report */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-white/5 bg-surface-800 p-8">
            <h2 className="font-display text-xl font-bold uppercase italic text-white">
              Reporte de Scouting
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {player.scoutingReport}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {player.strengths.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[10px] font-bold uppercase text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Videos */}
          <div>
            <h2 className="mb-4 font-display text-xl font-bold uppercase italic text-white">
              Videos
            </h2>
            <div className="space-y-3">
              {player.videos.map((v: { title: string; duration: string; thumb: string; url?: string }) => (
                <a
                  key={v.title}
                  href={v.url ?? "#"}
                  target={v.url ? "_blank" : undefined}
                  rel={v.url ? "noopener noreferrer" : undefined}
                  className="group flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl border border-white/5 bg-surface-800 p-2 transition-colors hover:border-brand/40"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-lg">
                    <img src={v.thumb} alt="" className="size-full object-cover" />
                    <div className="absolute inset-0 grid place-items-center bg-black/40">
                      <div className="grid size-8 place-items-center rounded-full bg-brand text-brand-foreground">
                        ▶
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">{v.title}</p>
                    <p className="text-xs text-slate-500">{v.duration}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Observaciones */}
        <section className="mt-12">
          <div className="rounded-2xl border border-white/5 bg-surface-800 p-8">
            <h2 className="font-display text-xl font-bold uppercase italic text-white">
              Observaciones
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {player.observations}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/5 pt-4 sm:grid-cols-4">
              <Info
                label="Representante"
                value={player.agent}
                className="col-span-2 sm:col-span-3"
                noTruncate
              />
              <Info label="Clips" value={`${player.clips.length}`} />
            </div>
          </div>
        </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Info({
  label,
  value,
  highlight,
  title,
  className,
  noTruncate,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  title?: string;
  className?: string;
  noTruncate?: boolean;
}) {
  return (
    <div className={className}>
      <div className="text-[10px] uppercase tracking-widest text-slate-500">{label}</div>
      <div
        title={title ?? (noTruncate ? undefined : value)}
        className={`font-display mt-1 text-2xl font-black ${highlight ? "text-brand" : "text-white"} ${
          noTruncate ? "leading-snug" : "truncate"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
