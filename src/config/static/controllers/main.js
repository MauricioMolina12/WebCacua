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
    getShop
} from "../controllers/homePage.js";


window.addEventListener("DOMContentLoaded", e => {

    
    searchCompany('searchCompany');

    searchCompany2('searchCompany2');

    searchEmpleoyees('searchEmpleoyees');
    
    searchCustomers('searchCustomers');

    searchProducts('searchProducts');


    getProducts('template-card-products','scrollContainerProducts')

    getCustomers('template-card-customers','scrollContainerCustomers')
    
    getEmpleoyees('template-card-Empleoyee','scrollContainerEmpleoyee')

    getData('template-card', 'scrollContainer');

    getCompanies('template-card__second','.scrollContainerView')

    getShop('template-card-shop','scrollContainerShop')


    exit('signOut');

    const homeButton = document.querySelector('.buttonHome');

    const categoriesButton = document.querySelector('.buttonCategories');

    const buttonEmpleoyees = document.querySelector('.buttonEmpleoyees');

    const buttonCustomers = document.querySelector('.buttonCustomers');
    
    const buttonProducts = document.querySelector('.buttonProducts');

    const buttonShop = document.querySelector('.buttonShopping');



    homeButton.addEventListener('click', () => {
        switchTab('Home');
    });
    categoriesButton.addEventListener('click', () => {
        switchTab('Categories','Categories');
    });

    buttonEmpleoyees.addEventListener('click', () => {
        switchTab('Empleoyees');
    });

    buttonCustomers.addEventListener('click',()=>{
        switchTab('Customers');
    })

    buttonProducts.addEventListener('click',()=>{
        switchTab('Products');
    })

    buttonShop.addEventListener('click',()=>{
        switchTab('Shopping');
    })

    
    const buttonCompany = document.querySelector('#buttonCompany');
    const buttonNewEmpleoyees = document.querySelector('#buttonNewEmpleoyees')
    const buttonNewProduct = document.querySelector('#buttonNewProduct')

    buttonCompany.addEventListener("click", showNewCompanyForm);

    buttonNewEmpleoyees.addEventListener("click",showNewEmpleoyeeForm)

    buttonNewProduct.addEventListener("click",showNewProductForm)
    

    addModule('.addMethod')

    showUserRole();


})
