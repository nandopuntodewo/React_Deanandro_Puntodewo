// validation.js

// Fungsi untuk menampilkan pesan alert
function showAlert(message) {
    alert(message);
  }
  
  // Fungsi untuk mengaktifkan atau menonaktifkan tombol Submit
  function toggleSubmitButton() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
  
    // Validasi Product Name tidak boleh kosong dan tidak boleh lebih dari 25 karakter
    if (productName === "" || productName.length > 25) {
      showAlert("Product Name must not be empty and must not exceed 25 characters.");
      return false; // Hentikan submit jika validasi gagal
    }
  
    // Validasi Product Price tidak boleh kosong
    if (productPrice === "") {
      showAlert("Please enter a valid Product Price.");
      return false; // Hentikan submit jika validasi gagal
    }
  
    return true; // Lanjutkan submit jika semua validasi berhasil
  }
  
  // Menambahkan event listener pada form untuk meng-handle submit
  document.getElementById("formCreateProduct").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form untuk langsung submit
    const isValid = toggleSubmitButton(); // Validasi form
    if (isValid) {
      // Jika form valid, tampilkan data dalam alert
      const productName = document.getElementById("productName").value;
      const productCategory = document.getElementById("productCategory").value;
      const productStatus = document.querySelector("input[name='productStatus']:checked").value;
      const additionalDescription = document.getElementById("exampleFormControlTextarea1").value;
      const productPrice = document.getElementById("productPrice").value;
  
      const alertMessage = `Product Name: ${productName}\nProduct Category: ${productCategory}\nProduct Status: ${productStatus}\nAdditional Description: ${additionalDescription}\nProduct Price: $${productPrice}`;
  
      showAlert(alertMessage);
    }
  });
  