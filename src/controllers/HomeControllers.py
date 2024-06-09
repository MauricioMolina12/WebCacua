from flask import Blueprint, render_template

index_home = Blueprint('index_home', __name__)

@index_home.route("/")
def home():
    return render_template('index.html')

@index_home.route("/login", endpoint = 'Sign_In', methods=['GET'])
def Sign_In():
    return render_template('login.html')

@index_home.route("/SignUp", endpoint = 'Sign_Up')
def Sign_Up():
    return render_template('signUp.html')