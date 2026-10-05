import { Component } from "react";

// Menangkap error saat render supaya layar tidak kosong total,
// dan memberi tombol untuk menghapus data tersimpan lalu memuat ulang.
export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  reset = () => {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith("chill_"))
        .forEach((k) => localStorage.removeItem(k));
    } catch {
      /* abaikan */
    }
    window.location.reload();
  };

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="flex min-h-screen items-center justify-center bg-[#181A1C] p-6 text-white">
        <div className="w-full max-w-lg rounded-xl border border-white/15 bg-[#22282A] p-6">
          <h1 className="text-xl font-bold">Terjadi kesalahan</h1>
          <p className="mt-2 text-sm text-[#C1C2C4]">
            Halaman gagal ditampilkan. Coba hapus data tersimpan di browser lalu muat ulang.
          </p>
          <pre className="mt-4 max-h-40 overflow-auto rounded bg-black/40 p-3 text-xs text-red-300">
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <div className="mt-5 flex gap-3">
            <button onClick={this.reset}
              className="h-[45px] rounded-[48px] bg-[#3254FF] px-6 text-base font-bold hover:bg-[#2443d6]">
              Hapus data tersimpan &amp; muat ulang
            </button>
            <button onClick={() => window.location.reload()}
              className="h-[45px] rounded-[48px] border border-white/30 px-6 text-base font-bold hover:bg-white/10">
              Muat ulang
            </button>
          </div>
        </div>
      </div>
    );
  }
}
