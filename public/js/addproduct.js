document.addEventListener("DOMContentLoaded", function() {
    var translations = {
        "categoryname1": "Category 1",
        "productname1": "Product 1",
        "productname2": "Product 2",
        "categoryname2": "Category 2",
        "productname3": "Product 3",
        "productname4": "Product 4",
        "categoryname3": "Category 3",
        "productname5": "Product 5",
        "productname6": "Product 6",
        "categoryname4": "Category 4",
        "productname7": "Product 7",
        "productname8": "Product 8",
        "categoryname5": "Category 5",
        "productname9": "Product 9",
        "productname10": "Product 10",
        "productname": "Product Name",
        "productprice": "Product Price",
        "productstock": "Product Stock",
        "categoryname": "Category Name",
        "productdescription": "Product Description",
        "productimage": "Product Image",
        "Addnewproduct": "Add New Product"
    };
  
    // Function to replace placeholders with translations
    function translatePlaceholders() {
        var placeholders = document.querySelectorAll('[data-translate]');
        placeholders.forEach(function(placeholder) {
            var key = placeholder.getAttribute('data-translate');
            if (translations.hasOwnProperty(key)) {
                placeholder.innerHTML = translations[key];
            }
        });
    }
  
    // Call the function to translate placeholders
    translatePlaceholders();
  });