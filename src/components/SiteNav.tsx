import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/explorador", label: "Explorador" },
  { to: "/estadisticas", label: "Estadísticas" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-surface-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link to="/" className="font-display text-2xl font-black tracking-tighter text-white">
            Youth<span className="text-brand">Scouting</span>
          </Link>
          <div className="hidden gap-7 text-sm font-medium md:flex">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={
                    active
                      ? "text-white border-b-2 border-brand py-[22px] -mb-[2px]"
                      : "text-slate-400 hover:text-brand transition-colors"
                  }
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 rounded-lg border border-white/10 bg-surface-800 px-3 py-1.5">
            <div className="size-2 animate-pulse rounded-full bg-brand"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Live Scout</span>
          </div>
          <div className="grid size-10 place-items-center rounded-full border border-white/10 bg-surface-700 text-xs font-bold">
            JD
          </div>
        </div>
      </div>
    </nav>
  );
}
