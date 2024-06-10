
    const form = document.querySelector('.main__form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const correo = document.getElementById('userInput').value.trim();
        const password = document.getElementById('passwordInput').value.trim();
    
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo, password })
        });
    
        const data = await response.json();
    
        if (response.ok) {
            localStorage.setItem('UserRole', data.rol);
            window.location.href = '/HomeUser';
        } else {
            document.getElementById('credentialsIncorrects').style.display = 'block';
        }
    });