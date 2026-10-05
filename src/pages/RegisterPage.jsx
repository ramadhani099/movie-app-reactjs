import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import PasswordInput from "../components/auth/PasswordInput";
import GoogleButton from "../components/auth/GoogleButton";
import Field, { inputClass } from "../components/Field";
import { btnGray } from "../theme";

export default function RegisterPage({ onRegister, onGoogle, goLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (password !== confirm) return setError("Konfirmasi kata sandi tidak sama.");
    setError(onRegister(username.trim(), password) ?? "");
  };

  return (
    <AuthLayout variant="register" title="Daftar" subtitle="Selamat datang!">
      <form onSubmit={submit} className="mt-7 space-y-7">
        <Field label="Username" htmlFor="r-user">
          <input id="r-user" value={username} onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username" className={inputClass} />
        </Field>

        <Field label="Kata Sandi" htmlFor="r-pass">
          <PasswordInput id="r-pass" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimal 6 karakter" />
        </Field>

        <Field label="Konfirmasi Kata Sandi" htmlFor="r-confirm">
          <PasswordInput id="r-confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)}
            placeholder="Ulangi kata sandi" />
        </Field>

        <p className="text-xs text-[#C1C2C4]">
          Sudah punya akun?{" "}
          <button type="button" onClick={goLogin} className="font-bold text-white hover:underline">Masuk</button>
        </p>

        {error && <p className="text-sm text-red-400" role="alert">{error}</p>}

        <button type="submit" className={btnGray}>Daftar</button>
      </form>

      <GoogleButton label="Daftar dengan Google" onClick={onGoogle} />
    </AuthLayout>
  );
}
