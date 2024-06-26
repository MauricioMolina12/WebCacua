import { 
    getData, 
    showNewCompanyForm, 
    exit, 
    switchTab,
    searchCompany,
    getCompanies,
    addModule,
    showUserRole,
    getEmpleoyees,
    showNewEmpleoyeeForm,
    getCustomers,
    getProducts,
    showNewProductForm,
    searchCompany2,
    searchEmpleoyees,
    searchCustomers,
    searchProducts,
    getShop,
    getSuppliers,
    showNewSupplierForm,
    showNewCustomersForm,
    addDisplay,
    addProfit,
    addDiscount,
    getProducts2
} from "../controllers/homePage.js";
window.addEventListener("DOMContentLoaded", e => {
    getData('template-card', 'scrollContainer');

    searchCompany('searchCompany');
    searchCompany2('searchCompany2');
    searchEmpleoyees('searchEmpleoyees');
    searchCustomers('searchCustomers');
    searchProducts('searchProducts');

    getProducts('template-card-products','scrollContainerProducts')
    getCustomers('template-card-customers','scrollContainerCustomers')
    getEmpleoyees('template-card-Empleoyee','scrollContainerEmpleoyee')
    getCompanies('template-card__second','.scrollContainerView')
    getShop('template-card-shop','scrollContainerShop')
    getSuppliers('template-card-Supplier','scrollContainerSupplier')
    getProducts2('template-card-products2','scrollContainerProducts2')

    exit('signOut');

    const homeButton = document.querySelector('.buttonHome');
    const categoriesButton = document.querySelector('.buttonCategories');
    const buttonEmpleoyees = document.querySelector('.buttonEmpleoyees');
    const buttonCustomers = document.querySelector('.buttonCustomers');
    const buttonProducts = document.querySelector('.buttonProducts');
    const buttonShop = document.querySelector('.buttonShopping');
    const buttonShopping = document.querySelector('.buttonShop');
    const buttonSupplier = document.querySelector('.buttonSupplier');

    const buttonCompany = document.querySelector('#buttonCompany');
    const buttonNewCustomers = document.querySelector('#buttonNewCustomers');
    const buttonNewEmpleoyees = document.querySelector('#buttonNewEmpleoyees');
    const buttonNewProduct = document.querySelector('#buttonNewProduct');
    const buttonNewSupplier = document.querySelector('#buttonNewSupplier');

    homeButton.addEventListener('click', () => {
        switchTab('Home');
    });
    categoriesButton.addEventListener('click', () => {
        switchTab('Categories','Categories');
    });
    buttonEmpleoyees.addEventListener('click', () => {
        switchTab('Empleoyees');
    });
    buttonCustomers.addEventListener('click', () => {
        switchTab('Customers');
    });
    buttonProducts.addEventListener('click', () => {
        switchTab('Products');
    });
    buttonShop.addEventListener('click', () => {
        switchTab('Shopping');
    });
    buttonShopping.addEventListener('click', () => {
        switchTab('Shop');
    });
    buttonSupplier.addEventListener('click', () => {
        switchTab('Supplier');
    });

    buttonCompany.addEventListener("click", e => {
        showNewCompanyForm('template-card', 'scrollContainer');
    });
    buttonNewEmpleoyees.addEventListener("click", e => {
        showNewEmpleoyeeForm('template-card-Empleoyee','scrollContainerEmpleoyee');
    });
    buttonNewSupplier.addEventListener("click", e => {
        showNewSupplierForm('template-card-Supplier','scrollContainerSupplier');
    });
    buttonNewProduct.addEventListener("click", showNewProductForm);
    buttonNewCustomers.addEventListener("click", e => {
        showNewCustomersForm();
    });

    addModule('.addMethod');
    addProfit('.profit');
    addDisplay('.display');
    addDiscount('.discount');

    showUserRole();
});
