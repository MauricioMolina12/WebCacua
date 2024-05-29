from flask import Blueprint, render_template, request, json, jsonify, redirect, url_for, session
from models.UsuarioModels import Usuario, UsersSchema
from config.db import db, ma, app

Empresa_Contro = Blueprint('SignIn', __name__)


@Empresa_Contro.route("/AnadirE", methods=["POST"])
def AnadirEmpresa():
    pass

@Empresa_Contro.route("/HomeEmpresa", endpoint = 'ButtonIn')
def BuscarEmpresa():
    return render_template('homePage.html')

@Empresa_Contro.route("/HomeUser", endpoint = 'ButtonIn')
def ButtonIn():
    return render_template('homePage.html')
