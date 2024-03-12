const productDescription = async (event) => {

    event.preventDefault();

    console.log("I was clicked");

    console.log(event.target);

    let productId = event.target.getAttribute("data-id");
    
    console.log(productId);
    //redirect to product detail page
    document.location.assign(`productDetail-${productId}`);
};

const productCard = document.querySelectorAll(".productCard");

// set eventlistener to each card for prodcut
for (let i=0; i < productCard.length; i++) {
    productCard[i].addEventListener("click", productDescription);
};