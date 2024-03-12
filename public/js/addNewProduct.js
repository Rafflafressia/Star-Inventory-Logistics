const add_new_product_handler = async(event) => {
    event.preventDefault();
    const product_name = document.querySelector('#new-product-name').value.trim();
    const product_price = document.querySelector('#new-product-price').value.trim();
    const product_stock = document.querySelector('#new-product-stock').value.trim();
    const category_id = document.querySelector('#new-category-id').value.trim();
    const product_description = document.querySelector('#new-product-description').value.trim();
    const product_image_url = document.querySelector('#new-product-image').value.trim();
    const product_image_local = document.querySelector('#local-product-image').files[0]

    // Medal for status
    const status_title = document.querySelector('#exampleModalToggleLabel');
    const message = document.querySelector('.modal-body');
    const pop_up = document.querySelector('.pop-up');

    //send request to back end to create product
    if(product_name && product_price && product_stock && category_id && product_description){
        
        if(product_image_url && product_image_local){
           alert("Please only upload one image per time!")
           return
        }

        if (!product_image_url && !product_image_local){
            alert("Please upload image!")
            return
        }
        
        const formData = new FormData();
        formData.append('product_name', product_name);
        formData.append('price', product_price);
        formData.append('stock', product_stock);
        formData.append('description', product_description);
        formData.append('category_id', category_id);
        formData.append('image_url', product_image_url);
        formData.append('image', product_image_local);

     

        const response = await fetch('/api/products', {
            method: 'POST',
            body: formData
        });


        if (response.ok){
            // successful status
            status_title.innerText = "Product created Successfully";
            message.innerText = "New product has been added successfully";
            pop_up.click();

        }else{
            // failed status
            status_title.innerText = "Product created failed";
            message.innerText = "Please check your inputs and try again";
            pop_up.click();
        }
    }else{
        // all box should be filled
        status_title.innerText = "Product created failed";
        message.innerText = "Please fill all boxes";
        pop_up.click();
    }
}


document.querySelector('.add-product-form').addEventListener('submit', add_new_product_handler);