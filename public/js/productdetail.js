document.addEventListener("DOMContentLoaded", function () {
  // Sample data for categories, product details, and add-ons
  const data = {
    categories: [
      {
        category_name: "Category 1",
        product_names: ["Product 1", "Product 2"]
      },
      {
        category_name: "Category 2",
        product_names: ["Product 3", "Product 4"]
      },
      {
        category_name: "Category 2",
        product_names: ["Product 5", "Product 6"]
      },
      {
        category_name: "Category 4",
        product_names: ["Product 7", "Product 8"]
      },
      {
        category_name: "Category 5",
        product_names: ["Product 9", "Product 10"]
      },
    ],
    ProductName: "Product Name",
    price: "price",
    description: "",
    addons: ["Add-on 1", "Add-on 2", "Add-on 3", "Add-on 4", "Add-on 5"]
  };

  // Compile Handlebars templates
  const categoryTemplateSource = document.getElementById("category-template").innerHTML;
  const categoryTemplate = Handlebars.compile(categoryTemplateSource);

  // Render categories
  const categoryHtml = categoryTemplate(data);
  document.getElementById("accordionFlushExample").innerHTML = categoryHtml;

  // Update product name, price, and description
  document.getElementById("product-name").textContent = data.ProductName;
  document.getElementById("product-price").textContent = data.price;
  document.getElementById("description").textContent = data.description;

  // Add-ons handling
  const addonTemplateSource = document.getElementById("addon-template").innerHTML;
  const addonTemplate = Handlebars.compile(addonTemplateSource);

  // Render add-ons
  const addonHtml = addonTemplate({ addons: data.addons });
  document.querySelector(".b_g").innerHTML = addonHtml;
});
