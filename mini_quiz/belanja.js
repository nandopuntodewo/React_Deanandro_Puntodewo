const daftarBelanja = [
    { nama: 'Pisang', harga: 5000 },
    { nama: 'Apel', harga: 3000 },
    { nama: 'Jeruk', harga: 4000 },
  ];
  
  // Fungsi untuk menghitung total harga belanja
  function hitungTotalHarga(daftarBelanja) {
    return new Promise((resolve, reject) => {
      if (!daftarBelanja || daftarBelanja.length === 0) {
        reject("Daftar belanja kosong");
      } else {
        const total = daftarBelanja.reduce((acc, item) => acc + item.harga, 0);
        resolve(total);
      }
    });
  }
  
  // Panggil fungsi hitungTotalHarga dan menangani Promise
  hitungTotalHarga(daftarBelanja)
    .then((totalHarga) => {
      console.log("Total Harga: " + totalHarga);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
  