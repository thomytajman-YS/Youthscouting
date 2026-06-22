import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { PlayerCard } from "@/components/PlayerCard";
import { ClubsSidebar } from "@/components/ClubsSidebar";
import { players, positions, categories, clubs } from "@/data/players";
import {
  defaultExplorerFilters,
  filterPlayers,
  parseExplorerSearch,
  quickFilters,
  resolveExplorerFilters,
} from "@/lib/explorer-filters";
import { getClubFullName } from "@/lib/clubs";

export const Route = createFileRoute("/explorador")({
  validateSearch: parseExplorerSearch,
  head: () => ({
    meta: [
      { title: "Explorador de jugadores — YouthScouting" },
      {
        name: "description",
        content: "Filtrá juveniles argentinos por posición, edad, club, altura, goles y asistencias.",
      },
    ],
  }),
  component: ExplorerPage,
});

function ExplorerPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const resolved = useMemo(() => resolveExplorerFilters(search), [search]);

  const [q, setQ] = useState(resolved.q);
  const [position, setPosition] = useState(resolved.position);
  const [category, setCategory] = useState(resolved.category);
  const [club, setClub] = useState(resolved.club);
  const [ageRange, setAgeRange] = useState<[number, number]>([resolved.ageMin, resolved.ageMax]);
  const [minHeight, setMinHeight] = useState(resolved.minHeight);
  const [minGoals, setMinGoals] = useState(resolved.minGoals);
  const [minAssists, setMinAssists] = useState(resolved.minAssists);
  const [foot, setFoot] = useState(resolved.foot);
  const [trait, setTrait] = useState(resolved.trait);

  useEffect(() => {
    setQ(resolved.q);
    setPosition(resolved.position);
    setCategory(resolved.category);
    setClub(resolved.club);
    setAgeRange([resolved.ageMin, resolved.ageMax]);
    setMinHeight(resolved.minHeight);
    setMinGoals(resolved.minGoals);
    setMinAssists(resolved.minAssists);
    setFoot(resolved.foot);
    setTrait(resolved.trait);
  }, [resolved]);

  const activePreset = search.preset ? quickFilters[search.preset] : undefined;

  const results = useMemo(() => {
    return filterPlayers({
      q,
      position,
      category,
      club,
      ageMin: ageRange[0],
      ageMax: ageRange[1],
      minHeight,
      minGoals,
      minAssists,
      foot,
      trait,
    });
  }, [q, position, category, club, ageRange, minHeight, minGoals, minAssists, foot, trait]);

  function clearFilters() {
    setQ(defaultExplorerFilters.q);
    setPosition(defaultExplorerFilters.position);
    setCategory(defaultExplorerFilters.category);
    setClub(defaultExplorerFilters.club);
    setAgeRange([defaultExplorerFilters.ageMin, defaultExplorerFilters.ageMax]);
    setMinHeight(defaultExplorerFilters.minHeight);
    setMinGoals(defaultExplorerFilters.minGoals);
    setMinAssists(defaultExplorerFilters.minAssists);
    setFoot(defaultExplorerFilters.foot);
    setTrait(undefined);
    navigate({ to: "/explorador", search: {} });
  }

  return (
    <div className="min-h-screen bg-surface-900 text-slate-200">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 py-10">
        <header className="mb-8">
          <h1 className="font-display text-4xl font-black uppercase italic text-white">
            Explorador
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            {results.length} prospectos encontrados de {players.length} totales
          </p>
          {activePreset && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                Filtro rápido
              </span>
              <span className="text-xs text-white">{activePreset.label}</span>
              <button
                type="button"
                onClick={clearFilters}
                className="ml-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white"
              >
                ×
              </button>
            </div>
          )}
        </header>

        <div className="grid gap-6 lg:grid-cols-[240px_260px_1fr]">
          {/* Barra lateral — Clubes */}
          <ClubsSidebar />

          {/* Filtros */}
          <aside className="h-fit space-y-6 rounded-2xl border border-white/5 bg-surface-800 p-6 lg:sticky lg:top-20">
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Buscar
              </label>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Nombre..."
                className="w-full rounded-lg border border-white/10 bg-surface-900 px-3 py-2 text-sm text-white outline-none focus:border-brand/40"
              />
            </div>

            <FilterSelect label="Posición" value={position} onChange={setPosition} options={positions} />
            <FilterSelect label="Categoría" value={category} onChange={setCategory} options={categories} />
            <FilterSelect
              label="Club"
              value={club}
              onChange={setClub}
              options={clubs}
              formatOption={(o) => (o === "Todos" ? o : getClubFullName(o))}
            />

            <div>
              <label className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Edad: {ageRange[0]} – {ageRange[1]}
              </label>
              <div className="space-y-3">
                <div>
                  <span className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-slate-600">
                    Mínimo
                  </span>
                  <input
                    type="range"
                    min={14}
                    max={21}
                    value={ageRange[0]}
                    onChange={(e) =>
                      setAgeRange([Math.min(+e.target.value, ageRange[1]), ageRange[1]])
                    }
                    className="w-full accent-brand"
                  />
                </div>
                <div>
                  <span className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-slate-600">
                    Máximo
                  </span>
                  <input
                    type="range"
                    min={14}
                    max={21}
                    value={ageRange[1]}
                    onChange={(e) =>
                      setAgeRange([ageRange[0], Math.max(+e.target.value, ageRange[0])])
                    }
                    className="w-full accent-brand"
                  />
                </div>
              </div>
            </div>

            <RangeFilter
              label={`Altura mín: ${minHeight}cm`}
              min={160}
              max={200}
              value={minHeight}
              onChange={setMinHeight}
            />
            <RangeFilter
              label={`Goles mín: ${minGoals}`}
              min={0}
              max={20}
              value={minGoals}
              onChange={setMinGoals}
            />
            <RangeFilter
              label={`Asistencias mín: ${minAssists}`}
              min={0}
              max={15}
              value={minAssists}
              onChange={setMinAssists}
            />

            <button
              onClick={clearFilters}
              className="w-full rounded-lg border border-white/10 bg-surface-700 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-surface-700/70"
            >
              Limpiar filtros
            </button>
          </aside>

          {/* Resultados */}
          {results.length === 0 ? (
            <div className="grid place-items-center rounded-2xl border border-white/5 bg-surface-800 p-20 text-center">
              <p className="font-display text-xl text-slate-400">Sin resultados</p>
              <p className="mt-2 text-sm text-slate-500">Probá ajustar los filtros</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
              {results.map((p) => (
                <PlayerCard key={p.id} player={p} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  formatOption,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  formatOption?: (value: string) => string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-surface-900 px-3 py-2 text-sm text-white outline-none focus:border-brand/40"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {formatOption ? formatOption(o) : o}
          </option>
        ))}
      </select>
    </div>
  );
}

function RangeFilter({
  label,
  min,
  max,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full accent-brand"
      />
    </div>
  );
}
