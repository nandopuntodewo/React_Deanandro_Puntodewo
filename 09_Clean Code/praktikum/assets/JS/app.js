// Dapatkan referensi ke elemen formulir
const form = document.getElementById("formCreateProduct");

// Fungsi validasi formulir
function validateForm() {
  // Definisikan ekspresi reguler untuk karakter khusus
  let specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  // Dapatkan elemen-elemen formulir
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productCategory = document.getElementById("productCategory");
  const formFile = document.getElementById("formFile");
  const description = document.getElementById("Description");
  const productFreshness = document.querySelector(
    'input[name="productStatus"]:checked'
  );

  // Validasi nama produk
  if (!productName.value) {
    alert("Harap masukkan nama produk yang valid");
    return false;
  } else if (productName.value.length > 25) {
    alert("Nama produk tidak boleh lebih dari 25 karakter.");
    return false;
  } else if (productName.value.match(specialchars)) {
    alert("Nama produk tidak boleh mengandung simbol");
    return false;
  }

  // Validasi kategori produk
  if (productCategory.value === "") {
    alert("Kategori produk harus diisi");
    return false;
  }

  // Validasi gambar produk
  if (formFile.files.length === 0) {
    alert("Kolom gambar produk harus diisi");
    return false;
  }

  // Validasi kesegaran produk
  if (!productFreshness) {
    alert("Kolom kesegaran produk harus diisi");
    return false;
  }

  // Validasi deskripsi tambahan
  if (!description.value) {
    alert("Kolom Deskripsi Tambahan harus diisi");
    return false;
  }

  // Validasi harga produk
  if (!productPrice.value || isNaN(productPrice.value)) {
    alert("Harap masukkan harga produk yang valid");
    return false;
  }

  return true; // Kembalikan true jika validasi berhasil
}

// Menambahkan event listener untuk validasi saat mengirimkan formulir
form.addEventListener("submit", (e) => {
  if (!validateForm()) {
    e.preventDefault(); // Mencegah pengiriman formulir jika validasi gagal
  }
});

// Menambahkan event listener untuk menangani pengiriman formulir
document
  .getElementById("formCreateProduct")
  .addEventListener("submit", handleSubmit);

// Inisialisasi array untuk menyimpan data produk
const products = [];

// Fungsi untuk menangani pengiriman formulir
function handleSubmit(event) {
  event.preventDefault();

  // Dapatkan nilai dari input
  const productName = document.getElementById("productName").value;
  const productCategory = document.getElementById("productCategory").value;
  const productImage = document.getElementById("formFile").value; // Menyimpan URL gambar
  const productFreshness = document.querySelector(
    'input[name="productStatus"]:checked'
  ).value;
  const productDescription = document.getElementById("Description").value;
  const productPrice = document.getElementById("productPrice").value;

  // Membuat objek produk
  const product = {
    name: productName,
    category: productCategory,
    image: productImage,
    freshness: productFreshness,
    description: productDescription,
    price: productPrice,
  };

  // Menambahkan objek produk ke dalam array
  products.push(product);

  // Membuat elemen baris (row) untuk tabel
  const tableBody = document.getElementById("productTableBody");
  const newRow = tableBody.insertRow();

  // Menambahkan data ke dalam sel-sel tabel
  const cellIndex = newRow.insertCell(0);
  const cellName = newRow.insertCell(1);
  const cellCategory = newRow.insertCell(2);
  const cellImage = newRow.insertCell(3);
  const cellFreshness = newRow.insertCell(4);
  const cellDescription = newRow.insertCell(5);
  const cellPrice = newRow.insertCell(6);

  // Mengisi data ke dalam sel-sel tabel
  cellIndex.innerHTML = tableBody.rows.length; // Nomor urut
  cellName.innerHTML = productName;
  cellCategory.innerHTML = productCategory;
  cellImage.innerHTML = `<img src="${productImage}" alt="${productName}" width="50">`;
  cellFreshness.innerHTML = productFreshness;
  cellDescription.innerHTML = productDescription;
  cellPrice.innerHTML = productPrice;

  // Mengosongkan formulir setelah data ditambahkan
  document.getElementById("formCreateProduct").reset();
}

// Fungsi untuk menghapus produk terakhir
function deleteLastProduct(event) {
  if (event) {
    event.preventDefault();
  }

  if (products.length > 0) {
    products.pop(); // Menghapus produk terakhir dari array
    const tableBody = document.getElementById("productTableBody");
    tableBody.deleteRow(tableBody.rows.length - 1); // Menghapus baris terakhir dari tabel
  }
}

// Menambahkan event listener untuk tombol delete
document
  .getElementById("deleteButton")
  .addEventListener("click", (e) => deleteLastProduct(e));

// Fungsi untuk melakukan pencarian pada tabel
function searchProduct() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase(); // Mendapatkan nilai input pencarian dan mengonversi menjadi lowercase
  const tableBody = document.getElementById("productTableBody");
  const rows = tableBody.getElementsByTagName("tr"); // Mengambil semua baris dalam tabel

  // Loop melalui setiap baris dalam tabel
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName("td"); // Mengambil sel-sel dalam baris

    // Loop melalui setiap sel dalam baris (mulai dari indeks 1 karena indeks 0 adalah nomor urut)
    for (let j = 1; j < cells.length; j++) {
      const cell = cells[j];
      const cellText = cell.textContent.toLowerCase(); // Mengambil teks dalam sel dan mengonversi menjadi lowercase

      // Memeriksa apakah teks dalam sel cocok dengan teks pencarian
      if (cellText.includes(searchInput)) {
        row.style.display = ""; // Menampilkan baris jika ada kesesuaian
        break; // Keluar dari loop setelah menemukan kesesuaian dalam baris
      } else {
        row.style.display = "none"; // Menyembunyikan baris jika tidak ada kesesuaian
      }
    }
  }
}

// Menambahkan event listener pada input pencarian untuk mendeteksi perubahan nilai
document.getElementById("searchInput").addEventListener("input", function () {
  searchProduct();
});
