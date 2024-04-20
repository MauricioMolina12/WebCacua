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
            name: "Mc Donalds",
            ubication: "Barranquilla,Atlantico",
            time: "4 month",
            correo: "McDonalds@gmail.com",
            nit: '800-653-24-43',
            status: false,
            modules: 0
        }
        
    ]

    function routesGo(route){
        w.location.href = route;
    }

    export function getData(templateID,scrollContainerID){
        let template = d.getElementById(templateID).content.cloneNode(true);
        var fragment = d.createDocumentFragment();
        var scrollContainer = d.getElementById(scrollContainerID);
        companies.forEach(company=>{
            //values 
            template.querySelector('#card__name').textContent = company.name;
            template.querySelector('#card__ubication').textContent = company.ubication;
            template.querySelector('#card__time').textContent = company.time;
            template.querySelector('#card__email').textContent = company.correo;
            template.querySelector('#card__nit').textContent = company.nit;
            if(company.status == true){
                template.querySelector('#card__active').innerHTML = 'Active' + '<i class="fa-solid fa-check checkGood"></i>';
            }else{
                template.querySelector('#card__active').innerHTML = 'Inactive' + '<i class="fa-solid fa-circle-xmark checkFalse"></i>';
            }
            template.querySelector('#card__modules').textContent = company.modules;
            let clone = template.cloneNode(true);
            fragment.appendChild(clone);
        })
        scrollContainer.appendChild(fragment);
        return companies;
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
        buttonCompany.addEventListener("click",showNewCompanyForm);
    }

    
    export function exit(buttonExitID){
        let buttonExit = d.getElementById(buttonExitID);

        buttonExit.addEventListener("click",e=>{
            routesGo('../../../../src/config/templates/index.html')
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
        const valueInput = input.value;
    
        input.addEventListener("input", () => {
            const filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(valueInput.toLowerCase()));
    
            if (filteredCompanies.length > 0) {
                const fragment = document.createDocumentFragment();
                filteredCompanies.forEach(company => {
                    let clone = template.cloneNode(true);
                    clone.querySelector('#card__name').textContent = company.name;
                    clone.querySelector('#card__ubication').textContent = company.ubication;
                    clone.querySelector('#card__time').textContent = company.time;
                    clone.querySelector('#card__email').textContent = company.correo;
                    clone.querySelector('#card__nit').textContent = company.nit;
                    if (company.status == true) {
                        clone.querySelector('#card__active').innerHTML = 'Active' + '<i class="fa-solid fa-check checkGood"></i>';
                    } else {
                        clone.querySelector('#card__active').innerHTML = 'Inactive' + '<i class="fa-solid fa-circle-xmark checkFalse"></i>';
                    }
                    clone.querySelector('#card__modules').textContent = company.modules;
                    fragment.appendChild(clone);
                });
                scrollContainer.innerHTML = "";
                scrollContainer.appendChild(fragment);
            } else {
                scrollContainer.innerHTML = '<span>No hay coincidencias</span>';
            }
        });
    }
    
    




    

    switchTab('Home');









