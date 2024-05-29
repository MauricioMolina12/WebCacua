from config.db import db, ma, app
from .ModuloModels import Modulos

#BD Maestra
class Empresa(db.Model):
    __tablename__ = "Tb_Empresa"

    id_Empresa = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Empresa = db.Column(db.String(50))
    Nic_Empresa = db.Column(db.Integer)
    Correo_Empresa = db.Column(db.String(50))
    Fecha_Inicio = db.Column(db.String(10))
    Fecha_Final = db.Column(db.String(10))
    id_Modulo = db.Column(db.Integer, db.ForeignKey('Tb_Modulos.id_Modulo'), nullable = False)
    
    def __init__(self, id_Empresa, Nombre_Empresa, Nic_Empresa, Correo_Empresa, Fecha_Inicio, Fecha_Final, id_Modulo):
        self.id_Empresa = id_Empresa
        self.Nombre_Empresa = Nombre_Empresa
        self.Nic_Empresa = Nic_Empresa
        self.Correo_Empresa = Correo_Empresa
        self.Fecha_Inicio = Fecha_Inicio
        self.Fecha_Final = Fecha_Final
        self.id_Modulo = id_Modulo

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Empresa', 'Nombre_Empresa', 'Nic_Empresa', 'Correo_Empresa', 'Fecha_Inicio', 'Fecha_Final', 'id_Modulo')
