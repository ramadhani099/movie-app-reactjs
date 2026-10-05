import { useState } from "react";
import Logo from "./Logo";
import { btnPrimarySm } from "../theme";

export default function Navbar({ username, onAdd, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#181A1C]">
      <div className="flex h-[94px] items-center justify-between px-4 py-[25px] md:px-20">
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
          <nav className="hidden gap-10 text-base text-white sm:flex">
            <a href="#" className="hover:text-[#C1C2C4]">Series</a>
            <a href="#" className="hover:text-[#C1C2C4]">Film</a>
            <a href="#" className="hover:text-[#C1C2C4]">Daftar Saya</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onAdd} className={btnPrimarySm}>+ Tambah film</button>

          <div className="relative">
            <button onClick={() => setOpen((o) => !o)} aria-label="Menu profil" aria-expanded={open}
              className="flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-base font-bold uppercase">{username[0]}</span>
              <span className="text-xs text-white">▾</span>
            </button>
            {open && (
              <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-lg border border-white/20 bg-[#22282A] text-sm shadow-xl">
                <p className="truncate border-b border-white/10 px-4 py-2 text-xs text-[#C1C2C4]">Masuk sebagai {username}</p>
                <button className="block w-full px-4 py-2.5 text-left hover:bg-white/10">Profil Saya</button>
                <button className="block w-full px-4 py-2.5 text-left hover:bg-white/10">Ubah Premium</button>
                <button onClick={onLogout} className="block w-full px-4 py-2.5 text-left hover:bg-white/10">Keluar</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
