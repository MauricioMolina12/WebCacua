from flask import Blueprint, render_template, request, jsonify, redirect, url_for, session
from models.UsuarioModels import Usuario, UsersSchema
from config.db import create_app
from werkzeug.security import generate_password_hash, check_password_hash

SignIn = Blueprint('SignIn', __name__)


@SignIn.route("/SignUp", endpoint = 'Sign_Up')
def Sign_Up():
    return render_template('signUp.html')

@SignIn.route("/HomeUser", endpoint = 'HomeUser')
def HomeUser():
    return render_template('homePage.html')

@SignIn.route("/auth/login", methods=["POST"])
def signin():
    data = request.get_json()
    username = data.get('correo')
    password = data.get('password')

    print(data)
    
    user = Usuario.query.filter_by(Correo_Usuario=username).first()
    user = Usuario.query.filter_by(Correo_Usuario=username, Contraseña=password).first()

    if not user:
        return jsonify({'message': 'Credenciales inválidas'}), 403
    
    # Guardar el usuario en la sesión
    session['user_id'] = user.id_Usuario
    session['role'] = user.Rol

    # Si las credenciales son válidas, construimos la respuesta JSON con los datos requeridos
    response_data = {
        'message': 'Inicio de sesión exitoso',
        'user_id': user.id_Usuario,
        'rol': user.Rol
    }
    return jsonify(response_data)

@SignIn.route('/logout/login', methods=['POST', 'GET'])
def logout():
    session.pop('user_id', None)
    session.pop('role', None)
    return redirect(url_for('SignIn.sign_in'))


@SignIn.route('/login', methods=['GET'])
def sign_in():
    return render_template('login.html')



