export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 font-black tracking-wide text-white ${className}`}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="2.5" y="10" width="19" height="11" rx="1.5" />
        <path d="m3 5 16.5-3 .8 4.2L3.8 9.3z" />
      </svg>
      <span className="text-2xl">CHILL</span>
    </span>
  );
}
