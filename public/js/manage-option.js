document.addEventListener("DOMContentLoaded", function() {
    var translations = {
        "Upload catalog": "Upload Catalog",
        "Add Employee": "Add Employee"
    };
  
    
    function translatePlaceholders() {
        var placeholders = document.querySelectorAll('[data-translate]');
        placeholders.forEach(function(placeholder) {
            var key = placeholder.getAttribute('data-translate');
            if (translations.hasOwnProperty(key)) {
                placeholder.innerHTML = translations[key];
            }
        });
    }
  
    
    translatePlaceholders();
  });
  