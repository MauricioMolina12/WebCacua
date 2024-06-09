from config.db import create_app
from .ClienteModels import Cliente
from .ProductoModels import Producto

app, db, ma = create_app()

class Cotizacion(db.Model):
    __tablename__ = "Tb_Cotizacion"

    id_Cotizacion = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    id_Cliente = db.Column(db.Integer, db.ForeignKey('Tb_Cliente.id_Cliente'), nullable = False)
    id_Producto = db.Column(db.Integer, db.ForeignKey('Tb_Productos.id_Producto'), nullable = False)
    CantidadProducto = db.Column(db.Integer)
    ValorUnitario_Producto = db.Column(db.Float)
    ValorTotal_Cotizacion = db.Column(db.Float)

    def __init__(self, id_Cotizacion, id_Cliente, id_Producto, CantidadProducto, ValorUnitario_Producto, ValorTotal_Cotizacion):
        self.id_Cotizacion = id_Cotizacion
        self.id_Cliente = id_Cliente
        self.id_Producto = id_Producto
        self.CantidadProducto = CantidadProducto
        self.ValorUnitario_Producto = ValorUnitario_Producto
        self.ValorTotal_Cotizacion = ValorTotal_Cotizacion
         
with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Cotizacion', 'id_Cliente', 'id_Producto', 'CantidadProducto', 'ValorUnitario_Producto', 'ValorTotal_Cotizacion')