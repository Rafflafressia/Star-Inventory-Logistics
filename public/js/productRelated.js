const add_new_product_handler = () => {
    document.location.replace('/add-product');
}
const search_handler = async () => {

    const search_bar = document.querySelector('#product-search-text');
    const product_name = search_bar.value.trim();
  
    document.location.assign(`/search-result?product_name=${encodeURIComponent(product_name)}`);
  
  }
  
  document.querySelector('.ss').addEventListener('click', search_handler);
  


document.querySelector('.add-new-product-btn').addEventListener('click', add_new_product_handler);
