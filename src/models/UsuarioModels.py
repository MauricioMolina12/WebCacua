from config.db import create_app
from .EmpresaModels import Empresa
from .RolsModels import Rols

app, db, ma = create_app()

#BD Maestra
class Usuario(db.Model):
    __tablename__ = "Tb_Usuarios"

    id_Usuario = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Usuario = db.Column(db.String(50))
    Apellido_Usuario = db.Column(db.String(50))
    Contraseña = db.Column(db.String(200))
    CC_Usuario = db.Column(db.Integer)
    Correo_Usuario = db.Column(db.String(60))
    Telefono = db.Column(db.Integer)
    Rol = db.Column(db.Integer, db.ForeignKey('Tb_Rol.id_Rol'))
    Status = db.Column(db.Boolean)
    

    def __init__(self, id_Usuario, Nombre_Usuario, Contraseña,CC_Usuario, Correo_Usuario,Telefono, Rol, Status):
            self.id_Usuario = id_Usuario
            self.Nombre_Usuario = Nombre_Usuario
            self.Contraseña = Contraseña
            self.CC_Usuario = CC_Usuario
            self.Correo_Usuario = Correo_Usuario
            self.Telefono = Telefono
            self.Rol = Rol
            self.Status = Status

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Usuario','Nombre_Usuario', 'Contraseña', 'CC_Usuario', 'Correo_Usuario', 'Telefono', 'Rol', 'Status')
