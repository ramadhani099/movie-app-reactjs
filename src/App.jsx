import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { initialUsers } from "./data/movies";
import useLocalStorage from "./hooks/useLocalStorage";

// Pemeriksa bentuk data dari localStorage (data rusak/lama diabaikan)
const isValidUsers = (v) =>
  Array.isArray(v) && v.every((u) => u && typeof u.username === "string" && typeof u.password === "string");
const isValidSession = (v) => v === null || (typeof v === "string" && v.length > 0);

// PARENT untuk autentikasi: menentukan halaman mana yang tampil
export default function App() {
  // Akun terdaftar & sesi login disimpan di localStorage agar tidak hilang saat refresh
  const [users, setUsers] = useLocalStorage("chill_users", initialUsers, isValidUsers);
  const [currentUser, setCurrentUser] = useLocalStorage("chill_session", null, isValidSession); // null = belum login
  const [page, setPage] = useState("login");            // "login" | "register"
  const [notice, setNotice] = useState("");

  // Mengembalikan pesan error (string) jika gagal, atau null jika berhasil
  const handleLogin = (username, password) => {
    if (!username || !password) return "Username dan kata sandi wajib diisi.";
    const found = users.find((u) => u.username === username && u.password === password);
    if (!found) return "Username atau kata sandi salah.";
    setNotice("");
    setCurrentUser(found.username);
    return null;
  };

  const handleRegister = (username, password) => {
    if (!username) return "Username wajib diisi.";
    if (password.length < 6) return "Kata sandi minimal 6 karakter.";
    if (users.some((u) => u.username === username)) return "Username sudah dipakai.";
    setUsers((prev) => [...prev, { username, password }]);
    setNotice("Akun berhasil dibuat. Silakan masuk.");
    setPage("login");
    return null;
  };

  const handleGoogle = () => setCurrentUser("google_user"); // simulasi
  const handleLogout = () => { setCurrentUser(null); setPage("login"); };

  if (currentUser) {
    return <HomePage username={currentUser} onLogout={handleLogout} />;
  }

  if (page === "register") {
    return <RegisterPage onRegister={handleRegister} onGoogle={handleGoogle} goLogin={() => setPage("login")} />;
  }

  return (
    <LoginPage
      onLogin={handleLogin}
      onGoogle={handleGoogle}
      goRegister={() => { setNotice(""); setPage("register"); }}
      notice={notice}
    />
  );
}
