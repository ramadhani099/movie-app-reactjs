import Logo from "./Logo";
import { GENRES } from "../data/movies";

const HELP = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

export default function Footer() {
  return (
    <footer className="border-t border-white/15 px-4 py-[60px] md:min-h-[284px] md:px-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-[#C1C2C4]">©{new Date().getFullYear()} Chill All Rights Reserved.</p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          <div>
            <p className="mb-3 text-base font-bold text-white">Genre</p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-[#C1C2C4] sm:grid-flow-col sm:grid-cols-none sm:grid-rows-4">
              {GENRES.map((g) => <li key={g}>{g}</li>)}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-base font-bold text-white">Bantuan</p>
            <ul className="space-y-2 text-sm text-[#C1C2C4]">
              {HELP.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
