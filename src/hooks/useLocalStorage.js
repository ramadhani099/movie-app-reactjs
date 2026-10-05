import { useState, useEffect } from "react";

// Seperti useState, tapi nilainya disimpan di localStorage browser
// sehingga tetap ada setelah halaman di-refresh.
// isValid (opsional): fungsi pemeriksa bentuk data; data yang tidak valid diabaikan.
export default function useLocalStorage(key, initialValue, isValid = () => true) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return initialValue;
      const parsed = JSON.parse(raw);
      return isValid(parsed) ? parsed : initialValue;
    } catch {
      return initialValue; // localStorage tidak tersedia / data rusak
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* abaikan jika penyimpanan penuh atau diblokir */
    }
  }, [key, value]);

  return [value, setValue];
}
