const judulArtikel = "Manfaat Olahraga untuk Kesehatan Mental";
const kataPengganti = "Aktivitas Fisik";
const kataKunci = "Olahraga";

// Memecah judul artikel menjadi array kata-kata
const kataKataJudul = judulArtikel.split(' ');

// Membuat judul artikel baru dengan mengganti kata kunci
const judulArtikelDisunting = kataKataJudul.map((kata) => {
    if (kata === kataKunci) {
        return kataPengganti;
    } else {
        return kata;
    }
}).join(' ');

console.log("Judul Artikel Disunting: " + judulArtikelDisunting);
