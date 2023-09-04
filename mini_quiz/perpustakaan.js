const daftarBuku = [
    { id: 1, judul: 'Harry Potter', penulis: 'J.K. Rowling', tahunTerbit: 2001, dipinjam: false },
    { id: 2, judul: 'To Kill a Mockingbird', penulis: 'Harper Lee', tahunTerbit: 1960, dipinjam: true },
    { id: 3, judul: 'The Great Gatsby', penulis: 'F. Scott Fitzgerald', tahunTerbit: 1925, dipinjam: false },
];

// Fungsi untuk menampilkan daftar buku beserta status peminjaman
function tampilkanDaftarBuku(daftarBuku) {
    console.log("Daftar Buku:");
    daftarBuku.forEach((buku) => {
        const statusPeminjaman = buku.dipinjam ? "Dipinjam" : "Tersedia";
        console.log(`${buku.id}. ${buku.judul} oleh ${buku.penulis} (Tahun Terbit: ${buku.tahunTerbit}) - ${statusPeminjaman}`);
    });
}

// Memanggil fungsi untuk menampilkan daftar buku
tampilkanDaftarBuku(daftarBuku);
