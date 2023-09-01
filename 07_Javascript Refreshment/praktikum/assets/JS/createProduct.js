const formCreateProduct = document.getElementById("formCreateProduct");

formCreateProduct.addEventListener("submit", (e) => {
  e.preventDefault();

  let productName = document.getElementById("productName");
  let productCategory = document.getElementById("productCategory");
  let formFile = document.getElementById("formFile");
  let radio = document.getElementById("radio");
  let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
  let productPrice = document.getElementById("productPrice");
  let pattern = /^[A-Za-z0-9\s]+$/;

  if (productName.value == "") {
    productName.classList.add("is-invalid");
    alert("The Product Name field must be filled in!");
  } else if (productCategory.value == "") {
    productCategory.classList.add("is-invalid");
    alert("The Product Category field must be filled in!");
  } else if (radio.value == "") {
    radio.classList.add("is-invalid");
    alert("The Product Freshness field must be filled in!");
  } else if (formFile.files.length === 0) {
    formFile.classList.add("is-invalid");
    alert("The Image of Product field must be filled in!");
  } else if (exampleFormControlTextarea1.value == "") {
    exampleFormControlTextarea1.classList.add("is-invalid");
    alert("The Additional Description field must be filled in!");
  } else if (productPrice.value == "") {
    productPrice.classList.add("is-invalid");
    alert("The Product Price field must be filled in!");
  } else if (!pattern.test(productName.value)) {
    alert("Product Name should only contain letters and numbers!");
  } else if (productName.value.length > 25) {
    alert("Product Name must not exceed 25 characters!");
  } else {
    alert(
      "Product has been successfully submitted!\n" +
        "\n" +
        "Product Name: " +
        document.getElementById("productName").value +
        "\n" +
        "Product Category: " +
        document.getElementById("productCategory").value +
        "\n" +
        "Product Image: " +
        document.getElementById("formFile").value +
        "\n" +
        "Product Status: " +
        document.querySelector("input[name='productStatus']:checked").value +
        "\n" +
        "Additional Description: " +
        document.getElementById("exampleFormControlTextarea1").value +
        "\n" +
        "Product Price: " +
        document.getElementById("productPrice").value
    );

    productName.value = "";
    productCategory.value = "";
    radio.value = "";
    exampleFormControlTextarea1.value = "";
    productPrice.value = "";

    productName.classList.remove("is-invalid");
    productCategory.classList.remove("is-invalid");
    radio.classList.remove("is-invalid");
    formFile.classList.remove("is-invalid");
    exampleFormControlTextarea1.classList.remove("is-invalid");
    productPrice.classList.remove("is-invalid");
  }
});
