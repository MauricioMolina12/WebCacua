from config.db import db, ma, app
from .EmpresaModels import Empresa
from .VendedorModels import Vendedor
from .ClienteModels import Cliente
from .VentasModels import Ventas

#Muchos a uno 
class Usuario(db.Model):
    __tablename__ = "Tb_Usuarios"

    id_Usuario = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Usuario = db.Column(db.String(50))
    Apellido_Usuario = db.Column(db.String(50))
    CC_Usuario = db.Column(db.Integer(10))
    Correo_Usuario = db.Column(db.String(60))
    Telefono = db.column(db.Integer(10))
    Status_Rol = db.Column(db.Integer(1)) # 0 Usuario / 1 Empleado
    id_Empresa = db.Column(db.Integer, db.ForeignKey('Tb_Empresa.id_Empresa'), nullable = False)

    #Relaciones 
    R_Vendedor = db.relationship('Vendedor', backref='usuario', uselist=False) #uno a uno
    R_Cliente = db.relationship('Cliente', backref='cliente', uselist=False) #uno a uno
    R_VentaUser = db.relationship('Ventas', backref = 'venta', lazy = True) #uno a Muchos

    def __init__(self, id_Usuario, Nombre_Usuario, CC_Usuario, Telefono, Status_Rol, id_Empresa):
            self.id_Usuario = id_Usuario
            self.Nombre_Usuario = Nombre_Usuario
            self.CC_Usuario = CC_Usuario
            self.Telefono = Telefono
            self.Status_Rol = Status_Rol
            self.id_Empresa = id_Empresa

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Usuario','Nombre_Usuario', 'CC_Usuario', 'Telefono', 'Status_Rol', 'id_Empresa')
