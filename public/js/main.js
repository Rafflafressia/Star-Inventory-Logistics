
const logout_handler = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
  
      document.location.replace('/login');

    } else {
      alert(response.statusText);
    }
};

// manager bar
const setting_handler = () => {
  document.location.assign('/manage-option');
}


//search product bar
const search_handler = async () => {

  const search_bar = document.querySelector('#search-input');
  const product_name = search_bar.value;

  document.location.assign(`/search-result?product_name=${encodeURIComponent(product_name)}`);

}

document.querySelector('#search-btn').addEventListener('click', search_handler);

document.querySelector('.settings').addEventListener('click', setting_handler);
document.querySelector('.logout').addEventListener('click', logout_handler);
