import { useState } from "react";
import Field, { inputClass } from "./Field";
import { btnPrimarySm, btnText } from "../theme";
import { GENRES } from "../data/movies";

export default function MovieFormModal({ movie, onSave, onClose }) {
  const isEdit = movie !== null;
  const [form, setForm] = useState({
    title: movie?.title ?? "",
    genre: movie?.genre ?? GENRES[0],
    rating: movie?.rating ?? "",
    year: movie?.year ?? new Date().getFullYear(),
    poster: movie?.poster ?? "",
    banner: movie?.banner ?? "",
    description: movie?.description ?? "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = Number(form.rating);
    const year = Number(form.year);
    if (!form.title.trim()) return setError("Judul film wajib diisi.");
    if (form.rating === "" || Number.isNaN(rating) || rating < 0 || rating > 10)
      return setError("Rating harus berupa angka antara 0 dan 10.");
    if (!Number.isInteger(year) || year < 1900 || year > 2100) return setError("Tahun rilis tidak valid.");
    onSave({ title: form.title.trim(), genre: form.genre, rating, year, poster: form.poster.trim(), banner: form.banner.trim(), description: form.description.trim() });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4" onClick={onClose}>
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md space-y-4 rounded-xl bg-[#22282A] p-6 ring-1 ring-white/15">
        <h2 className="text-xl font-bold">{isEdit ? "Edit film" : "Tambah film"}</h2>

        <Field label="Judul" htmlFor="title">
          <input id="title" name="title" value={form.title} onChange={handleChange} placeholder="Contoh: Neon Horizon" className={inputClass} />
        </Field>

        <div className="grid grid-cols-3 gap-3">
          <Field label="Genre" htmlFor="genre">
            <select id="genre" name="genre" value={form.genre} onChange={handleChange} className={`${inputClass} bg-[#22282A]`}>
              {GENRES.map((g) => <option key={g}>{g}</option>)}
            </select>
          </Field>
          <Field label="Rating" htmlFor="rating">
            <input id="rating" name="rating" type="number" step="0.1" min="0" max="10" value={form.rating} onChange={handleChange} placeholder="8.5" className={inputClass} />
          </Field>
          <Field label="Tahun" htmlFor="year">
            <input id="year" name="year" type="number" value={form.year} onChange={handleChange} className={inputClass} />
          </Field>
        </div>

        <Field label="URL poster" htmlFor="poster">
          <input id="poster" name="poster" value={form.poster} onChange={handleChange} placeholder="https://..." className={inputClass} />
        </Field>

        <Field label="URL banner (opsional, untuk hero dan kartu Melanjutkan Tonton)" htmlFor="banner">
          <input id="banner" name="banner" value={form.banner} onChange={handleChange} placeholder="/banners/nama-film.jpg atau https://..." className={inputClass} />
        </Field>

        <Field label="Sinopsis" htmlFor="description">
          <textarea id="description" name="description" rows="3" value={form.description} onChange={handleChange} className={`${inputClass} h-auto rounded-[16px]`} />
        </Field>

        {error && <p className="text-sm text-red-400" role="alert">{error}</p>}

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className={btnText}>Batal</button>
          <button type="submit" className={btnPrimarySm}>
            {isEdit ? "Simpan perubahan" : "Tambah film"}
          </button>
        </div>
      </form>
    </div>
  );
}
