const productCard = document.querySelectorAll(".card-click");
const homeBtn = document.querySelector(".logo");
const categoryBtn = document.querySelectorAll(".category-btn");


// set eventlistener to each card for prodcut
for (let i=0; i < productCard.length; i++) {
    productCard[i].addEventListener("click", async (event) => {

        event.preventDefault();
    
        console.log("I was clicked");
    
        console.log(event.target);
    
        let productId = event.target.getAttribute("data-id");
        
        console.log(productId);

        //show product detail
        document.location.assign(`productDetail-${productId}`);
    });
};

for (let i=0; i < categoryBtn.length; i++) {
    categoryBtn[i].addEventListener("click", async (event) => {
        event.preventDefault();
        console.log("I was clicked");
        console.log(event.target);
        let categoryId = event.target.getAttribute("data-id");
        console.log(categoryId);

        //redirect to filter category data
        document.location.assign(`categoryDetail-${categoryId}`);
    });
};

homeBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    document.location.assign("/");
});


