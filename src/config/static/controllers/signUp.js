document.addEventListener("DOMContentLoaded", e => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío automático del formulario

        let isValid = true;

        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(nameInput.value.trim())) {
            nameError.textContent = 'Name must contain only letters and spaces';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            isValid = false;
        }

        if (isValid) {
            const newUser = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value
            };

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
