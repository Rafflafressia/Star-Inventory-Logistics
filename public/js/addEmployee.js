const add_new_employee_handler = async(event) => {
    event.preventDefault();
    const first_name = document.querySelector('#firstname').value.trim();
    const last_name = document.querySelector('#lastname').value.trim();
    const user_name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const position = document.querySelector('#position').value.trim();

    // Modal for status
    const status_title = document.querySelector('.modal-title');
    const message = document.querySelector('.modal-body');

    // Modal Window
    const modal_window = document.querySelector('.modal-window');
    
    //send request to back end to create employees
    if(first_name && last_name && user_name && password && position){
        const response = await fetch('/api/employee/add-employee', {
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
        // successful status
        if (response.ok){
            modal_window.style.display = "block";
            status_title.innerText = "Employee created Successfully";
            message.innerText = "New employee has been added successfully";
            
            window.onclick = function(event) {
                if (event.target !== modal_window || event.target == modal_window) {
                    modal_window.style.display = "none";
                }
            }
        
        // failed status
        }else{ 
           modal_window.style.display = "block";
           status_title.textContent = "Employee created failed";
           message.innerText = "Please check your inputs and try again";
           
           window.onclick = function(event) {
            if (event.target !== modal_window || event.target == modal_window) {
                modal_window.style.display = "none";
            }
        }
        }
    }else{
        // all box should be filled
        modal_window.style.display = "block";
        status_title.textContent = "Employee created failed";
        message.innerText = "Please fill all boxes";
          
        window.onclick = function(event) {
                if (event.target !== modal_window || event.target == modal_window) {
                    modal_window.style.display = "none";
                }
            }
    }
}


document.querySelector('.add-empoloyee-form').addEventListener('submit', add_new_employee_handler);