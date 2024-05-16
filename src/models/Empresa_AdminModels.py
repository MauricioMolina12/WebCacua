from config.db import db, ma, app
from .AdministradorModels import Administrador
from .EmpresaModels import Empresa

#BD Maestra Terminar y averiguar las tablas de muchas a muchos
class Empresa_Admin(db.Model):
    __tablename__ = "Tb_Empresa_Admin"

    id_Admin = db.Column(db.Integer, db.ForeignKey(Administrador.id_Admin) ,primary_key = True)
    id_Empresa = db.Column(db.Integer, db.ForeignKey(Empresa.id_Empresa) ,primary_key = True)
    Fecha_Inicio = db.Column(db.String(10))
    Fecha_Final = db.colummn(db.Integer(10))
    Modulo = db.columm(db.String(50))

    
    def __init__(self, id_Admin, id_Empresa, Fecha_Inicio, Fecha_Final, Modulo):
        self.id_Admin = id_Admin
        self.id_Empresa = id_Empresa
        self.Fecha_Inicio = Fecha_Inicio
        self.Fecha_Final = Fecha_Final
        self.Modulo = Modulo

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Admin','id_Empresa', 'Fecha_Inicio', 'Fecha_Final', 'Modulo')
