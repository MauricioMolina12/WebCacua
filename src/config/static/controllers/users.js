


const d = document,
      w = window


      const users = [
        {
            email: "Admin@gmail.com",
            password: "Admin123",
            scope: 'A'
        },
        {
            email: "KFCColombia@gmail.com",
            password: "KFC123456",
            scope: 'C'
        },
        {
            email: "giovannyCacua@gmail.com",
            password: "giovanny12345",
            scope: 'E'
        },
        {
            email: "Juan Valdez",
            password: 'juanvaldez123',
            scope: 'C'
        },
        {
            email: "elian",
            password: 'eliand123',
            scope: 'cli'
        }
        
    ]


    function validateLogin() {
        const form = d.querySelector('.main__form');
        const userInput = d.getElementById('userInput');
        const passwordInput = d.getElementById('passwordInput');
        const credentialsIncorrects = d.getElementById('credentialsIncorrects');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
    
            const enteredUser = userInput.value.trim();
            const enteredPassword = passwordInput.value.trim();

            const foundUser = users.find(user => user.email === enteredUser && user.password === enteredPassword);
    
            if (foundUser) {
                setUserRole(foundUser.scope,foundUser.email,foundUser.password);
                credentialsIncorrects.style.display = 'none';
                window.location.href = "/HomeUser";
            } else {
                credentialsIncorrects.style.display = 'block';
            }
        });
    }

    validateLogin()


    function setUserRole(role,email,password) {
        localStorage.setItem('userRole', role);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
    }

    //ChatGPT 
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('login-form');
    
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
    
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Redirigir basado en el rol del usuario
                if (data.role === 'admin') {
                    window.location.href = '/admin/dashboard';
                } else if (data.role === 'user') {
                    window.location.href = '/user/dashboard';
                }
            } else {
                alert(data.message);
            }
        });
    });
    
    
    