from config.db import create_app
from .ProductoModels import Producto
from .DescuentoModels import Descuento

app, db, ma = create_app()

class ProductoDescuento(db.Model):
    __tablename__ = "Tb_Producto_Descuento"

    id_Descuento = db.Column(db.Integer, db.ForeignKey('Tb_Productos.id_Producto') ,primary_key = True)
    id_Producto = db.Column(db.Integer, db.ForeignKey('Tb_Productos.id_Producto') ,primary_key = True)

    def __init__(self, id_Descuento, id_Producto):
        self.id_Descuento = id_Descuento
        self.id_Producto = id_Producto
         
with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Descuento', 'id_Producto')