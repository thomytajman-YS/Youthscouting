import { Link } from "@tanstack/react-router";
import type { Player, PlayerStatus } from "@/data/players";
import { formatClubDisplay, getClubFullName } from "@/lib/clubs";
import { PlayerPhoto } from "@/components/PlayerPhoto";

const statusStyles: Record<PlayerStatus, { label: string; className: string }> = {
  disponible: {
    label: "Disponible",
    className: "border-emerald-500/30 text-emerald-400",
  },
  lesionado: {
    label: "Lesionado",
    className: "border-red-500/30 text-red-400",
  },
};

export function PlayerCard({ player }: { player: Player }) {
  const top = player.basicStats.slice(0, 3);
  const status = statusStyles[player.status];
  return (
    <Link
      to="/jugador/$id"
      params={{ id: player.id }}
      className="group block overflow-hidden rounded-2xl border border-white/5 bg-surface-800 transition-colors hover:border-brand/40"
    >
      <div className="relative">
        <PlayerPhoto
          src={player.image}
          alt={player.name}
          className="aspect-[3/4] w-full"
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
          <span
            title={getClubFullName(player.club)}
            className="min-w-0 max-w-[65%] truncate rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase backdrop-blur-md"
          >
            {formatClubDisplay(player.club)}
          </span>
          <span
            className={`shrink-0 rounded-full border bg-black/60 px-3 py-1 text-[10px] font-bold uppercase backdrop-blur-md ${status.className}`}
          >
            {status.label}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-800 via-surface-800/80 to-transparent p-4">
          <h3 className="font-display text-xl font-black text-white">{player.name}</h3>
          <p className="text-sm font-bold text-brand">
            {player.positionFull} / {player.age} años
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-white/5 p-4">
        {top.map((s) => (
          <div key={s.label} className="text-center">
            <span className="block text-[10px] uppercase text-slate-500">{s.label}</span>
            <span className="font-display text-lg font-bold text-white">{s.value}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}
