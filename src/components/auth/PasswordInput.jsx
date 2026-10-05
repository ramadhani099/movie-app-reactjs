import { useState } from "react";
import { inputClass } from "../Field";

// Ikon mata (tampil) dan mata dicoret (tersembunyi), gaya garis
function EyeIcon({ hidden }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
      {hidden && <path d="M4 4l16 16" />}
    </svg>
  );
}

export default function PasswordInput({ id, value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${inputClass} pr-14`}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-[#C1C2C4] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {/* Saat sandi tersembunyi tampil ikon mata dicoret (sesuai Figma) */}
        <EyeIcon hidden={!show} />
      </button>
    </div>
  );
}
