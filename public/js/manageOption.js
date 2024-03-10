const update_catalog_handler = () => {
    document.location.replace('/manage-option/product-related');
}

const add_employee_handler = () => {
    document.location.replace('/manage-option/add-employee');
}
  


document.querySelector('.add-employee-btn').addEventListener('click', add_employee_handler);
document.querySelector('.upload-catalog-btn').addEventListener('click', update_catalog_handler);