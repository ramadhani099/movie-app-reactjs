export const inputClass =
  "h-[52px] w-full rounded-[24px] border border-white/30 bg-transparent px-5 py-[14px] text-sm text-white placeholder-[#C1C2C4]/70 focus:border-[#3254FF] focus:outline-none focus:ring-1 focus:ring-[#3254FF]";

export default function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-[6px] block text-base font-bold leading-5 text-white">{label}</label>
      {children}
    </div>
  );
}
