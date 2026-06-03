import { players, type Player } from "@/data/players";

export type PlayerStatRow = {
  playerId: string;
  name: string;
  club: string;
  matches: number;
  value: number;
};

export type StandingsRow = {
  club: string;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  dg: number;
  pts: number;
};

export type PlayerOfTheWeek = {
  playerId: string;
  matchday: string;
  summary: string;
  highlights: { label: string; value: string }[];
};

export type TeamOfTheWeek = {
  club: string;
  matchday: string;
  summary: string;
  highlights: { label: string; value: string }[];
  crestColor: string;
};

function getMatchesPlayed(player: Player): number {
  const pj = player.basicStats.find((s) => s.label === "PJ");
  return pj ? Number(pj.value) : 0;
}

function toPlayerRow(player: Player, value: number): PlayerStatRow {
  return {
    playerId: player.id,
    name: player.name,
    club: player.club,
    matches: getMatchesPlayed(player),
    value,
  };
}

export const topScorers: PlayerStatRow[] = [...players]
  .filter((p) => p.goals > 0)
  .sort((a, b) => b.goals - a.goals || b.assists - a.assists)
  .map((p) => toPlayerRow(p, p.goals));

export const topAssisters: PlayerStatRow[] = [...players]
  .filter((p) => p.assists > 0)
  .sort((a, b) => b.assists - a.assists || b.goals - a.goals)
  .map((p) => toPlayerRow(p, p.assists));

export const standings: StandingsRow[] = [
  { club: "Platense", pj: 9, pg: 7, pe: 1, pp: 1, gf: 22, gc: 8, dg: 14, pts: 22 },
  { club: "River Plate", pj: 9, pg: 6, pe: 2, pp: 1, gf: 18, gc: 9, dg: 9, pts: 20 },
  { club: "Boca Juniors", pj: 9, pg: 5, pe: 2, pp: 2, gf: 15, gc: 11, dg: 4, pts: 17 },
  { club: "Independiente", pj: 9, pg: 5, pe: 1, pp: 3, gf: 14, gc: 12, dg: 2, pts: 16 },
  { club: "Vélez Sarsfield", pj: 9, pg: 4, pe: 2, pp: 3, gf: 12, gc: 13, dg: -1, pts: 14 },
  { club: "Racing Club", pj: 9, pg: 3, pe: 2, pp: 4, gf: 11, gc: 14, dg: -3, pts: 11 },
  { club: "Estudiantes de La Plata", pj: 9, pg: 2, pe: 3, pp: 4, gf: 9, gc: 15, dg: -6, pts: 9 },
];

export const playerOfTheWeek: PlayerOfTheWeek = {
  playerId: "stenta",
  matchday: "Fecha 9 · Juveniles LPF 2026",
  summary:
    "Hat-trick decisivo y doble asistencia en la goleada de Quinta. Lideró presión alta, ganó duelos de espaldas y definió con zurda en cada ocasión clara.",
  highlights: [
    { label: "Goles", value: "3" },
    { label: "Asistencias", value: "1" },
    { label: "Rating", value: "9.4" },
  ],
};

export const teamOfTheWeek: TeamOfTheWeek = {
  club: "Platense",
  matchday: "Fecha 9 · Juveniles LPF 2026",
  summary:
    "Victoria contundente 4-0 en Quinta con solidez defensiva y transiciones rápidas. El Calamar sumó 3 de 3 en la fecha y consolidó el liderato del torneo.",
  crestColor: "from-amber-500/20 to-amber-600/5",
  highlights: [
    { label: "Resultado", value: "4-0" },
    { label: "Posición", value: "1°" },
    { label: "Racha", value: "5 PJ invicto" },
  ],
};

export const currentMatchday = "Fecha 9";
