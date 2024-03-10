$(document).ready(function () {
    // Sample data
    var data = {
        categories: [
            {
                category: "Category 1",
                products: ["Product 1", "Product 2"]
            },
            {
                category: "Category 2",
                products: ["Product 3", "Product 4"]
            },
            {
                category: "Category 3",
                products: ["Product 5", "Product 6"]
            },
            {
                category: "Category 4",
                products: ["Product 7", "Product 8"]
            },
            {
                category: "Category 5",
                products: ["Product 9", "Product 10"]
            },
        ],
        // Product names for input placeholders
        productname: "Product Name",
        productprice: "Product Price",
        productstock: "Product Stock",
        productdescription: "Product Description",
        productimage: "Product Image",
        Addnewproduct: "Add New Product"
    };

    // Compile Handlebars template
    var source = $("#accordion-template").html();
    var template = Handlebars.compile(source);

    // Append the compiled template to the accordion
    $('#accordionFlushExample').append(template(data));

    // Set placeholders for inputs
    $('[data-translate="productname"]').text(data.productname);
    $('[data-translate="productprice"]').text(data.productprice);
    $('[data-translate="productstock"]').text(data.productstock);
    $('[data-translate="productdescription"]').text(data.productdescription);
    $('[data-translate="productimage"]').text(data.productimage);
    $('[data-translate="Addnewproduct"]').text(data.Addnewproduct);
});
