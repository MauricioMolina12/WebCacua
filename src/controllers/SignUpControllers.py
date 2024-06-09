from flask import Blueprint, render_template, request, json, jsonify, redirect, url_for
from models.UsuarioModels import Usuario
from config.db import create_app

app, db, ma = create_app()

SignUp = Blueprint('SignUp', __name__)

@SignUp.route("/login", endpoint = 'Sign_In', methods=['GET'])
def Sign_In():
    return render_template('login.html')

@SignUp.route("/Register", endpoint = 'ButtonRegister')
def ButtonRegister():
    usuario = request.form['Usuario']
    Correo = request.form['Correo']
    Password = request.form['Contrasena']

    new_Users = Usuario(Nombre_Usuario = usuario, Correo_Usuario = Correo, Contraseña = Password)

    db.session.add(new_Users)
    db.session.commit( )
    
    return "Registrado"