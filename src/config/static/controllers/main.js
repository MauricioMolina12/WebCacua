import { getData, showNewCompanyForm, exit, switchTab,searchCompany,getCompanies,addModule,showUserRole,getEmpleoyees,showNewEmpleoyeeForm,getCustomers,getProducts,showNewProductForm} from "../controllers/homePage.js";


window.addEventListener("DOMContentLoaded", e => {

    getProducts('template-card-products','scrollContainerProducts')

    getCustomers('template-card-customers','scrollContainerCustomers')
    
    getEmpleoyees('template-card-Empleoyee','scrollContainerEmpleoyee')

    getData('template-card', 'scrollContainer');

    exit('signOut');

    const homeButton = document.querySelector('.buttonHome');

    const categoriesButton = document.querySelector('.buttonCategories');

    const buttonEmpleoyees = document.querySelector('.buttonEmpleoyees');

    const buttonCustomers = document.querySelector('.buttonCustomers');
    
    const buttonProducts = document.querySelector('.buttonProducts');

    const buttonShop = document.querySelector('.buttonShop');



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
        switchTab('Shop');
    })

    searchCompany('searchCompany');

    const buttonCompany = document.querySelector('#buttonCompany');
    const buttonNewEmpleoyees = document.querySelector('#buttonNewEmpleoyees')
    const buttonNewProduct = document.querySelector('#buttonNewProduct')

    buttonCompany.addEventListener("click", showNewCompanyForm);

    buttonNewEmpleoyees.addEventListener("click",showNewEmpleoyeeForm)

    buttonNewProduct.addEventListener("click",showNewProductForm)

    

    getCompanies('template-card__second','.scrollContainerView')

    addModule('.addMethod')

    showUserRole();


})
