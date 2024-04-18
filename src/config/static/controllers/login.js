const d = document,
      w = window

export function validateLogin(emailInput,passwordInput,buttonLogin){

    const inputEmail = d.getElementById(emailInput).value,
          inputPassword = d.getElementById(passwordInput).value,
          loginButton = d.getElementById(buttonLogin),
          alert = d.getElementById('credentialsIncorrects');
    
    const users = [
        {
            email: "maupena9@gmail.com",
            password: "mauriciomolina1234"
        },
        {
            email: "giovannycacua@gmail.com",
            password: "cacua1234"
        }
    ]
    
    
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        let credentialsCorrect = false;
    
        users.forEach(user => {
            if (inputEmail === user.email.toLowerCase() && inputPassword === user.password.toLowerCase()) {
                credentialsCorrect = true;
                return;
            }
        });
        if (credentialsCorrect) {
                w.location.href = "../templates/homePage.html";
        } else {
            alert.classList.add('active')
            setTimeout(() => {
                alert.classList.remove('active')
            }, 20000);
        }
    });
    
}

