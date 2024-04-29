import { addUser } from './login.js';


const d = document

document.addEventListener("DOMContentLoaded", e => {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let isValid = true;

        let nameInput = d.getElementById('name'),
            emailInput = d.getElementById('email'),
            passwordInput = d.getElementById('password'),
            errorName = d.getElementById('name-error'),
            errorEmail = d.getElementById('email-error'),
            errorPassword = d.getElementById('password-error')

        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(nameInput.value.trim())) {
            errorName.textContent = 'Name must contain only letters and spaces';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            errorEmail.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (passwordInput.value.length < 8) {
            errorPassword.textContent = 'Password must be at least 8 characters long';
            isValid = false;
        }

        if (isValid) {
            const newUser = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value
            };

            addUser(newUser);


            Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso!',
                text: 'Te has registrado exitosamente.',
                showConfirmButton: false,
                timer: 2000
            });
            setTimeout(() => {
                window.location.href = "../../../../src/config/templates/homePage.html" 
            }, 2000);
        }
    });
});
