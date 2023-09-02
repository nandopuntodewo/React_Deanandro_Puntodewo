
const form = document.getElementById('formCreateProduct')


form.addEventListener('submit', (e) => {
    let specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const productName = document.getElementById('productName')
    const productPrice = document.getElementById('productPrice')
    const option = document.getElementById('productCategory')
    const formFile = document.getElementById('formFile')
    const Description = document.getElementById('Description')
    var radio1 = document.getElementById('Brandnew')
    var radio2 = document.getElementById('Secondhand')
    var radio3 = document.getElementById('Refurbished')


    if (productName.value === "" || productName.value == null){
        alert ("Please enter a valid product name");
        return false;
    }else

    if (productName.value.length > 25 || productName.value.length > 10){
        alert ("Last Name must not exceed 25 characters.");
        return false;
    }else

    if (productName.value.match(specialchars)) {
        alert("Prodcut name must not contain symbols")
        return false;
    }else

    if (option.value == ""){
        alert ("Product Category field must be filled in");
        return false;
    }else

    if (formFile.files.length === 0 ){ 
        alert("Product image field must be filled in")
        return false;
    }else

    if (radio1.checked !== true && radio2.checked !== true && radio3.checked !== true){
        alert ("Product freshness field must be filled in")
        return false;
    }else

    if (Description.value === "" || Description.value == null){
        alert("Additional Description field must be filled in")
        return false
    }else

    if (productPrice.value === "" || productPrice.value == null){
        alert("Please enter a valid product price")
        return false;
    }
})