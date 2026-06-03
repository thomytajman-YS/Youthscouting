import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { players } from "@/data/players";
import {
  currentMatchday,
  playerOfTheWeek,
  standings,
  teamOfTheWeek,
  topAssisters,
  topScorers,
  type PlayerStatRow,
  type StandingsRow,
} from "@/data/statistics";
import { formatClubDisplay, getClubFullName } from "@/lib/clubs";

export const Route = createFileRoute("/estadisticas")({
  head: () => ({
    meta: [
      { title: "Estadísticas — YouthScouting" },
      {
        name: "description",
        content:
          "Tablas de goleadores, asistidores, posiciones y destacados de la fecha en el scouting juvenil argentino.",
      },
    ],
  }),
  component: EstadisticasPage,
});

function EstadisticasPage() {
  const featuredPlayer = players.find((p) => p.id === playerOfTheWeek.playerId);

  return (
    <div className="min-h-screen bg-surface-900 text-slate-200">
      <SiteNav />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10">
          <div className="mb-2 flex items-center gap-2">
            <div className="size-1.5 animate-pulse rounded-full bg-brand" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand">
              {currentMatchday} · Temporada 2026
            </span>
          </div>
          <h1 className="font-display text-4xl font-black uppercase italic tracking-tight text-white md:text-5xl">
            Estadísticas
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Rankings, tablas y destacados del torneo juvenil. Datos actualizados por fecha.
          </p>
        </header>

        {/* Destacados de la fecha */}
        <section className="mb-10 grid gap-5 lg:grid-cols-2">
          {featuredPlayer && (
            <FeaturedPlayerCard player={featuredPlayer} />
          )}
          <FeaturedTeamCard />
        </section>

        {/* Goleadores + Asistidores */}
        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <PlayerStatsTable
            title="Tabla de goleadores"
            subtitle="Máximos anotadores del torneo"
            rows={topScorers}
            statLabel="Goles"
          />
          <PlayerStatsTable
            title="Tabla de asistidores"
            subtitle="Máximos generadores de juego"
            rows={topAssisters}
            statLabel="Asistencias"
          />
        </section>

        {/* Posiciones */}
        <section>
          <SectionHeader
            title="Tabla de posiciones"
            subtitle="Clasificación general · Juveniles LPF 2026"
          />
          <StandingsTable rows={standings} />
        </section>
      </main>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-xl font-bold uppercase italic text-white md:text-2xl">
        {title}
      </h2>
      <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
    </div>
  );
}

function FeaturedPlayerCard({ player }: { player: (typeof players)[number] }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-brand/25 bg-surface-800">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
      <div className="relative grid gap-6 p-6 sm:grid-cols-[140px_1fr] sm:p-8">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[140px] overflow-hidden rounded-xl border border-white/10 bg-surface-900 sm:mx-0">
          <img
            src={player.image}
            alt={player.name}
            className="h-full w-full object-contain object-center"
          />
          <div className="absolute left-2 top-2 rounded-full bg-brand px-2 py-0.5 text-[9px] font-black uppercase text-brand-foreground">
            MVP
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
            Jugador de la fecha
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
            {playerOfTheWeek.matchday}
          </span>
          <Link
            to="/jugador/$id"
            params={{ id: player.id }}
            className="mt-2 font-display text-2xl font-black uppercase text-white transition-colors hover:text-brand sm:text-3xl"
          >
            {player.name}
          </Link>
          <p className="mt-1 text-sm font-bold text-slate-400">
            <span title={getClubFullName(player.club)}>{formatClubDisplay(player.club)}</span>
            {" · "}
            {player.positionFull}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {playerOfTheWeek.summary}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {playerOfTheWeek.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-white/5 bg-surface-900/80 px-3 py-2 text-center"
              >
                <div className="text-[10px] uppercase tracking-widest text-slate-500">
                  {h.label}
                </div>
                <div className="font-display text-xl font-black text-brand">{h.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedTeamCard() {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-800">
      <div className={`absolute inset-0 bg-gradient-to-br ${teamOfTheWeek.crestColor} to-transparent`} />
      <div className="relative flex h-full flex-col p-6 sm:p-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
          Equipo de la fecha
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
          {teamOfTheWeek.matchday}
        </span>
        <h3 className="mt-2 font-display text-3xl font-black uppercase italic text-white">
          {formatClubDisplay(teamOfTheWeek.club)}
        </h3>
        <p className="mt-1 text-sm text-slate-400" title={getClubFullName(teamOfTheWeek.club)}>
          {teamOfTheWeek.club}
        </p>
        <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">
          {teamOfTheWeek.summary}
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {teamOfTheWeek.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-white/5 bg-surface-900/80 px-3 py-2 text-center"
            >
              <div className="text-[10px] uppercase tracking-widest text-slate-500">
                {h.label}
              </div>
              <div className="font-display text-xl font-black text-white">{h.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/5 bg-surface-900/60 px-4 py-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/10 font-display text-sm font-black text-brand">
            {teamOfTheWeek.club.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">
              Líder del torneo
            </div>
            <div className="font-display text-lg font-bold text-white">
              {standings[0]?.pts} pts · DG {standings[0]?.dg > 0 ? "+" : ""}
              {standings[0]?.dg}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PlayerStatsTable({
  title,
  subtitle,
  rows,
  statLabel,
}: {
  title: string;
  subtitle: string;
  rows: PlayerStatRow[];
  statLabel: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-surface-800">
      <div className="border-b border-white/5 px-5 py-4">
        <h2 className="font-display text-lg font-bold uppercase italic text-white">{title}</h2>
        <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 text-[10px] uppercase tracking-widest text-slate-500">
              <th className="px-5 py-3 text-left font-bold">#</th>
              <th className="px-3 py-3 text-left font-bold">Jugador</th>
              <th className="px-3 py-3 text-left font-bold">Club</th>
              <th className="px-3 py-3 text-center font-bold">PJ</th>
              <th className="px-5 py-3 text-right font-bold">{statLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <PlayerStatRowDesktop
                key={row.playerId}
                row={row}
                rank={i + 1}
                statLabel={statLabel}
                highlight={i === 0}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile list */}
      <ul className="divide-y divide-white/5 sm:hidden">
        {rows.map((row, i) => (
          <PlayerStatRowMobile
            key={row.playerId}
            row={row}
            rank={i + 1}
            statLabel={statLabel}
            highlight={i === 0}
          />
        ))}
      </ul>
    </div>
  );
}

function PlayerStatRowDesktop({
  row,
  rank,
  statLabel,
  highlight,
}: {
  row: PlayerStatRow;
  rank: number;
  statLabel: string;
  highlight: boolean;
}) {
  return (
    <tr
      className={`border-b border-white/5 transition-colors last:border-0 hover:bg-surface-700/40 ${
        highlight ? "bg-brand/5" : ""
      }`}
    >
      <td className="px-5 py-3">
        <span
          className={`font-display text-sm font-black ${highlight ? "text-brand" : "text-slate-500"}`}
        >
          {rank}
        </span>
      </td>
      <td className="px-3 py-3">
        <Link
          to="/jugador/$id"
          params={{ id: row.playerId }}
          className="font-medium text-white hover:text-brand"
        >
          {row.name}
        </Link>
      </td>
      <td className="px-3 py-3">
        <span className="text-slate-400" title={getClubFullName(row.club)}>
          {formatClubDisplay(row.club)}
        </span>
      </td>
      <td className="px-3 py-3 text-center text-slate-400">{row.matches}</td>
      <td className="px-5 py-3 text-right">
        <span className="font-display text-lg font-black text-brand">{row.value}</span>
        <span className="sr-only">{statLabel}</span>
      </td>
    </tr>
  );
}

function PlayerStatRowMobile({
  row,
  rank,
  statLabel,
  highlight,
}: {
  row: PlayerStatRow;
  rank: number;
  statLabel: string;
  highlight: boolean;
}) {
  return (
    <li className={`flex items-center gap-3 px-4 py-3 ${highlight ? "bg-brand/5" : ""}`}>
      <span
        className={`w-5 shrink-0 font-display text-sm font-black ${highlight ? "text-brand" : "text-slate-500"}`}
      >
        {rank}
      </span>
      <div className="min-w-0 flex-1">
        <Link
          to="/jugador/$id"
          params={{ id: row.playerId }}
          className="block truncate font-medium text-white hover:text-brand"
        >
          {row.name}
        </Link>
        <p className="truncate text-xs text-slate-500">
          {formatClubDisplay(row.club)} · {row.matches} PJ
        </p>
      </div>
      <div className="shrink-0 text-right">
        <div className="font-display text-xl font-black text-brand">{row.value}</div>
        <div className="text-[9px] uppercase tracking-widest text-slate-500">{statLabel}</div>
      </div>
    </li>
  );
}

function StandingsTable({ rows }: { rows: StandingsRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-surface-800">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-white/5 text-[10px] uppercase tracking-widest text-slate-500">
              <th className="sticky left-0 z-10 bg-surface-800 px-4 py-3 text-left font-bold sm:px-5">
                #
              </th>
              <th className="sticky left-8 z-10 min-w-[120px] bg-surface-800 px-3 py-3 text-left font-bold sm:left-10 sm:min-w-[160px]">
                Equipo
              </th>
              <th className="px-2 py-3 text-center font-bold">PJ</th>
              <th className="px-2 py-3 text-center font-bold">PG</th>
              <th className="px-2 py-3 text-center font-bold">PE</th>
              <th className="px-2 py-3 text-center font-bold">PP</th>
              <th className="px-2 py-3 text-center font-bold">GF</th>
              <th className="px-2 py-3 text-center font-bold">GC</th>
              <th className="px-2 py-3 text-center font-bold">DG</th>
              <th className="px-4 py-3 text-center font-bold sm:px-5">PTS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <StandingsRowItem key={row.club} row={row} rank={i + 1} highlight={i < 3} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StandingsRowItem({
  row,
  rank,
  highlight,
}: {
  row: StandingsRow;
  rank: number;
  highlight: boolean;
}) {
  const dgLabel = row.dg > 0 ? `+${row.dg}` : String(row.dg);

  return (
    <tr
      className={`border-b border-white/5 transition-colors last:border-0 hover:bg-surface-700/40 ${
        highlight ? "bg-brand/[0.03]" : ""
      }`}
    >
      <td className="sticky left-0 z-10 bg-surface-800 px-4 py-3 sm:px-5">
        <span className={`font-display font-black ${highlight ? "text-brand" : "text-slate-500"}`}>
          {rank}
        </span>
      </td>
      <td className="sticky left-8 z-10 bg-surface-800 px-3 py-3 sm:left-10">
        <span
          className="font-medium text-white"
          title={getClubFullName(row.club)}
        >
          {formatClubDisplay(row.club)}
        </span>
      </td>
      <td className="px-2 py-3 text-center text-slate-400">{row.pj}</td>
      <td className="px-2 py-3 text-center text-slate-400">{row.pg}</td>
      <td className="px-2 py-3 text-center text-slate-400">{row.pe}</td>
      <td className="px-2 py-3 text-center text-slate-400">{row.pp}</td>
      <td className="px-2 py-3 text-center text-slate-400">{row.gf}</td>
      <td className="px-2 py-3 text-center text-slate-400">{row.gc}</td>
      <td
        className={`px-2 py-3 text-center font-medium ${
          row.dg > 0 ? "text-emerald-400" : row.dg < 0 ? "text-red-400" : "text-slate-400"
        }`}
      >
        {dgLabel}
      </td>
      <td className="px-4 py-3 text-center sm:px-5">
        <span className="font-display text-base font-black text-brand">{row.pts}</span>
      </td>
    </tr>
  );
}
