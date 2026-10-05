import { useState } from "react";
import Poster from "./Poster";
import { img } from "../data/movies";
import { btnPrimary, btnGlass, badge18, btnRound44 } from "../theme";

export default function Hero({ movie }) {
  const [expanded, setExpanded] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative h-[440px] md:h-[587px]">
      {movie && <Poster src={movie.banner || img(`bg-${movie.title}`, 1440, 640)} title={movie.title} className="absolute inset-0 h-full w-full" />}
      <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-[#181A1C]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#181A1C]/80 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-10 flex items-end justify-between px-4 md:bottom-14 md:px-20">
        {movie ? (
          <div className="max-w-[620px] space-y-4">
            <h2 className="text-[32px] font-bold leading-[1.1] text-white md:text-[48px]">{movie.title}</h2>
            <p className={`text-base text-white/90 ${expanded ? "" : "line-clamp-3"}`}>{movie.description}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button className={btnPrimary}>Mulai</button>
              <button onClick={() => setExpanded((v) => !v)} className={btnGlass}>
                <span aria-hidden="true">ⓘ</span> {expanded ? "Tutup" : "Selengkapnya"}
              </button>
              <span className={badge18}>18+</span>
            </div>
          </div>
        ) : (
          <p className="text-[#C1C2C4]">Belum ada film. Klik "Tambah film" untuk memulai.</p>
        )}

        <button onClick={() => setMuted((m) => !m)} aria-label={muted ? "Aktifkan suara" : "Matikan suara"}
          className={`${btnRound44} hidden md:flex`}>
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </section>
  );
}
