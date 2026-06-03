const CLUB_ABBREVIATIONS: Record<string, string> = {
  Independiente: "CAI",
  "Argentinos Juniors": "AAAJ",
  "Estudiantes de La Plata": "EdLP",
  "Gimnasia y Esgrima La Plata": "GELP",
  "Newell's Old Boys": "NOB",
  "Rosario Central": "CARC",
  "Defensa y Justicia": "DyJ",
};

/** Variantes en datos o filtros → nombre canónico */
const CLUB_ALIASES: Record<string, string> = {
  "C.A.I": "Independiente",
  CAI: "Independiente",
  "Estudiantes LP": "Estudiantes de La Plata",
  EdLP: "Estudiantes de La Plata",
  "Newell\u2019s Old Boys": "Newell's Old Boys",
};

export function normalizeClubName(club: string): string {
  return CLUB_ALIASES[club] ?? club;
}

export function getClubFullName(club: string): string {
  return normalizeClubName(club);
}

export function formatClubDisplay(club: string): string {
  const full = normalizeClubName(club);
  return CLUB_ABBREVIATIONS[full] ?? full;
}

export function clubsMatch(a: string, b: string): boolean {
  return normalizeClubName(a) === normalizeClubName(b);
}
