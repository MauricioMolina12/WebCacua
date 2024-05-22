from flask import Blueprint, render_template, request, json, jsonify, redirect, url_for, session
from models.UsuarioModels import Usuario, UsersSchema
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
    Correo = request.json['Correo_Usuario']
    password = request.json['Contraseña']
    user_ = db.session.query(Usuario.id_Usuario, Usuario.Nombre_Usuario, Usuario.).filter(Usuario.Correo_Usuario == Correo, Usuario.Contraseña == password).all()
    result = UsersSchema.dump(user_)

    if len(result)>0:
        usuario = result[0]

        jornada = db.session.query(Jornada.nombre).filter(Jornada.id == usuario['jornada']).all()
        jorn = jornadas_schema.dump(jornada) 

        ro = db.session.query(Rol.nombre ).filter(Rol.id == usuario['rol']).all()
        rol_result = roles_schema.dump(ro) 
        users()

        
        session['id_user'] = usuario['id']
        session['user'] = user
        session['nombre'] = usuario['nombre']
        session['password'] = password   
        session['rol'] = rol_result[0]['nombre']
        if session['rol'] != 'Administrador':
            session['formacion'] = usuario['nivel_formacion']
            session['jornada'] = jorn[0]['nombre']
            
        return jsonify({'mensaje': 'Bienvenido'})
    else:
        return jsonify({'error': 'Opss...'}), 401