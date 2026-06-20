import { categories, players, positions, type Player } from "@/data/players";
import { clubsMatch } from "@/lib/clubs";

export const quickFilterIds = [
  "reserva",
  "quinta",
  "zurdos",
  "centrales-con-salida",
  "extremos-veloces",
  "goleadores",
  "arqueros-modernos",
] as const;

export type QuickFilterId = (typeof quickFilterIds)[number];

export type QuickFilterTrait =
  | "centrales-con-salida"
  | "extremos-veloces"
  | "goleadores"
  | "arqueros-modernos";

export type ExplorerFilters = {
  q?: string;
  position?: string;
  category?: string;
  club?: string;
  ageMin?: number;
  ageMax?: number;
  minHeight?: number;
  minGoals?: number;
  minAssists?: number;
  foot?: Player["foot"];
  trait?: QuickFilterTrait;
};

export const quickFilters: Record<QuickFilterId, { label: string; filters: ExplorerFilters }> = {
  reserva: {
    label: "Reserva",
    filters: { category: "Reserva" },
  },
  quinta: {
    label: "Quinta",
    filters: { category: "Quinta" },
  },
  zurdos: {
    label: "Zurdos",
    filters: { foot: "Izquierdo" },
  },
  "centrales-con-salida": {
    label: "Centrales con salida",
    filters: { trait: "centrales-con-salida" },
  },
  "extremos-veloces": {
    label: "Extremos veloces",
    filters: { trait: "extremos-veloces" },
  },
  goleadores: {
    label: "Goleadores",
    filters: { trait: "goleadores" },
  },
  "arqueros-modernos": {
    label: "Arqueros modernos",
    filters: { trait: "arqueros-modernos" },
  },
};

export const defaultExplorerFilters: Required<
  Pick<ExplorerFilters, "position" | "category" | "club" | "ageMin" | "ageMax" | "minHeight" | "minGoals" | "minAssists">
> & {
  q: string;
  foot: "Todos" | Player["foot"];
  trait?: QuickFilterTrait;
} = {
  q: "",
  position: "Todos",
  category: "Todas",
  club: "Todos",
  ageMin: 15,
  ageMax: 21,
  minHeight: 160,
  minGoals: 0,
  minAssists: 0,
  foot: "Todos",
};

function matchesTrait(player: Player, trait: QuickFilterTrait): boolean {
  switch (trait) {
    case "centrales-con-salida":
      return (
        player.position === "DFC" &&
        player.strengths.some((s) => /salida|primer pase|distribución/i.test(s))
      );
    case "extremos-veloces":
      return (
        ["EXT", "LI", "LD"].includes(player.position) &&
        player.strengths.some((s) => /velocidad|desborde|regate/i.test(s))
      );
    case "goleadores":
      return player.goals >= 3;
    case "arqueros-modernos":
      return player.position === "GK";
    default:
      return true;
  }
}

export function filterPlayers(filters: typeof defaultExplorerFilters): Player[] {
  return players.filter((p) => {
    if (filters.q && !p.name.toLowerCase().includes(filters.q.toLowerCase())) return false;
    if (filters.position !== "Todos" && p.position !== filters.position) return false;
    if (filters.category !== "Todas" && p.category !== filters.category) return false;
    if (filters.club !== "Todos" && !clubsMatch(p.club, filters.club)) return false;
    if (p.age < filters.ageMin || p.age > filters.ageMax) return false;
    if (p.height < filters.minHeight) return false;
    if (p.goals < filters.minGoals) return false;
    if (p.assists < filters.minAssists) return false;
    if (filters.foot !== "Todos" && p.foot !== filters.foot) return false;
    if (filters.trait && !matchesTrait(p, filters.trait)) return false;
    return true;
  });
}

export function resolveExplorerFilters(
  search: { preset?: QuickFilterId } & Partial<ExplorerFilters>,
): typeof defaultExplorerFilters {
  const preset = search.preset ? quickFilters[search.preset]?.filters : undefined;

  return {
    q: search.q ?? preset?.q ?? defaultExplorerFilters.q,
    position: search.position ?? preset?.position ?? defaultExplorerFilters.position,
    category: search.category ?? preset?.category ?? defaultExplorerFilters.category,
    club: search.club ?? preset?.club ?? defaultExplorerFilters.club,
    ageMin: search.ageMin ?? preset?.ageMin ?? defaultExplorerFilters.ageMin,
    ageMax: search.ageMax ?? preset?.ageMax ?? defaultExplorerFilters.ageMax,
    minHeight: search.minHeight ?? preset?.minHeight ?? defaultExplorerFilters.minHeight,
    minGoals: search.minGoals ?? preset?.minGoals ?? defaultExplorerFilters.minGoals,
    minAssists: search.minAssists ?? preset?.minAssists ?? defaultExplorerFilters.minAssists,
    foot: search.foot ?? preset?.foot ?? defaultExplorerFilters.foot,
    trait: search.trait ?? preset?.trait,
  };
}

export function isQuickFilterId(value: string): value is QuickFilterId {
  return quickFilterIds.includes(value as QuickFilterId);
}

export function isValidPosition(value: string): boolean {
  return positions.includes(value);
}

export function isValidCategory(value: string): boolean {
  return categories.includes(value);
}
