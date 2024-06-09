from config.db import create_app
from .EmpresaModels import Empresa

app, db, ma = create_app()
class Producto(db.Model):
    __tablename__ = "Tb_Productos"

    id_Producto = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Producto = db.Column(db.String(30))
    imagen = db.Column(db.String(200)) #Ruta de la imagen
    IvaProducto = db.Column(db.Integer(2))
    PorcentajeGan = db.Column(db.integer(2))
    PrecioVenta = db.Column(db.Double(8))
    PrecioDescuento = db.Column(db.Double(8))
    id_Empresa = db.Column(db.Integer, db.ForeignKey('Tb_Empresa.id_Empresa'), nullable = False)


    def __init__(self, id_Producto, Nombre_Producto, imagen, IvaProducto, PorcentajeGan, PrecioVenta, PrecioDescuento, id_Empresa):
        self.id_Producto = id_Producto
        self.Nombre_Producto = Nombre_Producto
        self.imagen = imagen
        self.IvaProducto = IvaProducto
        self.PorcentajeGan = PorcentajeGan
        self.PrecioVenta = PrecioVenta
        self.PrecioDescuento = PrecioDescuento
        self.id_Empresa = id_Empresa
    

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Producto','Nombre_Producto', 'imagen', 'IvaProducto', 'PorcentajeGan', 'PrecioVenta', 'PrecioDescuento', 'id_Empresa')