from config.db import db, ma, app
from .AdministradorModels import Administrador
from .Empresa_AdminModels import Empresa_Admin
from .UsuarioModels import Usuario

#BD Maestra
class Empresa(db.Model):
    __tablename__ = "Tb_Empresa"

    id_Empresa = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Empresa = db.Column(db.String(50))
    Nic_Empresa = db.colummn(db.Integer(20))
    Correo_Empresa = db.columm(db.String(50))

    #Relaciones
    Tb_Administrador = db.relationship("Administrador", secondary="Tb_Empresa_Admin", back_populates="Tb_Empresa")
    R_usuario = db.relationship('Usuario', backref = 'empresa', lazy = True) #uno a Muchos
    R_Productos = db.relationship('Usuario', backref = 'empresa', lazy = True) #uno a Muchos
    
    
    def __init__(self, id_Empresa, Nombre_Empresa, Nic_Empresa, Correo_Empresa):
        self.id_Empresa = id_Empresa
        self.Nombre_Empresa = Nombre_Empresa
        self.Nic_Empresa = Nic_Empresa
        self.Correo_Empresa = Correo_Empresa

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Empresa', 'Nombre_Empresa', 'Nic_Empresa', 'Correo_Empresa')
