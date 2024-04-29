


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
                window.location.href = '../../../../src/config/templates/homePage.html';
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
    
    