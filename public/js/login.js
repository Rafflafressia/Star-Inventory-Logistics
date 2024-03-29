const login_form_handler = async(event)=>{
    event.preventDefault();
    const user_name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    // send request to log in
    if(user_name && password){
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ user_name, password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
           
            document.location.assign('/');

        }else{
            alert("Failed to login");
        }
    }
}


document.querySelector('.login-form').addEventListener('submit', login_form_handler);




