

const focus = "focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

// Hero: "Mulai" 93x45, radius 48
export const btnPrimary =
  `inline-flex h-[45px] w-[93px] items-center justify-center rounded-[48px] bg-[#3254FF] text-base font-bold text-white transition hover:bg-[#2443d6] ${focus}`;

// Navbar: tombol tambah film (fitur CRUD)
export const btnPrimarySm =
  `inline-flex h-[45px] items-center justify-center rounded-[48px] bg-[#3254FF] px-5 text-base font-bold text-white transition hover:bg-[#2443d6] ${focus}`;

// Hero: "Selengkapnya" 185x45, radius 48
export const btnGlass =
  "inline-flex h-[45px] w-[185px] items-center justify-center gap-2 rounded-[48px] border border-white/30 bg-[#22282A]/70 text-base font-bold text-white backdrop-blur transition hover:bg-[#22282A]";

// Hero: badge 18+ 52x45, radius 24, border 1, padding 10
export const badge18 =
  "inline-flex h-[45px] w-[52px] items-center justify-center rounded-[24px] border border-white/30 p-[10px] text-sm font-bold text-white";

// Hero: tombol suara 44x44, radius 24, border 1, padding 10
export const btnRound44 =
  "flex h-[44px] w-[44px] items-center justify-center rounded-[24px] border border-white/60 bg-black/30 p-[10px] text-white transition hover:bg-black/60";

// Form Masuk/Daftar (ukuran asli = nilai Figma / 0.5775): tinggi tombol 47, radius 24, border 1
export const btnGray =
  `flex h-[47px] w-full items-center justify-center rounded-[24px] bg-[#3D4142] text-base font-bold text-white transition hover:bg-[#4b5052] ${focus}`;
export const btnOutline =
  `flex h-[47px] w-full items-center justify-center gap-3 rounded-[24px] border border-white/30 text-base font-bold text-white transition hover:bg-white/10 ${focus}`;

// Tombol bulat kecil di kartu (edit, hapus)
export const btnIcon =
  "flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-sm text-white transition hover:border-white hover:bg-white/20";

// Tombol teks (Batal)
export const btnText = "rounded-full px-5 py-2.5 text-base text-[#C1C2C4] transition hover:bg-white/10";
