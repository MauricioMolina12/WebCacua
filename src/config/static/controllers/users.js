


const d = document,
      w = window


      const users = [
        {
            email: "maupena9@gmail.com",
            password: "mauriciomolina1234",
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
                credentialsIncorrects.style.display = 'none';
                window.location.href = '../../../../src/config/templates/homePage.html';
            } else {
                credentialsIncorrects.style.display = 'block';
            }
        });
    }

    validateLogin()
    
    