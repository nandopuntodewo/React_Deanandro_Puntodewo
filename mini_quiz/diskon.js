const daftarItem = [
    { nama: 'Baju', harga: 100000 },
    { nama: 'Celana', harga: 80000 },
    { nama: 'Sepatu', harga: 200000 },
    { nama: 'Topi', harga: 30000 },
];

const batasDiskon = 300000;
const diskonTambahan = 50000;

// Inisialisasi total belanja
let totalBelanja = 0;

// Menghitung total belanja
for (let i = 0; i < daftarItem.length; i++) {
    totalBelanja += daftarItem[i].harga;
}

// Menampilkan total belanja
console.log("Total belanja: Rp " + totalBelanja + ".");

// Mengecek apakah pelanggan mendapatkan diskon tambahan
if (totalBelanja > batasDiskon) {
    // Menghitung total belanja akhir setelah diskon
    const totalBelanjaAkhir = totalBelanja - diskonTambahan;
    
    // Menampilkan informasi diskon tambahan dan total belanja akhir
    console.log("Anda mendapatkan diskon tambahan sebesar: Rp " + diskonTambahan + ".");
    console.log("Total belanja akhir setelah diskon: Rp " + totalBelanjaAkhir + ".");
} else {
    console.log("Maaf, Anda tidak mendapatkan diskon tambahan.");
}
