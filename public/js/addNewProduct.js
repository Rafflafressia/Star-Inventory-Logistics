const add_new_product_handler = async(event) => {
    event.preventDefault();
    const product_name = document.querySelector('#new-product-name').value.trim();
    const product_price = document.querySelector('#new-product-price').value.trim();
    const product_stock = document.querySelector('#new-product-stock').value.trim();
    const category_id = document.querySelector('#new-category-id').value.trim();
    const product_description = document.querySelector('#new-product-description').value.trim();
    const product_image = document.querySelector('#new-product-image').value.trim();

    console.log(product_name)

    if(product_name && product_price && product_stock && category_id && product_description && product_image){
        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify({ 
                "product_name":product_name,
                "price":product_price,
                "stock":product_stock,
                "description":product_description,
                "category_id": category_id,
                "image":product_image

        }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
           
            console.log("New product added successfully");

        }else{
            alert("Failed to create a product");
        }
    }
}


document.querySelector('.add-product-form').addEventListener('submit', add_new_product_handler);