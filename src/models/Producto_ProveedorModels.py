from config.db import create_app
from .ProductoModels import Producto
from .ProveedoresModels import Proveedores
from .CategoriaModels import Categoria

app, db, ma = create_app()

class Producto_Proveedores(db.Model):
    __tablename__ = "Tb_Productos_Proveedores"

    id_Producto = db.Column(db.Integer, db.ForeignKey('Tb_Productos.id_Producto') ,primary_key = True)
    id_Proveedor = db.Column(db.Integer, db.ForeignKey('Tb_Proveedores.id_Proveedor') ,primary_key = True)
    PrecioCompra_Producto = db.Column(db.Float())
    CategoriaProducto = db.Column(db.Integer, db.ForeignKey('Tb_Categoria.id_Categoria') ,primary_key = True)

    def __init__(self, id_Producto, id_Proveedor, PrecioCompra_Producto, CategoriaProducto):
        self.id_Producto = id_Producto
        self.id_Proveedor = id_Proveedor
        self.PrecioCompra_Producto = PrecioCompra_Producto
        self.CategoriaProducto = CategoriaProducto

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Producto', 'id_Proveedor', 'PrecioCompra_Producto', 'CategoriaProducto')