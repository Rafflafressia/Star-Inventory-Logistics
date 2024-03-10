const add_new_employee_handler = async(event) => {
    event.preventDefault();
    const first_name = document.querySelector('#firstname').value.trim();
    const last_name = document.querySelector('#lastname').value.trim();
    const user_name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const position = document.querySelector('#position').value.trim();
    
    if(first_name && last_name && user_name && password && position){
        const response = await fetch('/api/add-employee', {
            method: 'POST',
            body: JSON.stringify({
                "user_name": user_name,
                "password": password,
                "first_name": first_name,
                "last_name": last_name,
                "position": position,
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
           
            console.log("New employee added successfully");

        }else{
            alert("Failed to create a employee");
        }
    }
}


document.querySelector('.add-empoloyee-form').addEventListener('submit', add_new_employee_handler);