import { players } from "@/data/players";

export type PlatformStat = {
  value: number;
  label: string;
};

function countUniqueVideos(): number {
  const urls = new Set<string>();

  for (const player of players) {
    for (const item of [...player.clips, ...player.videos]) {
      if (item.url) urls.add(item.url);
    }
  }

  return urls.size;
}

function countUniqueClubs(): number {
  return new Set(players.map((p) => p.club)).size;
}

export function getPlatformStats(): PlatformStat[] {
  return [
    { value: players.length, label: "Prospectos rastreados" },
    { value: countUniqueClubs(), label: "Clubes cubiertos" },
    { value: countUniqueVideos(), label: "Videos analizados" },
  ];
}

export function formatStatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(value);
}
