from flask import Blueprint, render_template

SignIn = Blueprint('SignIn', __name__)


@SignIn.route("/SignUp", endpoint = 'Sign_Up')
def Sign_Up():
    return render_template('signUp.html')

@SignIn.route("/In", endpoint = 'ButtonIn')
def ButtonIn():
    return "Inicio"