
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

  const setting_handler = async () => {
      const response = await fetch('/api/manage-option', {
          method:'GET'
      })
      
      if(!response.ok){
        alert("You have to be a manager")
      }
  }

document.querySelector('.settings').addEventListener('click', setting_handler);
document.querySelector('.logout').addEventListener('click', logout_handler);
