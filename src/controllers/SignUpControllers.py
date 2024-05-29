from flask import Blueprint, render_template

SignUp = Blueprint('SignUp', __name__)


@SignUp.route("/login", endpoint = 'Sign_In')
def Sign_In():
    return render_template('login.html')

@SignUp.route("/Register", endpoint = 'ButtonRegister')
def ButtonRegister():
    return "Registrado"