import Poster from "./Poster";
import { img } from "../data/movies";
import { btnIcon } from "../theme";

export default function MovieCard({ movie, variant, onEdit, onDelete }) {
  const landscape = variant === "landscape";
  const size = landscape
    ? "w-[240px] md:w-[302px] aspect-video"
    : "w-[150px] md:w-[237px] aspect-[2/3]";

  return (
    <article
      className={`group relative shrink-0 snap-start rounded-xl transition-transform duration-200 hover:z-20 hover:scale-110 focus-within:z-20 focus-within:scale-110 ${size}`}
    >
      <div className="h-full w-full overflow-hidden rounded-xl bg-[#22282A]">
        <Poster src={landscape ? movie.banner || img(`bg-${movie.title}`, 600, 340) : movie.poster} title={movie.title} className="h-full w-full" />

        {/* Badge seperti di desain: biru kiri atas, merah kanan atas */}
        {movie.year >= 2026 && (
          <span className="absolute left-0 top-3 rounded-r bg-[#3254FF] px-2 py-1 text-[11px] font-bold">New</span>
        )}
        {movie.rating >= 8.5 && (
          <span className="absolute right-3 top-0 rounded-b bg-[#E50914] px-2 py-1.5 text-[11px] font-bold leading-none">Top 10</span>
        )}

        {landscape && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-10">
            <p className="truncate text-sm font-bold">{movie.title}</p>
            <div className="mt-1.5 h-1 rounded bg-white/25">
              <div className="h-1 rounded bg-[#3254FF]" style={{ width: `${movie.progress}%` }} />
            </div>
          </div>
        )}

        {/* Panel hover: tombol bulat Play / Edit / Hapus + info singkat */}
        <div className="absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-t from-black via-black/90 to-transparent p-3 pt-14 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button aria-label={`Putar ${movie.title}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm text-black">▶</button>
              <button onClick={() => onEdit(movie)} aria-label={`Edit ${movie.title}`} title="Edit" className={btnIcon}>✎</button>
            </div>
            <button onClick={() => onDelete(movie.id)} aria-label={`Hapus ${movie.title}`} title="Hapus" className={btnIcon}>🗑</button>
          </div>
          <div>
            <p className="truncate text-sm font-bold">{movie.title}</p>
            <p className="text-xs text-[#C1C2C4]">{movie.genre} · {movie.year} · ★ {movie.rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
