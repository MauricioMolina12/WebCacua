from config.db import db, ma, app
from .EmpresaModels import Empresa
from .RolsModels import Rols

#BD Maestra
class Usuario(db.Model):
    __tablename__ = "Tb_Usuarios"

    id_Usuario = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Usuario = db.Column(db.String(50))
    Apellido_Usuario = db.Column(db.String(50))
    Contraseña = db.Column(db.String(50))
    CC_Usuario = db.Column(db.Integer)
    Correo_Usuario = db.Column(db.String(60))
    Telefono = db.Column(db.Integer)
    Rol = db.Column(db.Integer, db.ForeignKey('Tb_Rol.id_Rol'))
    Status = db.Column(db.Integer) # 1 - Activo / 0 - Inactivo
    id_Empresa = db.Column(db.Integer, db.ForeignKey('Tb_Empresa.id_Empresa'), nullable = False)

    def __init__(self, id_Usuario, Nombre_Usuario, Contraseña,CC_Usuario, Correo_Usuario,Telefono, Rol, Status, id_Empresa):
            self.id_Usuario = id_Usuario
            self.Nombre_Usuario = Nombre_Usuario
            self.Contraseña = Contraseña
            self.CC_Usuario = CC_Usuario
            self.Correo_Usuario = Correo_Usuario
            self.Telefono = Telefono
            self.Rol = Rol
            self.Status = Status
            self.id_Empresa = id_Empresa

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Usuario','Nombre_Usuario', 'Contraseña', 'CC_Usuario', 'Correo_Usuario', 'Telefono', 'Rol', 'Status', 'id_Empresa')
