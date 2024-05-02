
const d = document,
    w = window





//Data de cada rol

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
        correo: "Olimpica@gmail.com",
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
        name: "Breiner",
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

]
const empleoyeesShop = [
    
    {
        name: empleoyees.name,
        code: "#84-55877",
        selligP: 9900000,
        sale: "29/04/2024"
    },
    {
        name: empleoyees.name,
        code: "#85-52377",
        selligP: 7900000,
        sale: "30/04/2024"
    },

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
        price: 2000000,
        selling: 3300000,
        image: "../static/assets/s22.avif",
        codigoBarra: "../static/assets/Codabar2.jpg"

    },
    {
        product: "Samsung Galaxy S23",
        stock: 10,
        mStock: 5,
        supplier: "Best Buy Co.Inc",
        code: "PROD-5678-XYZ",
        price: 2200000,
        selling: 3300000,
        image: "../static/assets/s23.avif",
        codigoBarra: "../static/assets/EAN8.png"

    },
    {
        product: "Samsung Galaxy S24",
        stock: 10,
        mStock: 5,
        supplier: "Best Buy Co.Inc",
        code: "PROD-5678-XYZ",
        price: 2500000,
        selling: 3300000,
        image: "../static/assets/s24.webp",
        codigoBarra: "../static/assets/Codabar3.jpg"

    },
    {
        product: "Samsung Galaxy S25",
        stock: 10,
        mStock: 5,
        supplier: "Best Buy Co.Inc",
        code: "PROD-5678-XYZ",
        price: 3000000,
        selling: 3300000,
        image: "../static/assets/s25.jpg",
        codigoBarra: "../static/assets/Codabar4.jpg"


    },

]
const suppliers = [
    {
        supplier: "Best Buy Co. Inc",
        phone: "3002345678",
        nit: "1044695644",
        address: "Cl24 #8A-02"
    },

    {
        supplier: "Cacua Inc",
        phone: "3012315578",
        nit: "1035691644",
        address: "Cl21 #8A-02"
    },

]










// Funciones para obtener datos

export function getData(templateID, scrollContainerID) {
    let template = document.getElementById(templateID).content.cloneNode(true);
    let fragment = document.createDocumentFragment();
    let scrollContainer = document.getElementById(scrollContainerID);

    scrollContainer.innerHTML = '';


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

    scrollContainer.appendChild(fragment);


    return scrollContainer;
}

export function getEmpleoyees(templateIDEmpleoyees, scrollContainerIDEmpleoyees) {

    let template = document.getElementById(templateIDEmpleoyees).content.cloneNode(true);
    let fragment = document.createDocumentFragment();
    let scrollContainer = document.getElementById(scrollContainerIDEmpleoyees);

    scrollContainer.innerHTML = '';


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

    scrollContainer.appendChild(fragment);


    return scrollContainer;
}

export function getShop(templateID, scrollContainerID) {
    let template = document.getElementById(templateID).content.cloneNode(true);
    let fragment = document.createDocumentFragment();
    let scrollContainer = document.getElementById(scrollContainerID);


    empleoyeesShop.forEach(empleoyee => {
        let clone = template.cloneNode(true);
        clone.querySelector('#card__code').textContent = empleoyee.code;
        clone.querySelector('#card__selling').textContent = empleoyee.selligP;
        empleoyees.forEach(el=>{
            clone.querySelector('#card__empleoyee').textContent = el.name;
        })
        clone.querySelector('#card__sale').textContent = empleoyee.sale;

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

    customers.forEach(customer => {
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

    scrollContainer.innerHTML = '';


    products.forEach(product => {
        let clone = template.cloneNode(true);
        clone.querySelector('#card__product').textContent = product.product;
        clone.querySelector('#card__stock').textContent = product.stock;
        clone.querySelector('#card__mStock').textContent = product.mStock;
        clone.querySelector('#card__supplier').textContent = product.supplier;
        clone.querySelector('#card__code').textContent = product.code;
        clone.querySelector('#card__price').textContent = product.price;
        // clone.querySelector('#card__selling').textContent = product.selling;


        fragment.appendChild(clone);
    });

    scrollContainer.appendChild(fragment);


    return scrollContainer;
}

export function getProducts2(templateID, scrollContainerID) {
    let template = document.getElementById(templateID).content.cloneNode(true);
    let fragment = document.createDocumentFragment();
    let scrollContainer = document.getElementById(scrollContainerID);

    scrollContainer.innerHTML = '';


    products.forEach(product => {
        let clone = template.cloneNode(true);
        clone.querySelector('#image__product').src = product.image;
        clone.querySelector('#card__product').textContent = product.product;
        clone.querySelector('#card__code').textContent = product.code;
        clone.querySelector('#card__price').textContent = product.price;
        clone.querySelector('#card__stock').textContent = product.stock;


        fragment.appendChild(clone);
    });

    scrollContainer.appendChild(fragment);


    return scrollContainer;
}

export function getSuppliers(templateID, scrollContainerID) {
    let template = document.getElementById(templateID).content.cloneNode(true);
    let fragment = document.createDocumentFragment();
    let scrollContainer = document.getElementById(scrollContainerID);


    scrollContainer.innerHTML = '';


    suppliers.forEach(sup => {
        let clone = template.cloneNode(true);
        clone.querySelector('#card__supplier').textContent = sup.supplier;
        clone.querySelector('#card__phone__supplier').textContent = sup.phone;
        clone.querySelector('#card__nit__supplier').textContent = sup.nit;
        clone.querySelector('#card__address__supplier').textContent = sup.address;


        fragment.appendChild(clone);
    });

    scrollContainer.appendChild(fragment);


    return scrollContainer;
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







//Funciones para formularios de cada rol

export function showNewCompanyForm(templateID, scrollContainerID) {

    const form = `
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" style="padding:18px"><br><br>
                <label for="ubication">Ubication:</label>
                <input type="text" id="ubication" name="ubication" style="padding:18px"><br><br>
                <label for="time">Time:</label>
                <input type="text" id="time" name="time" style="padding:18px"><br><br>
                <label for="correo">Correo:</label>
                <input type="text" id="correo" name="correo" style="padding:18px"><br><br>
                <label for="nit">NIT:</label>
                <input type="text" id="nit" name="nit" style="padding:18px"><br><br>
                <label for="status">Status:</label>
                <select id="status" name="status" style="padding:18px">
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select><br><br>
                <label for="modules">Modules:</label>
                <input type="text" id="modules" name="modules" style="padding:18px"><br><br>
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
    }).then((result) => {
        if (result.isConfirmed) {
            const name = d.getElementById('name').value;
            const ubication = d.getElementById('ubication').value;
            const time = d.getElementById('time').value;
            const correo = d.getElementById('correo').value;
            const nit = d.getElementById('nit').value;
            const status = d.getElementById('status').value === 'true';
            const modules = parseInt(d.getElementById('modules').value);


            companies.push({ name, ubication, time, correo, nit, status, modules });

            Swal.fire({
                icon: 'success',
                title: 'Company Created',
                text: 'The new company has been created successfully.',
            });

            getData(templateID, scrollContainerID);
        }
    });
}

export function showNewEmpleoyeeForm(templateID, scrollContainerID) {

    const form = `
            <div>
                <label for="nameEmpleoyee">Name:</label>
                <input type="text" id="nameEmpleoyee" name="nameEmpleoyee" style="padding: 15px"><br><br>
                <label for="lastNameEmpleoyee">Lastname:</label>
                <input type="text" id="lastNameEmpleoyee" name="lastNameEmpleoyee" style="padding: 15px"><br><br>
                <label for="timeEmpleoyee">Time:</label>
                <input type="text" id="timeEmpleoyee" name="timeEmpleoyee" style="padding: 15px"><br><br>
                <label for="correoEmpleoyee">Correo:</label>
                <input type="text" id="correoEmpleoyee" name="correoEmpleoyee" style="padding: 15px"><br><br>
                <label for="ccEmpleoyee">CC:</label>
                <input type="text" id="ccEmpleoyee" name="ccEmpleoyee" style="padding: 15px"><br><br>
                <label for="statusEmpleoyee">Status:</label>
                <select id="statusEmpleoyee" style="padding: 15px">
                    <option>Active</option>
                    <option>Desactive</option>
                </select>
                <label for="salaryEmpleoyee">Salary:</label>
                <input type="text" id="salaryEmpleoyee" name="salaryEmpleoyee" style="padding: 15px"><br><br>
            </div>
        `;

    Swal.fire({
        title: 'New Employee',
        html: form,
        showCancelButton: true,
        confirmButtonText: 'Create Employee',
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
        customClass: {
            confirmButton: 'confirmButton',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const nameEmpleoyee = d.getElementById('nameEmpleoyee').value;
            const lastnameEmpleoyee = d.getElementById('lastNameEmpleoyee').value;
            const timeEmpleoyee = d.getElementById('timeEmpleoyee').value;
            const correoEmpleoyee = d.getElementById('correoEmpleoyee').value;
            const ccEmpleoyee = d.getElementById('ccEmpleoyee').value;
            const statusEmpleoyee = d.getElementById('statusEmpleoyee').value;
            const salaryEmpleoyee = d.getElementById('salaryEmpleoyee').value;


            empleoyees.push({ nameEmpleoyee, lastnameEmpleoyee, timeEmpleoyee, correoEmpleoyee, ccEmpleoyee, statusEmpleoyee, salaryEmpleoyee });


            Swal.fire({
                icon: 'success',
                title: 'Employee Created',
                text: 'The new employee has been created successfully.',
            });

            getEmpleoyees(templateIDEmpleoyees, scrollContainerIDEmpleoyees);

        }
    });
}


export function showNewProductForm() {

    const form = `
        <div style="display:flex; justify-content:center;">
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
                        <select id="supplier" style="padding:10px;">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div class="input-container">
                        <label for="category">Category:</label>
                        <select id="category" style="padding:10px;">
                            <option>category 1</option>
                            <option>category 2</option>
                            <option>category 3</option>
                        </select>
                    </div>
                    <div class="input-container">
                        <label for="img">Image:</label>
                        <input type="file" id="img" name="img" accept="image/*" capture="camera">
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
            confirmButton: '.confirmButton',
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


export function showNewCustomersForm(templateID, scrollContainerID) {
    const form = `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div class="input-container">
                             <label for="nameCustomers">Name:</label>
                             <input type="text" id="nameCustomers" name="nameCustomers">
                         </div>
                         <div class="input-container">
                             <label for="lastnameCustomers">Lastname:</label>
                             <input type="text" id="lastnameCustomers" name="lastnameCustomers">
                         </div>
                         <div class="input-container">
                             <label for="addressCustomers">Address:</label>
                             <input type="text" id="addressCustomers" name="addressCustomers">
                         </div>
                         <div class="input-container">
                             <label for="correoCustomers">Correo:</label>
                             <input type="text" id="correoCustomers" name="correoCustomers">
                         </div>
                         <div class="input-container">
                             <label for="ccCustomers">CC:</label>
                             <input type="text" id="ccCustomers" name="ccCustomers">
                         </div>
                         <div class="input-container">
                             <label for="phoneCustomers">Phone:</label>
                             <input type="text" id="phoneCustomers" name="phoneCustomers">
                         </div>
                         <div class="input-container">
                             <label for="purchasesCustomers">Purchases:</label>
                             <input type="text" id="purchasesCustomers" name="purchasesCustomers">
                         </div>
                    </div>
                `;

    Swal.fire({
        title: 'New Customer',
        html: form,
        showCancelButton: true,
        confirmButtonText: 'Create Customer',
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
        customClass: {
            confirmButton: 'confirmButton',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const nameCustomers = d.getElementById('nameCustomers').value;
            const lastnameCustomers = d.getElementById('lastnameCustomers').value;
            const addressCustomers = d.getElementById('addressCustomers').value;
            const correoCustomers = d.getElementById('correoCustomers').value;
            const ccCustomers = d.getElementById('ccCustomers').value;
            const phoneCustomers = d.getElementById('phoneCustomers').value;
            const purchasesCustomers = d.getElementById('purchasesCustomers').value;
            customers.push({ nameCustomers, lastnameCustomers, addressCustomers, correoCustomers, ccCustomers, phoneCustomers, purchasesCustomers });

            Swal.fire({
                icon: 'success',
                title: 'Customer Created',
                text: 'The new customer has been created successfully.',
            });

            getCustomers(templateID, scrollContainerID);
        }
    });
}

export function showNewSupplierForm(templateID, scrollContainerID) {


    const form = `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div class="input-container">
                     <label for="supplier">Supplier:</label>
                     <input type="text" id="supplier" name="supplier">
                 </div>
                 <div class="input-container">
                     <label for="phone">Number phone:</label>
                     <input type="text" id="phone" name="phone">
                 </div>
                 <div class="input-container">
                     <label for="nit">NIT:</label>
                     <input type="text" id="nit" name="nit">
                 </div>
                 <div class="input-container">
                     <label for="address">Address:</label>
                     <input type="text" id="address" name="address">
                 </div>
            </div>
        `;

    Swal.fire({
        title: 'New Supplier',
        html: form,
        showCancelButton: true,
        confirmButtonText: 'Create Company',
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
        customClass: {
            confirmButton: 'confirmButton',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const supplier = d.getElementById('supplier').value;
            const phone = d.getElementById('phone').value;
            const nit = d.getElementById('nit').value;
            const address = d.getElementById('address').value;
            supplier.push({ supplier, phone, nit, address });

            Swal.fire({
                icon: 'success',
                title: 'Supplier Created',
                text: 'The new supplier has been created successfully.',
            });

            getSuppliers(templateID, scrollContainerID);
        }
    });
}




//Funciones especificas

function routesGo(route) {
    w.location.href = route;
}


function setRouteImage() {
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


export function exit(buttonExitID) {
    let buttonExit = d.getElementById(buttonExitID);

    buttonExit.addEventListener("click", e => {
        routesGo('../../../../src/config/templates/login.html')
    })
}

export function switchTab(tab) {
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




//Funciones para buscar datos

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

export function searchCompany2(inputId) {
    const input = document.getElementById(inputId);
    const scrollContainer = document.getElementById('scrollContainerView');
    const template = document.getElementById('template-card__second');

    input.addEventListener("input", () => {
        const valueInput = input.value.toLowerCase().trim();
        const filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(valueInput));

        if (filteredCompanies.length > 0) {
            scrollContainer.classList.remove('flex');
            const fragment = document.createDocumentFragment();
            scrollContainer.innerHTML = "";

            filteredCompanies.forEach(company => {
                let clone = template.content.cloneNode(true);
                clone.querySelector('#nameValue').textContent = company.name;
                clone.querySelector('#nitValue').textContent = company.nit;

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

export function searchEmpleoyees(inputId) {
    const input = document.getElementById(inputId);
    const scrollContainer = document.getElementById('scrollContainerEmpleoyee');
    const template = document.getElementById('template-card-Empleoyee');

    input.addEventListener("input", () => {
        const valueInput = input.value.toLowerCase().trim();
        const filteredEmpleoyees = empleoyees.filter(empleoyee => empleoyee.name.toLowerCase().includes(valueInput));

        if (filteredEmpleoyees.length > 0) {
            scrollContainer.classList.remove('flex');
            const fragment = document.createDocumentFragment();
            scrollContainer.innerHTML = "";

            filteredEmpleoyees.forEach(empleoyee => {
                let clone = template.content.cloneNode(true);
                clone.querySelector('#card__nameEmpleoyee').textContent = empleoyee.name;
                clone.querySelector('#card__lastNameEmpleoyee').textContent = empleoyee.lastName;
                clone.querySelector('#card__timeEmpleoyee').textContent = empleoyee.time;
                clone.querySelector('#card__emailEmpleoyee').textContent = empleoyee.correo;
                clone.querySelector('#card__ccEmpleoyee').textContent = empleoyee.cc;
                clone.querySelector('#card__salaryEmpleoyee').textContent = empleoyee.salary;

                let activeElement = clone.querySelector('#card__activeEmpleoyee');
                if (empleoyee.status == true) {
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

export function searchCustomers(inputId) {
    const input = document.getElementById(inputId);
    const scrollContainer = document.getElementById('scrollContainerCustomers');
    const template = document.getElementById('template-card-customers');

    input.addEventListener("input", () => {
        const valueInput = input.value.toLowerCase().trim();
        const filteredCustomers = customers.filter(customer => customer.name.toLowerCase().includes(valueInput));

        if (filteredCustomers.length > 0) {
            scrollContainer.classList.remove('flex');
            const fragment = document.createDocumentFragment();
            scrollContainer.innerHTML = "";

            filteredCustomers.forEach(customer => {
                let clone = template.content.cloneNode(true);
                clone.querySelector('#card__nameCustomers').textContent = customer.name;
                clone.querySelector('#card__lastNameCustomers').textContent = customer.lastName;
                clone.querySelector('#card__addressCustomers').textContent = customer.address;
                clone.querySelector('#card__emailCustomers').textContent = customer.correo;
                clone.querySelector('#card__ccCustomers').textContent = customer.cc;
                clone.querySelector('#card__phoneCustomers').textContent = customer.phone;
                clone.querySelector('#card__shoppingCustomers').textContent = customer.shopping;

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

export function searchProducts(inputId) {
    const input = document.getElementById(inputId);
    const scrollContainer = document.getElementById('scrollContainerProducts');
    const template = document.getElementById('template-card-products');

    input.addEventListener("input", () => {
        const valueInput = input.value.toLowerCase().trim();
        const filteredProducts = products.filter(product => product.product.toLowerCase().includes(valueInput));

        if (filteredProducts.length > 0) {
            scrollContainer.classList.remove('flex');
            const fragment = document.createDocumentFragment();
            scrollContainer.innerHTML = "";

            filteredProducts.forEach(product => {
                let clone = template.content.cloneNode(true);
                clone.querySelector('#card__product').textContent = product.product;
                clone.querySelector('#card__stock').textContent = product.stock;
                clone.querySelector('#card__mStock').textContent = product.mStock;
                clone.querySelector('#card__supplier').textContent = product.supplier;
                clone.querySelector('#card__code').textContent = product.code;
                clone.querySelector('#card__price').textContent = product.price;
                clone.querySelector('#card__selling').textContent = product.selling;

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


export function addModule(buttonAddMethod) {
    const buttonsModule = d.querySelectorAll(buttonAddMethod);

    buttonsModule.forEach(button => {
        button.addEventListener("click", e => {
            const form = `
                    <div class="flex" style="height: auto">
                        <select style="padding: 15px">
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


export function addProfit(buttonAddMethod) {
    const buttonsDisplay = document.querySelectorAll(buttonAddMethod);

    buttonsDisplay.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = products[index];
            const form = `
                <main class="main__container__product">
                    <section class="product_view">
                        <div class="product__name__container"><span class="product__name">Product</span></div>
                        <div class="product__value__container"><span class="product__value">${product.product}</span></div>
                    </section>
                    <section class="code_view">
                        <div class="code__name__container"><span class="code__name">Code</span></div>
                        <div class="code__value__container"><span class="code__value">${product.code}</span></div>
                    </section>
                    <section class="pricep_view">
                        <div class="pricep__name__container"><span class="pricep__name">Purchase Price</span></div>
                        <div class="pricep__value__container"><span class="pricep__value">${product.price}</span></div>
                    </section>
                    <section class="profit_view">
                        <div class="profit__name__container"><span class="profit__name">Profit</span></div>
                        <div class="profit__value__container"><input type="number" id="profitInput" class="profit__value"></div>
                    </section>
                    <section class="selling_price_view">
                        <div class="selling__name__container"><span class="selling__name">Selling Price</span></div>
                        <div class="selling__value__container"><span id="sellingPrice"></span></div>
                    </section>
                </main>
            `;

            Swal.fire({
                title: 'Profit margin',
                html: form,
                showCancelButton: true,
                confirmButtonText: 'Add profit margin',
                cancelButtonText: 'Cancel',
                showLoaderOnConfirm: true,
                didOpen: () => {
                    const profitInput = document.getElementById('profitInput');
                    const sellingPriceDisplay = document.getElementById('sellingPrice');

                    profitInput.addEventListener('input', e => {
                        const profit = parseFloat(e.target.value);
                        const purchasePrice = product.price;
                        const sellingPrice = purchasePrice * (1 + profit / 100);
                        sellingPriceDisplay.textContent = sellingPrice;
                    });
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Selling price',
                        text: 'The selling price has been asignated successfully.',
                    });
                }
            });
        });
    });
}

export function addDiscount(buttonAddMethod) {
    const buttonsDisplay = document.querySelectorAll(buttonAddMethod);

    buttonsDisplay.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = products[index];
            const form = `
                <main class="main__container__product">
                    <section class="product_view">
                        <div class="product__name__container"><span class="product__name">Product</span></div>
                        <div class="product__value__container"><span class="product__value">${product.product}</span></div>
                    </section>
                    <section class="code_view">
                        <div class="code__name__container"><span class="code__name">Code</span></div>
                        <div class="code__value__container"><span class="code__value">${product.code}</span></div>
                    </section>
                    <section class="pricep_view">
                        <div class="pricep__name__container"><span class="pricep__name">Purchase Price</span></div>
                        <div class="pricep__value__container"><span class="pricep__value">${product.price}</span></div>
                    </section>
                    <section class="profit_view">
                        <div class="profit__name__container"><span class="profit__name">Profit</span></div>
                        <div class="profit__value__container"><input type="number" id="profitInput" class="profit__value"></div>
                    </section>
                    <section class="selling_price_view">
                        <div class="selling__name__container"><span class="selling__name">Selling Price</span></div>
                        <div class="selling__value__container"><span id="sellingPrice"></span></div>
                    </section>
                    <section class="selling_price_view" style="padding:10px; height: 400px; display:flex; flex-direction: column; align-items: center; overflow-y: auto;">
                        <h2 style="font-style: normal;">Days of the weeks</h2>
                        <div style="width: 90%; height: auto; display: flex">
                            <span style="width: 50%;">Monday</span>
                            <input style="width: 50%;" type="checkbox">
                        </div>
                        <div style="width: 90%; height: auto; display: flex">
                            <span style="width: 50%;">Tuesday</span>
                            <input style="width: 50%;" type="checkbox">
                        </div>
                        <div style="width: 90%; height: auto; display: flex">
                            <span style="width: 50%;">Wednesday</span>
                            <input style="width: 50%;" type="checkbox">
                        </div>
                        <div style="width: 90%; height: auto; display: flex">
                            <span style="width: 50%;">Thursday</span>
                            <input style="width: 50%;" type="checkbox">
                        </div>
                        <div style="width: 90%; height: auto; display: flex">
                            <span style="width: 50%;">Friday</span>
                            <input style="width: 50%;" type="checkbox">
                        </div>
                        <div style="width: 90%; height: auto; display: flex">
                            <span style="width: 50%;">Saturday</span>
                            <input style="width: 50%;" type="checkbox">
                        </div>
                        
                    </section>
                </main>
            `;

            Swal.fire({
                title: 'Product discount',
                html: form,
                showCancelButton: true,
                confirmButtonText: 'Add profit margin',
                cancelButtonText: 'Cancel',
                showLoaderOnConfirm: true,
                didOpen: () => {
                    const profitInput = document.getElementById('profitInput');
                    const sellingPriceDisplay = document.getElementById('sellingPrice');

                    profitInput.addEventListener('input', e => {
                        const profit = parseFloat(e.target.value);
                        const purchasePrice = product.price;
                        const sellingPrice = purchasePrice * (1 + profit / 100);
                        sellingPriceDisplay.textContent = sellingPrice;
                    });
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Selling price',
                        text: 'The selling price has been asignated successfully.',
                    });
                }
            });
        });
    });
}

export function addDisplay(buttonAddMethod) {
    const buttonsDisplay = document.querySelectorAll(buttonAddMethod);

    buttonsDisplay.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = products[index];
            const form = `
                <main class="main__container__product">
                    <section class="product_view">
                        <div class="product__name__container"><span class="product__name">Product</span></div>
                        <div class="product__value__container"><span class="product__value">${product.product}</span></div>
                    </section>
                    <section class="code_view">
                        <div class="code__name__container"><span class="code__name">Code</span></div>
                        <div class="code__value__container"><span class="code__value">${product.code}</span></div>
                    </section>
                    <section class="pricep_view">
                        <div class="pricep__name__container"><span class="pricep__name">Purchase Price</span></div>
                        <div class="pricep__value__container"><span class="pricep__value">${product.price}</span></div>
                    </section>
                    <section class="pricep_view" style="display: flex; height: auto; padding: 20px">
                        <div class="child_last" style="width:50%";height: 20px>
                                <img src="${product.image}" alt="imagen del producto ${product.product}" style="max-width: 100%"; height: auto>
                        </div>
                        <div class="child_last" style="width:50%"; height: 20px>
                            <img src="${product.codigoBarra}" alt="codigo de barras" style="max-width: 100%"; height: auto>
                        </div>
                    </section>
                </main>
            `;

            Swal.fire({
                title: 'Display - barcode',
                html: form,
                showCancelButton: true,
                confirmButtonText: 'Add Display/Barcode',
                cancelButtonText: 'Cancel',
                showLoaderOnConfirm: true,
                didOpen: () => {
                    const profitInput = document.getElementById('profitInput');
                    const sellingPriceDisplay = document.getElementById('sellingPrice');

                    profitInput.addEventListener('input', e => {
                        const profit = parseFloat(e.target.value);
                        const purchasePrice = product.price;
                        const sellingPrice = purchasePrice * (1 + profit / 100);
                        sellingPriceDisplay.textContent = sellingPrice;
                    });
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Supplier Created',
                    });
                }
            });
        });
    });
}



export function showUserRole() {
    const userRole = localStorage.getItem('userRole');
    const userRoleSpan = document.getElementById('userRole');

    switch (userRole) {
        case 'A':
            userRoleSpan.textContent = 'You are administrator' || 'Guest';
            switchTab('Home');
            showItems('Home', 'Categories');
            break;
        case 'C':
            userRoleSpan.textContent = 'You are a company' || 'Guest';
            switchTab('Empleoyees');
            showItems('Empleoyees', 'Customers', 'Supplier');
            break;
        case 'E':
            let buttonNewCustomers = d.getElementById('buttonNewCustomers');
            buttonNewCustomers.style.display = 'block'
            userRoleSpan.textContent = 'You are an employee' || 'Guest';
            switchTab('Customers');
            showItems('Customers', 'Products', 'Shop');
            break;
        case 'cli':
            showColumn('columnBar')
            switchTab('Shopping');
            showItems('');
            break;
        default:
            console.error(error)
            break;
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

function showColumn(columnId) {
    const column = d.getElementById(columnId)

    column.style.width = "100%"
    column.style.height = "10vh"
    column.classList.add('desactive')

    d.body.style.display = 'block'
}







const form = document.getElementById('loginForm');











