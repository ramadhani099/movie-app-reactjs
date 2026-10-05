import Logo from "../Logo";

// Latar bioskop dibuat dengan CSS (layar, cahaya samping, deretan kursi).
// Untuk foto asli dari Figma: taruh gambar di /public lalu ganti dua <div> latar dengan <img>.
const THEMES = {
  login:    { seat: "#1b2a5c", glow: "rgba(50,84,255,.30)" },   // kursi gelap kebiruan
  register: { seat: "#7a1118", glow: "rgba(229,9,20,.28)" },    // kursi merah
};

export default function AuthLayout({ variant, title, subtitle, children }) {
  const c = THEMES[variant];

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 30% 20% at 50% 22%, rgba(200,200,210,.55), transparent 72%),
                       radial-gradient(ellipse at 0% 40%, ${c.glow}, transparent 45%),
                       radial-gradient(ellipse at 100% 40%, ${c.glow}, transparent 45%)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 35%, ${c.seat} 0 55%, transparent 60%)`,
          backgroundSize: "88px 60px",
          maskImage: "linear-gradient(to top, black 20%, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black 20%, transparent)",
        }}
      />

      <div className="relative w-full max-w-[529px] rounded-[14px] border border-white/15 bg-black/70 p-6 backdrop-blur-md sm:p-10">
        <div className="text-center">
          <Logo className="justify-center" />
          <h1 className="mt-5 text-2xl font-bold text-white">{title}</h1>
          <p className="mt-1 text-sm text-[#C1C2C4]">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
