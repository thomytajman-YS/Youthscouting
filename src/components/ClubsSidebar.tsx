import { useMemo, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { players } from "@/data/players";
import { formatClubDisplay, normalizeClubName } from "@/lib/clubs";

export function ClubsSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const grouped = useMemo(() => {
    const map = new Map<string, typeof players>();
    for (const p of players) {
      const key = normalizeClubName(p.club);
      const arr = map.get(key) ?? [];
      arr.push(p);
      map.set(key, arr);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, []);

  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(grouped.map(([c]) => [c, true])),
  );

  return (
    <aside className="h-fit rounded-2xl border border-white/5 bg-surface-800 p-4 lg:sticky lg:top-20">
      <div className="mb-3 flex items-center justify-between px-2">
        <h3 className="font-display text-xs font-black uppercase tracking-widest text-white">
          Clubes
        </h3>
        <span className="text-[10px] text-slate-500">{players.length} jugadores</span>
      </div>
      <nav className="space-y-1">
        {grouped.map(([club, list]) => {
          const isOpen = open[club];
          return (
            <div key={club}>
              <button
                onClick={() => setOpen((o) => ({ ...o, [club]: !o[club] }))}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-surface-700"
              >
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-brand" />
                  <span title={club}>{formatClubDisplay(club)}</span>
                </span>
                <span className="text-[10px] text-slate-500">
                  {list.length} {isOpen ? "▾" : "▸"}
                </span>
              </button>
              {isOpen && (
                <ul className="mb-2 ml-3 mt-1 space-y-px border-l border-white/5 pl-3">
                  {list.map((p) => {
                    const active = pathname === `/jugador/${p.id}`;
                    return (
                      <li key={p.id}>
                        <Link
                          to="/jugador/$id"
                          params={{ id: p.id }}
                          className={`flex items-center justify-between rounded-md px-2 py-1.5 text-xs transition-colors ${
                            active
                              ? "bg-brand/10 text-brand"
                              : "text-slate-400 hover:bg-surface-700 hover:text-white"
                          }`}
                        >
                          <span className="truncate">{p.name}</span>
                          <span className="ml-2 shrink-0 text-[10px] text-slate-500">
                            {p.position}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
