const search_handler = async () => {

    const search_bar = document.getElementById('.search');
    product_name = search_bar.value;
    const response = await fetch(`/api/products/search?product_name=${product_name}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {

      document.location.redirect('/search-result');
  
    } else {
      alert(response.statusText);
    }
}

document.querySelector('#search-btn').addEventListener('click', search_handler);