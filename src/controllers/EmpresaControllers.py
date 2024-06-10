from flask import Blueprint, render_template, request, jsonify, redirect, url_for, session
from config.db import create_app
from models.EmpresaModels import Empresa, EmpresaSchema
from models.UsuarioModels import Usuario, UsersSchema
from models.ModuloModels import Modulos
from models.Empresa_ModuloModels import Empresa_Modulo
from datetime import datetime

app, db, ma = create_app()

Empresa_Contro = Blueprint('SignIn', __name__)

@Empresa_Contro.route("/HomeEmpresa", endpoint = 'ButtonIn')
def BuscarEmpresa():
    return render_template('homePage.html')

@Empresa_Contro.route("/HomeEmpresa/AnadirEmpresa", methods=["POST"])
def AnadirEmpresa():

    fecha_actual = datetime.now()
    # Formatear solo la fecha como cadena de texto
    fecha_actual_str = fecha_actual.strftime('%Y-%m-%d')

    data = request.get_json()
    print(data)
    Nombre = data.get('name')
    Fecha_Final = data.get('time')
    Correo = data.get('correo')
    nit = data.get('nit')
    status = data.get('status')
    modules = data.get('modules')

    new_empresa = Empresa(
        id_Empresa=None,  # SQLAlchemy manejará el autoincremento
        Nombre_Empresa = Nombre,
        Nic_Empresa = nit,
        Correo_Empresa = Correo,
        Fecha_Inicio = fecha_actual_str,
        Fecha_Final = Fecha_Final,
        Status = status,
        Modulo = modules
    )

    new_Usuario = Usuario(
        id_Usuario = None
    )
    
    # Añadir la nueva compañía a la sesión y guardar en la base de datos
    db.session.add(new_empresa)
    db.session.commit()
    
    #Añadir nuevo usuario y guardar en la base de datos

    db.session.add(new_Usuario)
    db.session.commit()

    #Si todo es exitoso, devuelve una respuesta JSON con success=True
    return jsonify({"success": True, "message": "Company created successfully."})

@Empresa_Contro.route("/HomeUser", endpoint = 'ButtonIn')
def ButtonIn():
    return render_template('homePage.html')

@Empresa_Contro.route("/HomeEmpresa/AggModulos")
def AñadirModulos():
    pass