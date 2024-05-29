from flask import Blueprint, render_template, request, json, jsonify, redirect, url_for, session
from werkzeug.security import check_password_hash
from models.UsuarioModels import Usuario, UsersSchema
from models.RolsModels import Rols, RolsSchema
from config.db import db, ma, app

SignIn = Blueprint('SignIn', __name__)


@SignIn.route("/SignUp", endpoint = 'Sign_Up')
def Sign_Up():
    return render_template('signUp.html')

@SignIn.route("/HomeUser", endpoint = 'ButtonIn')
def ButtonIn():
    return render_template('homePage.html')

@SignIn.route("/signin", methods=["POST"])
def signin():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        user = Usuario.query.filter_by(username=username).first()

        if user and check_password_hash(user.password, password):
            session['user_id'] = user.id
            session['role'] = user.role.name

            return jsonify({"message": "Login successful", "role": user.role.name}), 200

        return jsonify({"message": "Invalid credentials"}), 401

    return render_template('login.html')

@SignIn.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    session.pop('role', None)
    return jsonify({"message": "Logged out successfully"}), 200