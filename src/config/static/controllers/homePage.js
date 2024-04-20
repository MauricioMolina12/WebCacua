
const d = document,
      w = window


      
    const companies = [
        {
            name: "Juan Valdez",
            ubication: "Barranquilla,Atlantico",
            time: "3 month",
            correo: "JuanValdez@gmail.com",
            nit: '800-542-23-42',
            status: true,
            modules: 0
        },
        {
            name: "Mc Donalds",
            ubication: "Barranquilla,Atlantico",
            time: "4 month",
            correo: "McDonalds@gmail.com",
            nit: '800-653-24-43',
            status: false,
            modules: 0
        },
        {
            name: "KFC",
            ubication: "Barranquilla,Atlantico",
            time: "4 month",
            correo: "KFC@gmail.com",
            nit: '800-653-24-43',
            status: false,
            modules: 0
        },
        {
            name: "Adidas",
            ubication: "Barranquilla,Atlantico",
            time: "25 month",
            correo: "adidas@gmail.com",
            nit: '800-653-24-43',
            status: false,
            modules: 0
        },
        {
            name: "Olimpica",
            ubication: "Barranquilla,Atlantico",
            time: "4 month",
            correo:  "Olimpica@gmail.com",
            nit: '800-653-24-43',
            status: true,
            modules: 0
        },
        {
            name: "Éxito",
            ubication: "Barranquilla,Atlantico",
            time: "4 month",
            correo: "exito@gmail.com",
            nit: '800-653-24-43',
            status: true,
            modules: 0
        },
        {
            name: "Nike",
            ubication: "Barranquilla,Atlantico",
            time: "4 month",
            correo: "nike@gmail.com",
            nit: '800-653-24-43',
            status: true,
            modules: 0
        }
        
    ]

    function routesGo(route){
        w.location.href = route;
    }

    export function getData(templateID, scrollContainerID) {
        let template = document.getElementById(templateID).content.cloneNode(true);
        let fragment = document.createDocumentFragment();
        let scrollContainer = document.getElementById(scrollContainerID);
        
        companies.forEach(company => {
            let clone = template.cloneNode(true);
            clone.querySelector('#card__name').textContent = company.name;
            clone.querySelector('#card__ubication').textContent = company.ubication;
            clone.querySelector('#card__time').textContent = company.time;
            clone.querySelector('#card__email').textContent = company.correo;
            clone.querySelector('#card__nit').textContent = company.nit;
            clone.querySelector('#card__modules').textContent = company.modules;
    
            let activeElement = clone.querySelector('#card__active');
            if (company.status == true) {
                activeElement.innerHTML = 'Active' + '<i class="fa-solid fa-square-check checkGood"></i>';
            } else {
                activeElement.innerHTML = 'Inactive' + '<i class="fa-solid fa-circle-xmark checkFalse"></i>';
            }
    
            fragment.appendChild(clone);
        });

        scrollContainer.innerHTML = '';
        scrollContainer.appendChild(fragment);
    

        return scrollContainer;
    }


    export function showNewCompanyForm(buttonID) {

        const buttonCompany = d.getElementById(buttonID)

        const form = `
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="ubication">Ubication:</label>
                <input type="text" id="ubication" name="ubication"><br><br>
                <label for="time">Time:</label>
                <input type="text" id="time" name="time"><br><br>
                <label for="correo">Correo:</label>
                <input type="text" id="correo" name="correo"><br><br>
                <label for="nit">NIT:</label>
                <input type="text" id="nit" name="nit"><br><br>
                <label for="status">Status:</label>
                <select id="status" name="status">
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select><br><br>
                <label for="modules">Modules:</label>
                <input type="text" id="modules" name="modules"><br><br>
            </div>
        `;

        Swal.fire({
            title: 'New Company',
            html: form,
            showCancelButton: true,
            confirmButtonText: 'Create Company',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true,
            customClass: {
                confirmButton: 'confirmButton',
            },
            preConfirm: () => {
                const name = d.getElementById('name').value;
                const ubication = d.getElementById('ubication').value;
                const time = d.getElementById('time').value;
                const correo = d.getElementById('correo').value;
                const nit = d.getElementById('nit').value;
                const status = d.getElementById('status').value === 'true';
                const modules = parseInt(d.getElementById('modules').value);

                companies.push({ name, ubication, time, correo, nit, status, modules });
                getCompanies();
            }
        });
    }

    
    export function exit(buttonExitID){
        let buttonExit = d.getElementById(buttonExitID);

        buttonExit.addEventListener("click",e=>{
            routesGo('../../../../src/config/templates/login.html')
        })
    }

    export function switchTab(tab){
        const tabContents = d.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        const selectedContent = d.querySelector(`#${tab}-content`);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
        const tabLinks = d.querySelectorAll('.tab-link');
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });
        const selectedLink = d.querySelector(`.button${tab}`);
        if (selectedLink) {
            selectedLink.classList.add('active');
        }

        const homeButton = d.querySelector('.buttonHome');
        const categoriesButton = d.querySelector('.buttonCategories');
        
    }


    export function searchCompany(inputId) {
        const input = document.getElementById(inputId);
        const scrollContainer = document.getElementById('scrollContainer');
        const template = document.getElementById('template-card');
    
        input.addEventListener("input", () => {
            const valueInput = input.value.toLowerCase().trim();
            const filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(valueInput));
    
            if (filteredCompanies.length > 0) {
                const fragment = document.createDocumentFragment();
                scrollContainer.innerHTML = "";
    
                filteredCompanies.forEach(company => {
                    let clone = template.content.cloneNode(true);
                    clone.querySelector('#card__name').textContent = company.name;
                    clone.querySelector('#card__ubication').textContent = company.ubication;
                    clone.querySelector('#card__time').textContent = company.time;
                    clone.querySelector('#card__email').textContent = company.correo;
                    clone.querySelector('#card__nit').textContent = company.nit;
                    clone.querySelector('#card__modules').textContent = company.modules;
    
                    let activeElement = clone.querySelector('#card__active');
                    if (company.status == true) {
                        activeElement.innerHTML = 'Active' + '<i class="fa-solid fa-check checkGood"></i>';
                    } else {
                        activeElement.innerHTML = 'Inactive' + '<i class="fa-solid fa-circle-xmark checkFalse"></i>';
                    }
    
                    fragment.appendChild(clone);
                });
    
                scrollContainer.appendChild(fragment);
            } else {
                const contentNot = `
                  '<img class="imgPlanta" src="../static/assets/animationPlanta.png">',
                  '<span class="text">No hay coincidencias</span>'
                `
                scrollContainer.classList.add('flex');
                scrollContainer.innerHTML = contentNot;
                scrollContainer.querySelector('.imgPlanta').classList.add('imgPlanta');
              }
              

            ;
        });
    }

    export function getCompanies(templateID, scrollContainerID) {
        let template = d.getElementById(templateID).content.cloneNode(true);
        let chartView = d.querySelector(scrollContainerID);
        let fragment = d.createDocumentFragment();

        chartView.innerHTML = '';

        companies.forEach(company => {
            let clone = template.cloneNode(true);
            clone.querySelector('.nameValue').textContent = company.name;
            clone.querySelector('.nitValue').textContent = company.nit;
            fragment.appendChild(clone);
        });

        chartView.appendChild(fragment);
    }

    export function addModule(buttonAddMethod){
        const buttonsModule = d.querySelectorAll(buttonAddMethod);
    
        buttonsModule.forEach(button => {
            button.addEventListener("click", e => {
                const form = `
                    <div class="flex">
                        <select>
                            <option>Modulo 1</option>
                            <option>Modulo 2</option>
                            <option>Modulo 3</option>
                            <option>Modulo 4</option>
                        </select>
                    </div>
                `;
    
                Swal.fire({
                    title: 'Add new module',
                    html: form,
                    showCancelButton: true,
                    confirmButtonText: 'Add module',
                    cancelButtonText: 'Cancel',
                    showLoaderOnConfirm: true,
                    preConfirm: () => {
                        const selectedCompanyIndex = 0; 
                        const selectedCompany = companies[selectedCompanyIndex];
                        
                        selectedCompany.modules++;
    
                        getCompanies();
                    }
                });
            });
        });
    }
    


    switchTab('Home');









