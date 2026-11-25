/**
 * ============================================================================
 * DATA PROJECT PORTOFOLIO (Reffi Fauzi)
 * ============================================================================
 * CARA MENAMBAH PROJECT BARU:
 * Cukup copy salah satu objek di bawah, lalu paste di dalam array `projectsData`.
 * 
 * Struktur Objek Project:
 * {
 *   id: "unik-id",
 *   category: "WEB APPLICATION" / "MOBILE APP" / "UI/UX DESIGN",
 *   title: "Nama Project",
 *   description: "Deskripsi singkat mengenai project...",
 *   features: ["Nama Fitur 1", "Nama Fitur 2", "Dst..."],
 *   technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
 *   githubUrl: "https://github.com/...", // Opsional
 *   demoUrl: "https://..." // Opsional
 * }
 */


const projectsData = [
  {
    id: "laundry-management-system",
    category: "WEB APPLICATION",
    title: "Laundry Management System",
    image: "images/laundry-dashboard.jpg",
    images: ["images/laundry-dashboard.jpg", "images/laundry-login.jpg"],
    description:
      "Aplikasi manajemen laundry berbasis web untuk mengelola pelanggan, layanan, transaksi, pembayaran, status cucian, dan laporan operasional.",
    features: [
      "Login Multi-User",
      "Dashboard",
      "Manajemen Pelanggan",
      "Manajemen Layanan",
      "Transaksi dan Pembayaran",
      "Pemantauan Status Cucian",
      "Laporan Operasional"
    ],
    contribution: [
      "Mengembangkan backend menggunakan Laravel",
      "Merancang database MySQL untuk transaksi dan pelanggan",
      "Merancang antarmuka kasir dan admin menggunakan Bootstrap",
      "Melakukan testing dan debugging alur operasional"
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    githubUrl: "https://github.com/Reffifauzi",
    demoUrl: ""
  },
  {
    id: "project-kedua",
    category: "WEB & MOBILE APPLICATION",
    title: "Library Management System",
    image: "images/perpustakaan-dashboard.png",
    images: ["images/perpustakaan-dashboard.png", "images/perpustakaan-katalog.png", "images/library-api-preview.png"],
    description:
      "Aplikasi perpustakaan dengan backend Laravel dan frontend Ionic. Berfokus pada pengembangan backend, REST API, pengelolaan database, serta logika peminjaman dan pengembalian buku.",
    features: [
      "Manajemen Data Buku",
      "Manajemen Data Anggota",
      "Peminjaman dan Pengembalian",
      "Pengelolaan Transaksi",
      "Integrasi REST API"
    ],
    contribution: [
      "Mengembangkan backend menggunakan Laravel",
      "Membangun REST API untuk integrasi dengan Ionic",
      "Merancang dan mengelola database MySQL",
      "Mengembangkan fitur CRUD dan logika transaksi buku"
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Ionic"
    ],
    githubUrl: "https://github.com/Reffifauzi/laravel_perpustakaan_kelompok4if22c",
    demoUrl: ""
  },
  {
    id: "project-ketiga",
    category: "WEB APPLICATION",
    title: "CareDesk - Customer Service System",
    image: "images/caredesk-dashboard.png",
    images: ["images/caredesk-dashboard.png", "images/caredesk-login.jpg"],
    description:
      "Aplikasi portal customer care & tiket bantuan CareDesk berbasis PHP Native dan MySQL untuk mengelola antrean keluhan pelanggan, status penanganan tiket, data produk, dan hak akses staf.",
    features: [
      "Manajemen Pengguna dan Admin",
      "Manajemen Data Pelanggan",
      "Manajemen Data Produk",
      "Pengelolaan Permintaan Layanan"
    ],
    contribution: [
      "Merancang struktur database sesuai kebutuhan sistem",
      "Membuat tabel dan relasi antartabel",
      "Menentukan primary key dan foreign key",
      "Menyesuaikan struktur database dengan kebutuhan aplikasi"
    ],
    technologies: [
      "PHP Native",
      "MySQL"
    ],
    githubUrl: "https://github.com/Reffifauzi/Project-CustomerService",
    demoUrl: ""
  },
  {
    id: "project-keempat",
    category: "WEB APPLICATION",
    title: "AgniFarm",
    image: "images/agnifarm-dashboard.png",
    images: ["images/agnifarm-dashboard.png", "images/agnifarm-login.jpg"],
    description:
      "Aplikasi web sistem manajemen dan kasir toko hidroponik Agni Farm berbasis CodeIgniter untuk mengelola inventaris stok barang, transaksi penjualan, kategori produk, tagihan mitra, dan laporan keuangan.",
    features: [
      "Pengelolaan Data Barang",
      "Manajemen Kategori",
      "Pengelolaan Stok",
      "Transaksi Penjualan",
      "Laporan",
      "Dashboard Informasi"
    ],
    contribution: [
      "Membantu mengembangkan fitur yang sudah tersedia",
      "Memperbarui dan menyempurnakan fungsi aplikasi",
      "Menyesuaikan tampilan dan fungsi berdasarkan kebutuhan",
      "Memperbaiki bagian sistem yang perlu ditingkatkan"
    ],
    technologies: [
      "CodeIgniter",
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript"
    ],
    githubUrl: "https://github.com/Reffifauzi/Project-AgniFarm",
    demoUrl: ""
  },
  {
    id: "project-kelima",
    category: "WEB APPLICATION",
    title: "Website Desa Bantarjaya",
    image: "images/bantarjaya-web.png",
    images: ["images/bantarjaya-web.png", "images/bantarjaya-sosialisasi.jpg"],
    description:
      "Website informasi desa berbasis Laravel untuk menyajikan profil, berita, informasi wilayah, data kependudukan, UMKM, dan layanan desa melalui halaman publik dan dashboard admin.",
    features: [
      "Dashboard Admin",
      "Manajemen Profil dan Perangkat Desa",
      "Informasi Wilayah dan Peta Desa",
      "Manajemen Berita dan Kategori",
      "Pengelolaan Data Kependudukan",
      "Informasi UMKM Desa",
      "Manajemen Layanan dan Pengumuman"
    ],
    contribution: [
      "Merancang struktur sistem dan database",
      "Mengembangkan backend menggunakan Laravel",
      "Membangun fitur CRUD untuk data desa",
      "Mengembangkan dashboard admin",
      "Mengintegrasikan fitur informasi dan layanan desa"
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Bootstrap",
      "JavaScript"
    ],
    githubUrl: "",
    demoUrl: ""
  },
  {
    id: "project-keenam",
    category: "MACHINE LEARNING",
    title: "Sistem Prediksi Harga Rumah",
    image: "images/prediksi-rumah-landing.jpg",
    images: ["images/prediksi-rumah-landing.jpg", "images/prediksi-rumah-form.jpg"],
    description:
      "Aplikasi web berbasis Machine Learning (XGBoost) untuk memprediksi harga rumah di wilayah Kabupaten Karawang. Model terlatih diintegrasikan dengan antarmuka web backend Flask.",
    features: [
      "Landing Page Informasi Model",
      "Form Input Parameter Properti",
      "Prediksi Estimasi Harga Rumah",
      "Data Preprocessing & Encoding",
      "Pemilihan Lokasi Kecamatan Karawang",
      "Tampilan Hasil Prediksi Interaktif"
    ],
    contribution: [
      "Melakukan data cleaning dan preprocessing dataset properti",
      "Melatih dan mengoptimasi model Machine Learning (XGBoost / Scikit-learn)",
      "Membangun antarmuka web modern dengan form input responsif",
      "Menghubungkan inferensi model Machine Learning ke backend Flask"
    ],
    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "XGBoost",
      "Machine Learning",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    githubUrl: "",
    demoUrl: ""
  }
];
