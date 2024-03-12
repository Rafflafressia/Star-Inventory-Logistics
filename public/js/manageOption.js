// go to product related page
const update_catalog_handler = () => {
    document.location.replace('/product-related');
}

// go to add employee page
const add_employee_handler = () => {
    document.location.replace('/add-employee');
}
  


document.querySelector('.add-employee-btn').addEventListener('click', add_employee_handler);
document.querySelector('.upload-catalog-btn').addEventListener('click', update_catalog_handler);