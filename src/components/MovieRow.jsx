import { useRef } from "react";
import MovieCard from "./MovieCard";

// Section: padding 40px 80px, jarak judul -> kartu 32px, jarak antar kartu 24px (sesuai Figma)
export default function MovieRow({ title, movies, variant = "portrait", onEdit, onDelete }) {
  const scroller = useRef(null);
  if (movies.length === 0) return null;

  const scroll = (dir) =>
    scroller.current?.scrollBy({ left: dir * scroller.current.clientWidth * 0.8, behavior: "smooth" });

  const arrow =
    "absolute top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white opacity-0 transition hover:bg-black group-hover/row:opacity-100 md:flex";

  return (
    <section className="px-4 py-10 md:px-20">
      <h3 className="text-2xl font-bold leading-[27px] text-white">{title}</h3>
      <div className="group/row relative mt-8">
        <button onClick={() => scroll(-1)} aria-label="Geser kiri" className={`${arrow} -left-3`}>‹</button>
        {/* -m dan p seimbang: memberi ruang agar kartu yang membesar saat hover tidak terpotong */}
        <div
          ref={scroller}
          className="-mx-3 -my-4 flex snap-x scroll-px-3 gap-6 overflow-x-auto px-3 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} variant={variant} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
        <button onClick={() => scroll(1)} aria-label="Geser kanan" className={`${arrow} -right-3`}>›</button>
      </div>
    </section>
  );
}
