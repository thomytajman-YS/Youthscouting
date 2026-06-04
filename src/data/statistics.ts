import { players, type Player } from "@/data/players";

export type YouthCategory =
  | "Reserva"
  | "Cuarta"
  | "Quinta"
  | "Sexta"
  | "Séptima"
  | "Octava"
  | "Novena";

export const youthCategories: YouthCategory[] = [
  "Reserva",
  "Cuarta",
  "Quinta",
  "Sexta",
  "Séptima",
  "Octava",
  "Novena",
];

export const defaultYouthCategory: YouthCategory = "Reserva";

export type PlayerStatRow = {
  playerId?: string;
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
  playerId?: string;
  name?: string;
  club?: string;
  position?: string;
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

export type CategoryStatistics = {
  matchday: string;
  playerOfTheWeek: PlayerOfTheWeek;
  teamOfTheWeek: TeamOfTheWeek;
  topScorers: PlayerStatRow[];
  topAssisters: PlayerStatRow[];
  standings: StandingsRow[];
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

function buildTopScorers(category: string, extras: PlayerStatRow[] = []): PlayerStatRow[] {
  const fromPlayers = players
    .filter((p) => p.category === category && p.goals > 0)
    .map((p) => toPlayerRow(p, p.goals));

  return [...fromPlayers, ...extras]
    .sort((a, b) => b.value - a.value || b.matches - a.matches)
    .slice(0, 8);
}

function buildTopAssisters(category: string, extras: PlayerStatRow[] = []): PlayerStatRow[] {
  const fromPlayers = players
    .filter((p) => p.category === category && p.assists > 0)
    .map((p) => toPlayerRow(p, p.assists));

  return [...fromPlayers, ...extras]
    .sort((a, b) => b.value - a.value || b.matches - a.matches)
    .slice(0, 8);
}

const matchdayLabel = (n: number, category: YouthCategory) =>
  `Fecha ${n} · ${category} · Juveniles LPF 2026`;

export const statisticsByCategory: Record<YouthCategory, CategoryStatistics> = {
  Reserva: {
    matchday: "Fecha 9",
    playerOfTheWeek: {
      playerId: "aranda",
      matchday: matchdayLabel(9, "Reserva"),
      summary:
        "Doblete y asistencia en el clásico de Reserva. Dominó el mediocampo con pausa, filtró pases entre líneas y fue la referencia ofensiva del Xeneize en la fecha.",
      highlights: [
        { label: "Goles", value: "2" },
        { label: "Asistencias", value: "1" },
        { label: "Rating", value: "9.2" },
      ],
    },
    teamOfTheWeek: {
      club: "Boca Juniors",
      matchday: matchdayLabel(9, "Reserva"),
      summary:
        "Victoria 3-1 ante River en el Superclásico de Reserva. Solidez defensiva, presión alta efectiva y transiciones rápidas lideradas por Aranda desde el enganche.",
      crestColor: "from-amber-500/20 to-amber-600/5",
      highlights: [
        { label: "Resultado", value: "3-1" },
        { label: "Posición", value: "2°" },
        { label: "Racha", value: "4 PJ invicto" },
      ],
    },
    topScorers: buildTopScorers("Reserva"),
    topAssisters: buildTopAssisters("Reserva"),
    standings: [
      { club: "River Plate", pj: 9, pg: 6, pe: 2, pp: 1, gf: 18, gc: 9, dg: 9, pts: 20 },
      { club: "Boca Juniors", pj: 9, pg: 5, pe: 2, pp: 2, gf: 15, gc: 11, dg: 4, pts: 17 },
      { club: "Independiente", pj: 9, pg: 5, pe: 1, pp: 3, gf: 14, gc: 12, dg: 2, pts: 16 },
      { club: "San Lorenzo", pj: 9, pg: 4, pe: 2, pp: 3, gf: 13, gc: 12, dg: 1, pts: 14 },
      { club: "Racing Club", pj: 9, pg: 3, pe: 2, pp: 4, gf: 11, gc: 14, dg: -3, pts: 11 },
      { club: "Platense", pj: 9, pg: 3, pe: 1, pp: 5, gf: 10, gc: 15, dg: -5, pts: 10 },
    ],
  },

  Cuarta: {
    matchday: "Fecha 8",
    playerOfTheWeek: {
      playerId: "escudero",
      matchday: matchdayLabel(8, "Cuarta"),
      summary:
        "Partido completo con autoridad en la zaga. Salida limpia, juego aéreo impecable y primer pase preciso en cada salida desde atrás.",
      highlights: [
        { label: "Recuperaciones", value: "9" },
        { label: "Pases clave", value: "3" },
        { label: "Rating", value: "8.9" },
      ],
    },
    teamOfTheWeek: {
      club: "Racing Club",
      matchday: matchdayLabel(8, "Cuarta"),
      summary:
        "Valla invicta y victoria 2-0 en La Academia. La zaga comandada por Escudero no cedió espacios y el mediocampo controló el ritmo del partido.",
      crestColor: "from-sky-500/20 to-sky-600/5",
      highlights: [
        { label: "Resultado", value: "2-0" },
        { label: "Posición", value: "1°" },
        { label: "Racha", value: "3 PJ invicto" },
      ],
    },
    topScorers: buildTopScorers("Cuarta", [
      { name: "Benjamín González", club: "Racing Club", matches: 8, value: 5 },
      { name: "Facundo Reyna", club: "Racing Club", matches: 8, value: 4 },
      { name: "Tomás Insaurralde", club: "San Lorenzo", matches: 8, value: 3 },
    ]),
    topAssisters: buildTopAssisters("Cuarta", [
      { name: "Nicolás Blanco", club: "San Lorenzo", playerId: "blanco", matches: 8, value: 3 },
      { name: "Gonzalo Escudero", club: "Racing Club", playerId: "escudero", matches: 8, value: 1 },
      { name: "Mateo Clemente", club: "San Lorenzo", matches: 8, value: 3 },
      { name: "Lucas Belmonte", club: "River Plate", matches: 8, value: 2 },
    ]),
    standings: [
      { club: "Racing Club", pj: 8, pg: 6, pe: 1, pp: 1, gf: 16, gc: 6, dg: 10, pts: 19 },
      { club: "San Lorenzo", pj: 8, pg: 5, pe: 2, pp: 1, gf: 14, gc: 8, dg: 6, pts: 17 },
      { club: "River Plate", pj: 8, pg: 4, pe: 2, pp: 2, gf: 12, gc: 10, dg: 2, pts: 14 },
      { club: "Boca Juniors", pj: 8, pg: 3, pe: 3, pp: 2, gf: 11, gc: 9, dg: 2, pts: 12 },
      { club: "Independiente", pj: 8, pg: 2, pe: 2, pp: 4, gf: 9, gc: 13, dg: -4, pts: 8 },
    ],
  },

  Quinta: {
    matchday: "Fecha 9",
    playerOfTheWeek: {
      playerId: "stenta",
      matchday: matchdayLabel(9, "Quinta"),
      summary:
        "Hat-trick decisivo y asistencia en la goleada 4-0. Lideró presión alta, ganó duelos de espaldas y definió con zurda en cada ocasión clara.",
      highlights: [
        { label: "Goles", value: "3" },
        { label: "Asistencias", value: "1" },
        { label: "Rating", value: "9.4" },
      ],
    },
    teamOfTheWeek: {
      club: "Platense",
      matchday: matchdayLabel(9, "Quinta"),
      summary:
        "Victoria contundente 4-0 con solidez defensiva y transiciones rápidas. El Calamar sumó 3 de 3 en la fecha y consolidó el liderato del torneo.",
      crestColor: "from-amber-500/20 to-amber-600/5",
      highlights: [
        { label: "Resultado", value: "4-0" },
        { label: "Posición", value: "1°" },
        { label: "Racha", value: "5 PJ invicto" },
      ],
    },
    topScorers: buildTopScorers("Quinta"),
    topAssisters: buildTopAssisters("Quinta"),
    standings: [
      { club: "Platense", pj: 9, pg: 7, pe: 1, pp: 1, gf: 22, gc: 8, dg: 14, pts: 22 },
      { club: "San Lorenzo", pj: 9, pg: 6, pe: 1, pp: 2, gf: 19, gc: 10, dg: 9, pts: 19 },
      { club: "Racing Club", pj: 9, pg: 5, pe: 2, pp: 2, gf: 16, gc: 11, dg: 5, pts: 17 },
      { club: "River Plate", pj: 9, pg: 4, pe: 2, pp: 3, gf: 14, gc: 13, dg: 1, pts: 14 },
      { club: "Boca Juniors", pj: 9, pg: 3, pe: 3, pp: 3, gf: 12, gc: 12, dg: 0, pts: 12 },
      { club: "Independiente", pj: 9, pg: 2, pe: 2, pp: 5, gf: 9, gc: 16, dg: -7, pts: 8 },
    ],
  },

  Sexta: {
    matchday: "Fecha 7",
    playerOfTheWeek: {
      name: "Franco Lorenzón",
      club: "River Plate",
      position: "Volante central",
      matchday: matchdayLabel(7, "Sexta"),
      summary:
        "Volante box-to-box con dos goles y recuperaciones constantes. Marcó el ritmo del partido y fue determinante en ambos sectores del campo.",
      highlights: [
        { label: "Goles", value: "2" },
        { label: "Recuperaciones", value: "11" },
        { label: "Rating", value: "9.0" },
      ],
    },
    teamOfTheWeek: {
      club: "River Plate",
      matchday: matchdayLabel(7, "Sexta"),
      summary:
        "Goleada 5-1 con dominio total del mediocampo. Presión alta desde el inicio y transiciones letales por ambos perfiles.",
      crestColor: "from-red-500/15 to-red-600/5",
      highlights: [
        { label: "Resultado", value: "5-1" },
        { label: "Posición", value: "1°" },
        { label: "Racha", value: "6 PJ invicto" },
      ],
    },
    topScorers: buildTopScorers("Sexta", [
      { name: "Franco Lorenzón", club: "River Plate", matches: 7, value: 8 },
      { name: "Mateo Abaldo", club: "Independiente", matches: 7, value: 6 },
      { name: "Tomás Fabricio Yaciuk", club: "San Lorenzo", playerId: "yaciuk", matches: 7, value: 5 },
      { name: "Santiago Montiel", club: "Independiente", matches: 7, value: 4 },
    ]),
    topAssisters: buildTopAssisters("Sexta", [
      { name: "Ignacio Perruzzi", club: "San Lorenzo", matches: 7, value: 5 },
      { name: "Lucas Belmonte", club: "River Plate", matches: 7, value: 4 },
      { name: "Tomás Fabricio Yaciuk", club: "San Lorenzo", playerId: "yaciuk", matches: 7, value: 3 },
    ]),
    standings: [
      { club: "River Plate", pj: 7, pg: 6, pe: 1, pp: 0, gf: 21, gc: 7, dg: 14, pts: 19 },
      { club: "Boca Juniors", pj: 7, pg: 5, pe: 0, pp: 2, gf: 16, gc: 9, dg: 7, pts: 15 },
      { club: "San Lorenzo", pj: 7, pg: 4, pe: 2, pp: 1, gf: 14, gc: 8, dg: 6, pts: 14 },
      { club: "Racing Club", pj: 7, pg: 3, pe: 2, pp: 2, gf: 11, gc: 10, dg: 1, pts: 11 },
      { club: "Independiente", pj: 7, pg: 2, pe: 1, pp: 4, gf: 10, gc: 14, dg: -4, pts: 7 },
    ],
  },

  Séptima: {
    matchday: "Fecha 6",
    playerOfTheWeek: {
      playerId: "aranda",
      matchday: matchdayLabel(6, "Séptima"),
      summary:
        "Capitán y figura indiscutida. Hat-trick con zurda en el triunfo por 4-2; dictó el ritmo y fue el referente ofensivo de la categoría 2007.",
      highlights: [
        { label: "Goles", value: "3" },
        { label: "Asistencias", value: "1" },
        { label: "Rating", value: "9.5" },
      ],
    },
    teamOfTheWeek: {
      club: "Boca Juniors",
      matchday: matchdayLabel(6, "Séptima"),
      summary:
        "Ofensiva desatada con 4 goles en el primer tiempo. El equipo de Barijho no dio respiro y sumó su cuarta victoria consecutiva.",
      crestColor: "from-amber-500/20 to-amber-600/5",
      highlights: [
        { label: "Resultado", value: "4-2" },
        { label: "Posición", value: "1°" },
        { label: "Racha", value: "4 PJ invicto" },
      ],
    },
    topScorers: buildTopScorers("Séptima", [
      { name: "Tomás Leandro Aranda", club: "Boca Juniors", playerId: "aranda", matches: 6, value: 9 },
      { name: "Santino Viollaz", club: "Independiente", matches: 6, value: 6 },
      { name: "Iker Zufiaurre", club: "Boca Juniors", matches: 6, value: 5 },
      { name: "Gonzalo Gelini", club: "Boca Juniors", matches: 6, value: 4 },
    ]),
    topAssisters: buildTopAssisters("Séptima", [
      { name: "Tomás Leandro Aranda", club: "Boca Juniors", playerId: "aranda", matches: 6, value: 5 },
      { name: "Gonzalo Gelini", club: "Boca Juniors", matches: 6, value: 4 },
      { name: "Facundo Gulli", club: "San Lorenzo", matches: 6, value: 3 },
    ]),
    standings: [
      { club: "Boca Juniors", pj: 6, pg: 5, pe: 1, pp: 0, gf: 18, gc: 6, dg: 12, pts: 16 },
      { club: "River Plate", pj: 6, pg: 4, pe: 1, pp: 1, gf: 14, gc: 8, dg: 6, pts: 13 },
      { club: "Independiente", pj: 6, pg: 3, pe: 2, pp: 1, gf: 12, gc: 9, dg: 3, pts: 11 },
      { club: "Racing Club", pj: 6, pg: 2, pe: 2, pp: 2, gf: 9, gc: 10, dg: -1, pts: 8 },
      { club: "San Lorenzo", pj: 6, pg: 1, pe: 1, pp: 4, gf: 7, gc: 14, dg: -7, pts: 4 },
    ],
  },

  Octava: {
    matchday: "Fecha 5",
    playerOfTheWeek: {
      name: "Matías Abaldo",
      club: "Independiente",
      position: "Delantero centro",
      matchday: matchdayLabel(5, "Octava"),
      summary:
        "Delantero centro imparable: doblete y un penalti provocado. Gana espaldas con facilidad y define con ambas piernas en el área.",
      highlights: [
        { label: "Goles", value: "2" },
        { label: "Penaltis prov.", value: "1" },
        { label: "Rating", value: "8.8" },
      ],
    },
    teamOfTheWeek: {
      club: "Independiente",
      matchday: matchdayLabel(5, "Octava"),
      summary:
        "Triunfo 3-0 con intensidad defensiva y contundencia ofensiva. El Rojo no concedió tiros al arco rival en todo el partido.",
      crestColor: "from-red-600/20 to-red-700/5",
      highlights: [
        { label: "Resultado", value: "3-0" },
        { label: "Posición", value: "1°" },
        { label: "Racha", value: "3 PJ invicto" },
      ],
    },
    topScorers: buildTopScorers("Octava", [
      { name: "Matías Abaldo", club: "Independiente", matches: 5, value: 7 },
      { name: "Exequiel Zeballos", club: "Boca Juniors", matches: 5, value: 6 },
      { name: "Branco Salinardi", club: "San Lorenzo", matches: 5, value: 5 },
      { name: "Kevin Lomónaco", club: "Independiente", matches: 5, value: 4 },
    ]),
    topAssisters: buildTopAssisters("Octava", [
      { name: "Rodrigo Auzmendi", club: "San Lorenzo", matches: 5, value: 4 },
      { name: "Exequiel Zeballos", club: "Boca Juniors", matches: 5, value: 3 },
      { name: "Luciano Cabral", club: "Independiente", matches: 5, value: 3 },
    ]),
    standings: [
      { club: "Independiente", pj: 5, pg: 4, pe: 1, pp: 0, gf: 13, gc: 3, dg: 10, pts: 13 },
      { club: "Boca Juniors", pj: 5, pg: 3, pe: 1, pp: 1, gf: 10, gc: 6, dg: 4, pts: 10 },
      { club: "River Plate", pj: 5, pg: 3, pe: 0, pp: 2, gf: 9, gc: 7, dg: 2, pts: 9 },
      { club: "Racing Club", pj: 5, pg: 2, pe: 1, pp: 2, gf: 8, gc: 9, dg: -1, pts: 7 },
      { club: "San Lorenzo", pj: 5, pg: 1, pe: 2, pp: 2, gf: 6, gc: 10, dg: -4, pts: 5 },
    ],
  },

  Novena: {
    matchday: "Fecha 4",
    playerOfTheWeek: {
      playerId: "baju",
      matchday: matchdayLabel(4, "Novena"),
      summary:
        "Extremo zurdo desequilibrante con gol olímpico y asistencia. Regateó en velocidad por la banda y definió con precisión en cada ataque.",
      highlights: [
        { label: "Goles", value: "1" },
        { label: "Asistencias", value: "2" },
        { label: "Rating", value: "8.7" },
      ],
    },
    teamOfTheWeek: {
      club: "River Plate",
      matchday: matchdayLabel(4, "Novena"),
      summary:
        "Victoria 2-1 con gol en el último minuto. Dominio territorial y juego por bandas que desgastó al rival en el complemento.",
      crestColor: "from-red-500/15 to-red-600/5",
      highlights: [
        { label: "Resultado", value: "2-1" },
        { label: "Posición", value: "2°" },
        { label: "Racha", value: "2 PJ invicto" },
      ],
    },
    topScorers: buildTopScorers("Novena", [
      { name: "Lisandro Bajú", club: "River Plate", playerId: "baju", matches: 4, value: 4 },
      { name: "Facundo Herrera", club: "Boca Juniors", playerId: "herrera", matches: 4, value: 3 },
      { name: "Tomás Parmo", club: "Independiente", playerId: "parmo", matches: 4, value: 3 },
      { name: "Dylan Gorosito", club: "Boca Juniors", playerId: "gorosito", matches: 4, value: 2 },
    ]),
    topAssisters: buildTopAssisters("Novena", [
      { name: "Lisandro Bajú", club: "River Plate", playerId: "baju", matches: 4, value: 3 },
      { name: "Tomás Parmo", club: "Independiente", playerId: "parmo", matches: 4, value: 2 },
      { name: "Mateo Pérez Curci", club: "Independiente", playerId: "perez-curci", matches: 4, value: 2 },
    ]),
    standings: [
      { club: "Boca Juniors", pj: 4, pg: 3, pe: 1, pp: 0, gf: 11, gc: 4, dg: 7, pts: 10 },
      { club: "River Plate", pj: 4, pg: 3, pe: 0, pp: 1, gf: 9, gc: 5, dg: 4, pts: 9 },
      { club: "Racing Club", pj: 4, pg: 2, pe: 1, pp: 1, gf: 7, gc: 6, dg: 1, pts: 7 },
      { club: "Independiente", pj: 4, pg: 1, pe: 2, pp: 1, gf: 6, gc: 7, dg: -1, pts: 5 },
      { club: "San Lorenzo", pj: 4, pg: 0, pe: 2, pp: 2, gf: 4, gc: 9, dg: -5, pts: 2 },
    ],
  },
};

export function getCategoryStatistics(category: YouthCategory): CategoryStatistics {
  return statisticsByCategory[category];
}

/** @deprecated Usar getCategoryStatistics("Reserva") */
export const currentMatchday = statisticsByCategory.Reserva.matchday;
export const topScorers = statisticsByCategory.Reserva.topScorers;
export const topAssisters = statisticsByCategory.Reserva.topAssisters;
export const standings = statisticsByCategory.Reserva.standings;
export const playerOfTheWeek = statisticsByCategory.Reserva.playerOfTheWeek;
export const teamOfTheWeek = statisticsByCategory.Reserva.teamOfTheWeek;
