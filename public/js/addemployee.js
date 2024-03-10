document.addEventListener("DOMContentLoaded", function () {
    var translations = {

        //buttons
        "Update catalog": "Update Catalog",
        "Add Employee": "Add Employee",

        //employe elist table
        "Employee First_Name": "Employee First Name",
        "Employee last_Name": "Employee Last Name",
        "Employee UserName": "Employee Username",
        "Employee Password": "Employee Password",
        "Position": "Position",

        //button
        "Add Employee": "Add Employee",
    };

    // Function to replace placeholders with translations
    function translatePlaceholders() {
        var placeholders = document.querySelectorAll('[data-translate]');
        placeholders.forEach(function (placeholder) {
            var key = placeholder.getAttribute('data-translate');
            if (translations.hasOwnProperty(key)) {
                placeholder.innerHTML = translations[key];
            }
        });
    }

    // Call the function to translate placeholders
    translatePlaceholders();
});
