import { useState } from "react";
import { btnOutline } from "../../theme";
import assetUrl from "../../utils/assetUrl";

// Logo diambil dari /public/google-logo.svg (file resmi dari Google).
// Selama file belum ada, tombol menampilkan huruf "G" sebagai pengganti.
export default function GoogleButton({ label, onClick }) {
  const [noLogo, setNoLogo] = useState(false);

  return (
    <>
      <div className="my-4 text-center text-sm text-[#C1C2C4]">Atau</div>
      <button type="button" onClick={onClick} className={btnOutline}>
        {noLogo ? (
          <span className="font-black text-[#4285F4]">G</span>
        ) : (
          <img src={assetUrl("/google-logo.svg")} alt="" width="20" height="20" onError={() => setNoLogo(true)} />
        )}
        {label}
      </button>
    </>
  );
}
