// Mengubah jalur gambar seperti "/posters/a.jpg" (dari folder public)
// agar tetap benar saat website dibuka di sub-alamat (GitHub Pages: /nama-repo/).
// URL internet (https://...) dibiarkan apa adanya.
export default function assetUrl(path) {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return path;
  const base = import.meta.env.BASE_URL || "/";
  return (base.endsWith("/") ? base : base + "/") + path.slice(1);
}
