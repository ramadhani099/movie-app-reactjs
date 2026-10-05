import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import PasswordInput from "../components/auth/PasswordInput";
import GoogleButton from "../components/auth/GoogleButton";
import Field, { inputClass } from "../components/Field";
import { btnGray } from "../theme";

export default function LoginPage({ onLogin, onGoogle, goRegister, notice }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError(onLogin(username.trim(), password) ?? "");
  };

  return (
    <AuthLayout variant="login" title="Masuk" subtitle="Selamat datang kembali!">
      <form onSubmit={submit} className="mt-7 space-y-7">
        {notice && <p className="rounded-lg bg-green-900/40 px-3 py-2 text-xs text-green-300">{notice}</p>}

        <Field label="Username" htmlFor="l-user">
          <input id="l-user" value={username} onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username" className={inputClass} />
        </Field>

        <Field label="Kata Sandi" htmlFor="l-pass">
          <PasswordInput id="l-pass" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi" />
        </Field>

        <div className="flex items-center justify-between text-xs text-[#C1C2C4]">
          <span>
            Belum punya akun?{" "}
            <button type="button" onClick={goRegister} className="font-bold text-white hover:underline">Daftar</button>
          </span>
          <button type="button" className="hover:text-white">Lupa kata sandi?</button>
        </div>

        {error && <p className="text-sm text-red-400" role="alert">{error}</p>}

        <button type="submit" className={btnGray}>Masuk</button>
      </form>

      <GoogleButton label="Masuk dengan Google" onClick={onGoogle} />
      <p className="mt-5 text-center text-xs text-[#C1C2C4]/70">Akun demo: admin / 123456</p>
    </AuthLayout>
  );
}
