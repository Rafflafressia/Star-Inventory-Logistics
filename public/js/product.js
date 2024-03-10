const productDescription = async (event) => {
    event.preventDefault();
    console.log("I was clicked");
};

const productCard = document.querySelectorAll(".productCard");

for (let i=0; i < productCard.length; i++) {
    productCard[i].addEventListener("click", productDescription);
};