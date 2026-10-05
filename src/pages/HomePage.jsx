import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import MovieFormModal from "../components/MovieFormModal";
import { initialMovies } from "../data/movies";

// PARENT untuk data film: semua state CRUD ada di sini, child menerima lewat props
export default function HomePage({ username, onLogout }) {
  const [movies, setMovies] = useState(initialMovies);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null); // null = mode tambah

  const openAdd = () => { setEditingMovie(null); setIsModalOpen(true); };
  const openEdit = (movie) => { setEditingMovie(movie); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setEditingMovie(null); };

  const handleSave = (data) => {
    if (editingMovie) {
      // UPDATE
      setMovies((prev) => prev.map((m) => (m.id === editingMovie.id ? { ...m, ...data } : m)));
    } else {
      // CREATE
      setMovies((prev) => [{ id: Date.now(), progress: 0, ...data }, ...prev]);
    }
    closeModal();
  };

  // DELETE
  const handleDelete = (id) => {
    if (window.confirm("Hapus film ini dari daftar?")) {
      setMovies((prev) => prev.filter((m) => m.id !== id));
    }
  };

  // READ: data turunan untuk tiap baris
  const byRating = [...movies].sort((a, b) => b.rating - a.rating);
  const byYear = [...movies].sort((a, b) => b.year - a.year);
  const continuing = movies.filter((m) => m.progress > 0);
  const rowProps = { onEdit: openEdit, onDelete: handleDelete };

  return (
    <div className="min-h-screen bg-[#181A1C] text-zinc-100">
      <Navbar username={username} onAdd={openAdd} onLogout={onLogout} />
      <Hero movie={byRating[0] ?? null} />

      <main>
        <MovieRow title="Melanjutkan Tonton Film" movies={continuing} variant="landscape" {...rowProps} />
        <MovieRow title="Top Rating Film dan Series Hari ini" movies={byRating} {...rowProps} />
        <MovieRow title="Film Trending" movies={[...movies].reverse()} {...rowProps} />
        <MovieRow title="Rilis Baru" movies={byYear} {...rowProps} />
      </main>

      <Footer />

      {isModalOpen && (
        <MovieFormModal
          key={editingMovie ? editingMovie.id : "new"}
          movie={editingMovie}
          onSave={handleSave}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
