
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


    const empleoyees = [
        {
            name: "Mauricio",
            lastName: "Molina",
            time: "1 year",
            correo: "maupena9@gmail.com",
            cc: "1044695644",
            status: true,
            salary: 10000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: true,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: true,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: true,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: false,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: false,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: true,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: true,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: true,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: true,
            salary: 20000000
        },
        {
            name: "Gionanny",
            lastName: "Cacua",
            time: "2 year",
            correo: "GiovannyCacua@gmail.com",
            cc: "1133706755",
            status: true,
            salary: 20000000
        }
    ]

    const customers = [
        {
            name: "Mauricio",
            lastName: "Molina",
            address: "Calle 64B #80 - 90",
            correo: "maupena9@gmail.com",
            cc: "1044695644",
            phone: "3008236761",
            shopping: 50
        },
        {
            name: "Breiner",
            lastName: "Sarmiento",
            address: "Calle 24B #40 - 50",
            correo: "breiner@gmail.com",
            cc: "1044612342",
            phone: "3008566961",
            shopping: 30
        },
    ]


    const products = [
        {
            product: "Samsung Galaxy S22",
            stock: 10,
            mStock: 5,
            supplier: "Best Buy Co.Inc",
            code: "PROD-5678-XYZ",
            price: 2200000,
            selling: 3300000
        },
        {
            product: "Samsung Galaxy S22",
            stock: 10,
            mStock: 5,
            supplier: "Best Buy Co.Inc",
            code: "PROD-5678-XYZ",
            price: 2200000,
            selling: 3300000
        },
        {
            product: "Samsung Galaxy S22",
            stock: 10,
            mStock: 5,
            supplier: "Best Buy Co.Inc",
            code: "PROD-5678-XYZ",
            price: 2200000,
            selling: 3300000
        },
        {
            product: "Samsung Galaxy S22",
            stock: 10,
            mStock: 5,
            supplier: "Best Buy Co.Inc",
            code: "PROD-5678-XYZ",
            price: 2200000,
            selling: 3300000
        },
        {
            product: "Samsung Galaxy S22",
            stock: 10,
            mStock: 5,
            supplier: "Best Buy Co.Inc",
            code: "PROD-5678-XYZ",
            price: 2200000,
            selling: 3300000
        },
        
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

    export function getEmpleoyees(templateID, scrollContainerID) {
        let template = document.getElementById(templateID).content.cloneNode(true);
        let fragment = document.createDocumentFragment();
        let scrollContainer = document.getElementById(scrollContainerID);
        
        empleoyees.forEach(empleoyee => {
            let clone = template.cloneNode(true);
            clone.querySelector('#card__nameEmpleoyee').textContent = empleoyee.name;
            clone.querySelector('#card__lastNameEmpleoyee').textContent = empleoyee.lastName;
            clone.querySelector('#card__timeEmpleoyee').textContent = empleoyee.time;
            clone.querySelector('#card__emailEmpleoyee').textContent = empleoyee.correo;
            clone.querySelector('#card__ccEmpleoyee').textContent = empleoyee.cc;
            clone.querySelector('#card__salaryEmpleoyee').textContent = empleoyee.salary;
    
            let activeElement = clone.querySelector('#card__activeEmpleoyee');
            if (empleoyee.status == true) {
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

    export function getCustomers(templateID, scrollContainerID) {
        let template = document.getElementById(templateID).content.cloneNode(true);
        let fragment = document.createDocumentFragment();
        let scrollContainer = document.getElementById(scrollContainerID);
        
        customers.forEach(customer=> {
            let clone = template.cloneNode(true);
            clone.querySelector('#card__nameCustomers').textContent = customer.name;
            clone.querySelector('#card__lastNameCustomers').textContent = customer.lastName;
            clone.querySelector('#card__addressCustomers').textContent = customer.address;
            clone.querySelector('#card__emailCustomers').textContent = customer.correo;
            clone.querySelector('#card__ccCustomers').textContent = customer.cc;
            clone.querySelector('#card__phoneCustomers').textContent = customer.phone;
            clone.querySelector('#card__shoppingCustomers').textContent = customer.shopping;
    
    
            fragment.appendChild(clone);
        });

        scrollContainer.innerHTML = '';
        scrollContainer.appendChild(fragment);
    

        return scrollContainer;
    }

    export function getProducts(templateID, scrollContainerID) {
        let template = document.getElementById(templateID).content.cloneNode(true);
        let fragment = document.createDocumentFragment();
        let scrollContainer = document.getElementById(scrollContainerID);
        
        products.forEach(product=> {
            let clone = template.cloneNode(true);
            clone.querySelector('#card__product').textContent = product.product;
            clone.querySelector('#card__stock').textContent = product.stock;
            clone.querySelector('#card__mStock').textContent = product.mStock;
            clone.querySelector('#card__supplier').textContent = product.supplier;
            clone.querySelector('#card__code').textContent = product.code;
            clone.querySelector('#card__price').textContent = product.price;
            clone.querySelector('#card__selling').textContent = product.selling;
    
    
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

    export function showNewEmpleoyeeForm() {

        const form = `
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="lastName">Lastname:</label>
                <input type="text" id="lastName" name="lastName"><br><br>
                <label for="cc">CC:</label>
                <input type="text" id="cc" name="cc"><br><br>
                <label for="correo">Correo:</label>
                <input type="text" id="correo" name="correo"><br><br>
            </div>
        `;

        Swal.fire({
            title: 'New Empleoyee',
            html: form,
            showCancelButton: true,
            confirmButtonText: 'Create Empleoyee',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true,
            customClass: {
                confirmButton: 'confirmButton',
            },
            preConfirm: () => {
                const name = d.getElementById('name').value;
                const lastname = d.getElementById('lastName').value;
                const cc = d.getElementById('cc').value;
                const correo = d.getElementById('correo').value;

                empleoyees.push({ name, lastname, cc, correo});
                getCompanies();
            }
        });
    }

    export function showNewProductForm() {

        const form = `
        <div class="flex">
            <div class="containerGrid">
                <div class="containerData">
                    <div class="input-container">
                        <label for="product">Product:</label>
                        <input type="text" id="name" name="product">
                    </div>
                    <div class="input-container">
                        <label for="code">Code:</label>
                        <input type="text" id="code" name="code">
                    </div>
                    <div class="input-container">
                        <label for="stock">Stock:</label>
                        <input type="text" id="stock" name="stock">
                    </div>
                    <div class="input-container">
                        <label for="price">Price:</label>
                        <input type="text" id="price" name="price">
                    </div>
                    <div class="input-container">
                        <label for="mStick">M-Stick-Level:</label>
                        <input type="text" id="mStick" name="mStick">
                    </div>
                    <div class="input-container">
                        <label for="supplier">Supplier:</label>
                        <input type="text" id="supplier" name="supplier">
                    </div>
                    <div class="input-container file-input">
                        <label for="img">Image:</label>
                        <input type="file" id="img" name="img" accept="image/*" capture="camera">
                        <button class="file-button">Select Image</button>
                        <input type="text" id="img-path" readonly>
                    </div>
                    <div class="input-container">
                        <label for="iva">IVA:</label>
                        <input type="checkbox" id="iva" name="iva">
                    </div>
                </div>
            </div>
        </div>
        `;

        Swal.fire({
            title: 'New Product',
            html: form,
            showCancelButton: true,
            confirmButtonText: 'Add product',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true,
            customClass: {
                confirmButton: 'confirmButton',
            },
            preConfirm: () => {
                const name = d.getElementById('name').value;
                const lastname = d.getElementById('lastName').value;
                const cc = d.getElementById('cc').value;
                const correo = d.getElementById('correo').value;
                const imgPath = d.getElementById('img-path').value;
    
                if (!imgPath) {
                    Swal.showValidationMessage(`Please select an image for the product.`);
                    return false;
                }
            }
        });
    }

    function setRouteImage(){
        const imgInput = document.getElementById('img');
        const imgPath = document.getElementById('img-path');

        imgInput.addEventListener('change', () => {
            if (imgInput.files.length > 0) {
                imgPath.value = imgInput.files[0].name;
            } else {
                imgPath.value = '';
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
        
        
    }


    export function searchCompany(inputId) {
        const input = document.getElementById(inputId);
        const scrollContainer = document.getElementById('scrollContainer');
        const template = document.getElementById('template-card');
    
        input.addEventListener("input", () => {
            const valueInput = input.value.toLowerCase().trim();
            const filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(valueInput));
    
            if (filteredCompanies.length > 0) {
                scrollContainer.classList.remove('flex');
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

    export function showUserRole() {
        const userRole = localStorage.getItem('userRole');
        const userRoleSpan = document.getElementById('userRole');
        if(userRole === 'A'){
            userRoleSpan.textContent = 'You are administrator' || 'Guest';
            switchTab('Home');
            showItems('Home','Categories');

        }else if(userRole === 'C'){
            userRoleSpan.textContent = 'You are a company' || 'Guest'; 
            switchTab('Empleoyees');
            showItems('Empleoyees','Customers','Products');
        }else{
            let buttonNewCustomers = d.getElementById('buttonNewCustomers');
            buttonNewCustomers.style.display = 'block'
            userRoleSpan.textContent = 'You are an employee' || 'Guest';
            switchTab('Customers');
            showItems('Customers','Products','Shop');
        }
    };

    function showItems(...tabs) {
        const tabLinks = document.querySelectorAll('.tab-link');
        tabLinks.forEach(tabLink => {
            tabLink.style.display = 'none';
        });
    
        tabs.forEach(tab => {
            const tabItem = document.querySelector(`.button${tab}`);
            if (tabItem) {
                tabItem.style.display = 'flex';
            }
        });
    };

    
    




    const form = document.getElementById('loginForm');











