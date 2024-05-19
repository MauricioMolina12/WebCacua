from config.db import db, ma, app
from .EmpresaModels import Empresa

class Producto(db.Model):
    __tablename__ = "Tb_Productos"

    id_Producto = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Producto = db.Column(db.String(30))
    imagen = db.Column(db.LargeBinary)
    IvaProducto = db.Column(db.Integer(2))
    PorcentajeGan = db.Column(db.integer(2))
    PrecioVenta = db.Column(db.Double)
    id_Empresa = db.Column(db.Integer, db.ForeignKey('Tb_Empresa.id_Empresa'), nullable = False)


    def __init__(self, id_Producto, Nombre_Producto, imagen, IvaProducto, PorcentajeGan, PrecioVenta, id_Empresa):
        self.id_Producto = id_Producto
        self.Nombre_Producto = Nombre_Producto
        self.imagen = imagen
        self.IvaProducto = IvaProducto
        self.PorcentajeGan = PorcentajeGan
        self.PrecioVenta = PrecioVenta
        self.id_Empresa = id_Empresa
    

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Producto','Nombre_Producto', 'imagen', 'IvaProducto', 'PorcentajeGan', 'PrecioVenta','id_Empresa')