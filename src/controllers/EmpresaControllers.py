from flask import Blueprint, render_template, request, jsonify, redirect, url_for, session
from config.db import create_app
#from models.UsuarioModels import Usuario
#from models.VendedorModels import Vendedor

app, db, ma = create_app()

EmpresaControl = Blueprint('EmpresaControl', __name__)



