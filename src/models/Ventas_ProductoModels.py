from config.db import create_app
from .VentasModels import Ventas
from .ProductoModels import Producto

app, db, ma = create_app()

class VentaProducto(db.Model):
    __tablename__ = "Tb_Ventas_Producto"

    id_Venta = db.Column(db.Integer, db.ForeignKey('Tb_Ventas.id_Venta') ,primary_key = True)
    id_Producto = db.Column(db.Integer, db.ForeignKey('Tb_Productos.id_Producto') ,primary_key = True)
    Valor_Unitario = db.Column(db.Double(8))
    
    def __init__(self, id_Venta, id_Producto, Valor_Unitario):
        self.id_Venta = id_Venta
        self.id_Producto = id_Producto
        self.Valor_Unitario = Valor_Unitario
 
with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Venta','id_Producto', 'Valor_Unitario')