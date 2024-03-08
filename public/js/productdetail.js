document.addEventListener("DOMContentLoaded", function() {
    var translations = {
      "category_name1": "Category Name 1",
      "product_name1": "Product Name 1",
      "product_name2": "Product Name 2",
      "category_name2": "Category Name 2",
      "product_name3": "Product Name 3",
      "product_name4": "Product Name 4",
      "category_name3": "Category Name 3",
      "product_name5": "Product Name 5",
      "product_name6": "Product Name 6",
      "category_name4": "Category Name 4",
      "product_name7": "Product Name 7",
      "product_name8": "Product Name 8",
      "category_name5": "Category Name 5",
      "product_name9": "Product Name 9",
      "product_name10": "Product Name 10",
      "productname": "Product name",
      "price": "Price",
      "description": "Description",
      "Quote": "Quote",
      "add_on1": "Add On 1",
      "add_on2": "Add On 2",
      "add_on3": "Add On 3",
      "add_on4": "Add On 4",
      "add_on5": "Add On 5"
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