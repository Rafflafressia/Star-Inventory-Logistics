const add_new_employee_handler = async(event) => {
    event.preventDefault();
    const first_name = document.querySelector('#firstname').value.trim();
    const last_name = document.querySelector('#lastname').value.trim();
    const user_name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const position = document.querySelector('#position').value.trim();

    // Medal
    const status_title = document.querySelector('#exampleModalToggleLabel');
    const message = document.querySelector('.modal-body');
    const pop_up = document.querySelector('.pop-up');
    
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
           status_title.innerText = "Empolyee created Successfully";
           message.innerText = "New employee has been added successfully";
           pop_up.click();
        

        }else{
           status_title.innerText = "Empolyee created failed";
           message.innerText = "Please check your inputs and try again";
           pop_up.click();
        }
    }else{
        status_title.innerText = "Empolyee created failed";
        message.innerText = "Please fill all boxes";
        pop_up.click();
    }
}


document.querySelector('.add-empoloyee-form').addEventListener('submit', add_new_employee_handler);