/**
 * ============================================================================
 * DATA SERTIFIKAT & PENCAPAIAN (Reffi Fauzi)
 * ============================================================================
 * CARA MENAMBAH SERTIFIKAT BARU:
 * Cukup copy salah satu objek di bawah, lalu isi detailnya.
 * File gambar sertifikat dapat disimpan di folder `images/`.
 * 
 * Struktur Objek Sertifikat:
 * {
 *   id: "unik-id",
 *   title: "Nama Sertifikat / Pelatihan",
 *   issuer: "Lembaga Penerbit (contoh: Dicoding, Coursera, BNSP)",
 *   date: "Tahun / Bulan (contoh: 2024)",
 *   credentialUrl: "https://... (opsional, jika ada link verifikasi online)",
 *   file: "images/nama-sertifikat.pdf (BISA FORMAT .PDF ATAU .JPG / .PNG)",
 *   description: "Deskripsi singkat kompetensi / materi yang dicapai..."
 * }
 */

const certificatesData = [
  {
    id: "hki-desa-bantarjaya",
    title: "Surat Pencatatan Ciptaan (Hak Cipta / HKI)",
    issuer: "Kementerian Hukum RI - Direktorat Jenderal Kekayaan Intelektual (DJKI)",
    date: "Oktober 2025",
    credentialUrl: "",
    file: "images/hki-bantarjaya.pdf",
    image: "images/hki-bantarjaya.jpg",
    description: "Hak Cipta Resmi Karya Tulis Artikel: 'Pembuatan Website Profil Desa Bantarjaya Sebagai Media Informasi Terpadu Berbasis Web' (Nomor Pencatatan: 000989044) yang diakui dan dilindungi negara berdasarkan UU No. 28 Tahun 2014."
  },
  {
    id: "pkm-kemdiktisaintek-2025",
    title: "Program Kreativitas Mahasiswa (PKM) 2025",
    issuer: "Kemahasiswaan UBP Karawang & BELMAWA KEMDIKTISAINTEK RI",
    date: "Mei — Juni 2025",
    credentialUrl: "",
    file: "images/pkm-2025.pdf",
    image: "images/pkm-2025.jpg",
    description: "Berpartisipasi aktif sebagai anggota tim dalam Program Kreativitas Mahasiswa (PKM) Tahun 2025 yang diselenggarakan oleh Bagian Kemahasiswaan UBP Karawang bekerja sama dengan Direktorat Pembelajaran dan Kemahasiswaan (BELMAWA) Kemdiktisaintek RI."
  },
  {
    id: "panitia-himatif-2025",
    title: "Panitia Seminar Nasional HIMATIF 2025",
    issuer: "Fakultas Ilmu Komputer Universitas Buana Perjuangan Karawang",
    date: "Oktober 2025",
    credentialUrl: "",
    file: "images/panitia-himatif-2025.pdf",
    image: "images/panitia-himatif-2025.jpg",
    description: "Surat Tugas Dekan Fakultas Ilmu Komputer UBP Karawang (No: 1560/D/U/X/2025). Terlibat sebagai anggota panitia Sie Peralatan dalam kegiatan Seminar Nasional HIMATIF 2025 dengan tema 'Masa Depan Ngoding di Era AI: Ancaman atau Peluang?', berpartisipasi aktif dalam manajemen logistik dan teknis demi kelancaran pelaksanaan seminar nasional."
  },
  {
    id: "huawei-ai-tech-apps",
    title: "Artificial Intelligence Technology and Applications",
    issuer: "Huawei ICT Academy (华为ICT学院)",
    date: "September 2025",
    credentialUrl: "",
    file: "images/huawei-ai-completion.jpg",
    image: "images/huawei-ai-completion.jpg",
    description: "Certificate of Completion (No. Sertifikat: ICT20250918000111) dari Huawei ICT Academy setelah menyelesaikan studi dan lulus ujian sertifikasi pada domain Artificial Intelligence Technology and Applications, mencakup konsep kecerdasan buatan, machine learning, dan implementasi teknologi AI."
  },
  {
    id: "myskill-frontend-backend-integration",
    title: "Frontend and Backend Integration",
    issuer: "MySkill (Learning Path: Website & Apps Development)",
    date: "September 2026",
    credentialUrl: "",
    file: "images/myskill-frontend-backend.jpg",
    image: "images/myskill-frontend-backend.jpg",
    description: "Sertifikasi keahlian integrasi arsitektur frontend dan backend dari MySkill (menyelesaikan 4 topik spesialisasi). Mempelajari teknik komunikasi data, konsumsi REST API, penanganan request/response, dan alur integrasi aplikasi web secara terstruktur."
  },
  {
    id: "myskill-ux-writing",
    title: "UX Writing Specialization",
    issuer: "MySkill (Learning Path: UI-UX Research and Design)",
    date: "September 2026",
    credentialUrl: "",
    file: "images/myskill-ux-writing.jpg",
    image: "images/myskill-ux-writing.jpg",
    description: "Sertifikasi keahlian perancangan salinan antarmuka (UX Writing) dari MySkill (menyelesaikan 5 topik spesialisasi). Mempelajari penyusunan teks navigasi, microcopy tombol, pesan error, serta panduan gaya bahasa untuk mengoptimalkan pengalaman pengguna (user experience)."
  }
];
