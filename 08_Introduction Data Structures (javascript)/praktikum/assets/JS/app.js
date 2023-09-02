// Inisialisasi array untuk menyimpan data produk
const products = [];

// Fungsi untuk menangani pengiriman formulir
function handleSubmit(event) {
    event.preventDefault(); // Mencegah formulir mengirimkan permintaan HTTP

    // Mendapatkan nilai dari input
    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;
    const productImage = document.getElementById('formFile').value; // Menyimpan URL gambar
    const productFreshness = document.querySelector('input[name="productStatus"]:checked').value;
    const productDescription = document.getElementById('Description').value;
    const productPrice = document.getElementById('productPrice').value;

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
    const tableBody = document.getElementById('productTableBody');
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
    document.getElementById('formCreateProduct').reset();
}

// Menambahkan event listener untuk menangani pengiriman formulir
document.getElementById('formCreateProduct').addEventListener('submit', handleSubmit);

// Fungsi untuk menghapus produk terakhir
function deleteLastProduct() {
    if (products.length > 0) {
        products.pop(); // Menghapus produk terakhir dari array
        const tableBody = document.getElementById('productTableBody');
        tableBody.deleteRow(tableBody.rows.length - 1); // Menghapus baris terakhir dari tabel
    }
}

// Menambahkan event listener untuk tombol delete
document.getElementById('deleteButton').addEventListener('click', deleteLastProduct);
