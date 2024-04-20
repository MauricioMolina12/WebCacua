import { getData, showNewCompanyForm, exit, switchTab,searchCompany,getCompanies,addModule} from "../controllers/homePage.js";

window.addEventListener("DOMContentLoaded", e => {

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

    const buttonCompany = document.querySelector('#buttonCompany');

    buttonCompany.addEventListener("click", showNewCompanyForm);

    getCompanies('template-card__second','.scrollContainerView')

    addModule('.addMethod')


})
