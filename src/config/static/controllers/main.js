import { validateLogin } from "../controllers/login.js"
import { getData, showNewCompanyForm, exit, switchTab,searchCompany} from "../controllers/homePage.js";

window.addEventListener("DOMContentLoaded", e => {
    showNewCompanyForm('buttonCompany');
    getData('template-card', 'scrollContainer');
    exit('signOut');

    const homeButton = document.querySelector('.buttonHome');
    const categoriesButton = document.querySelector('.buttonCategories');

    homeButton.addEventListener('click', () => {
        switchTab('Home');
    });

    categoriesButton.addEventListener('click', () => {
        switchTab('Categories');
    });

    searchCompany('searchCompany');

});