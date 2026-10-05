import { useState } from "react";

export default function Poster({ src, title, className = "" }) {
  const [error, setError] = useState(false);
  if (!src || error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-blue-900 to-zinc-900 p-3 text-center text-sm font-bold text-zinc-300 ${className}`}>
        {title}
      </div>
    );
  }
  return <img src={src} alt={`Poster ${title}`} onError={() => setError(true)} className={`object-cover ${className}`} />;
}
