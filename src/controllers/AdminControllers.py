from flask import Blueprint, render_template, request, jsonify, redirect, url_for, session
from config.db import create_app
from models.EmpresaModels import Empresa, EmpresaSchema
from models.UsuarioModels import Usuario
from models.ModuloModels import Modulos
from models.Empresa_ModuloModels import Empresa_Modulo
from datetime import datetime

app, db, ma = create_app()

AdminControl = Blueprint('AdminControl', __name__)

@AdminControl.route("/HomeEmpresa/Empresas", methods=["GET"])
def EmpresasRegistradas():
    empresas = Empresa.query.all()
    empresa_schema = EmpresaSchema(many=True)
    result = empresa_schema.dump(empresas)
    return jsonify(result)


@AdminControl.route("/HomeEmpresa/Search", endpoint='', methods=["GET"])
def BuscarEmpresa():
    query = request.args.get('query', '').lower().strip()
    companies = Empresa.query.filter(Empresa.Nombre_Empresa.ilike(f"%{query}%")).all()
    
    companies_data = [
        {
            'name': company.Nombre_Empresa,
            'ubication': company.Ubicacion,  # Suponiendo que tienes un campo Ubicacion
            'time': company.Fecha_Final.strftime('%d/%m/%Y'),  # Convertir fecha a cadena
            'correo': company.Correo_Empresa,
            'nit': company.Nic_Empresa,
            'status': company.Status,
            'modules': company.Modulo
        } for company in companies
    ]

    return jsonify(companies_data)


@AdminControl.route("/HomeEmpresa/AnadirEmpresa", methods=["POST"])
def AnadirEmpresa():

    fecha_actual = datetime.now()
    fecha_actual_str = fecha_actual.strftime('%Y-%m-%d')
    print("Fecha actual:", fecha_actual_str)

    data = request.get_json()
    print("Datos recibidos:", data)
    Nombre = data.get('name')
    Fecha_Final = data.get('time')
    Correo = data.get('correo')
    nit = data.get('nit')
    ubicacion = data.get('Ubication')
    status = data.get('status')
    modules = data.get('modules')

    new_empresa = Empresa(
        id_Empresa=None,  # SQLAlchemy manejará el autoincremento
        Nombre_Empresa=Nombre,
        Nic_Empresa=nit,
        Ubicacion = ubicacion,
        Correo_Empresa=Correo,
        Fecha_Inicio=fecha_actual_str,
        Fecha_Final=Fecha_Final,
        Status=status,
        Modulo=modules
    )

    new_Usuario = Usuario(
        id_Usuario=None,
        Nombre_Usuario=Nombre,
        Contraseña=nit,
        CC_Usuario=nit,
        Correo_Usuario=Correo,
        Rol=2,
        Telefono = None,
        Status = status
    )
    try:
        # Añadir la nueva compañía a la sesión y guardar en la base de datos
        db.session.add(new_empresa)
        db.session.commit()

        # Añadir nuevo usuario y guardar en la base de datos
        db.session.add(new_Usuario)
        db.session.commit()

        # Si todo es exitoso, devuelve una respuesta JSON con success=True
        return jsonify({"success": True, "message": "Company created successfully."})
    except Exception as e:
        print("Error al crear la empresa:", e)
        db.session.rollback()
        return jsonify({"success": False, "message": "There was an error creating the company."})


@AdminControl.route("/HomeEmpresa/AggModulos")
def AñadirModulos():
    pass
