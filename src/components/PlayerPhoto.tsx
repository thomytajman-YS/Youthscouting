import { cn } from "@/lib/utils";

type PlayerPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/** Foto de jugador con recorte uniforme 3:4 — llena el contenedor sin bandas. */
export function PlayerPhoto({ src, alt, className, loading = "lazy" }: PlayerPhotoProps) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-900", className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />
    </div>
  );
}
