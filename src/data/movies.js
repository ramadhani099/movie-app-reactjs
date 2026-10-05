export const GENRES = ["Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance", "Animation"];
export const img = (seed, w = 400, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const initialMovies = [
  { id: 1, title: "Duty After School", genre: "Action", rating: 8.9, year: 2025, progress: 60, poster: "/posters/duty-after-school-potrait.jpg", banner: "/banners/duty-after-school.jpg",
    description: "Sebuah benda tak dikenal mengancam dunia. Dalam keadaan darurat, sekelompok siswa dipaksa menjadi pasukan terakhir yang menjaga kota." },
  { id: 2, title: "A Man Called Otto", genre: "Drama", rating: 8.7, year: 2025, progress: 35,poster: "/posters/a-man-called-otto-potrait.jpg" ,banner: "/banners/a-man-called-otto.jpg",
    description: "menceritakan kisah seorang pria tua pemarah bernama Otto Anderson (diperankan oleh Tom Hanks) yang mencoba mengakhiri hidupnya setelah istrinya meninggal dunia." },
  { id: 3, title: "The Glory", genre: "Action", rating: 8.0, year: 2023, progress: 80, poster: "/posters/the-glory-potrait.jpg", banner:"/banners/the-glory.jpg",
    description: "Menceritakan tentang seorang wanita yang merencanakan balasa dendam  secara matang terhadap pelaku perundungan(bullying) masa lalunya." },
  { id: 4, title: "The Batman", genre: "Action", rating: 8.1, year: 2022, progress: 80, poster: "/posters/the-batman-potrait.jpg", banner: "/banners/the-batman.jpg",
    description: "film pahlawan super gelap arahan sutradara Matt Reeves yang menceritakan tahun kedua Bruce Wayne beraksi sebagai pembasmi kejahatan di Kota Gotham." },
  { id: 5, title: "Don`t Look Up", genre: "Comedy", rating: 6.9, year: 2021, progress: 20, poster: "/posters/dont-look-up-potrait.jpg", banner: "/banners/dont-look-up.jpg",
    description: "film komedi satir fiksi ilmiah yang mengisahkan dua astronom yang mencoba memperingatkan umat manusia tentang komet pembunuh planet yang menuju ke Bumi.." },
  { id: 6, title: "Avengers End Game", genre: "Action", rating: 8.4, year: 2019, progress: 0, poster: "/posters/avengers-end-game.jpg",
    description: "film yang mengisahkan perjuangan sisa anggota Avengers untuk membalikkan musnahnya separuh makhluk hidup akibat jentikan jari Thanos." },
  { id: 7, title: "Demmon Slayer : Infinity Castle", genre: "Animation", rating: 8.5, year: 2025, progress: 0, poster: "posters/demon-slayer.jpg",
    description: "film anime bergenre dark fantasy dan laga keluaran tahun 2025 yang disutradarai oleh Haruo Sotozaki dan diproduksi oleh studio Ufotable." },
  { id: 8, title: "Guardians", genre: "Action", rating: 7.8, year: 2017, progress: 0, poster: "/posters/guardians.jpg",
    description: "Berlatar belakang masa Perang Dingin, sebuah organisasi rahasia Uni Soviet bernama Patriot membentuk tim pahlawan super rahasia." },
  { id: 9, title: "Jurassic World", genre: "Action", rating: 8.0, year: 2015, progress: 0, poster: "/posters/jurassic-world.jpg" ,
    description: "Cerita terjadi 22 tahun setelah kejadian di film asli Jurassic Park di pulau Isla Nublar."},
  { id: 10, title: "Ghost In The Cell", genre: "Horror", rating: 8.8, year:2026, progress: 0, poster: "/posters/ghost-in-the-cell.jpg",
    description: "Sebuah penjara kejam bernama Lapas Labuhan Angsana. Tempat ini penuh dengan penindasan pejabat korup dan kekerasan antartahanan."},
  { id: 11, title: "The Tommorow War", genre: "Action", rating: 7.0, year: 2021, progress: 0, poster: "/posters/the-tomorrow-war.jpg",
    description: "Sekelompok pelintas waktu datang dari tahun 2051 untuk membawa pesan darurat bahwa umat manusia hampir punah. "}, 
  
];

// Akun demo (disimpan di state, hilang saat refresh)
export const initialUsers = [{ username: "admin", password: "123456" }];
