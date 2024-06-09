from config.db import create_app
from .VendedorModels import Vendedor
from .ClienteModels import Cliente

app, db, ma = create_app()
class Ventas(db.Model):
    __tablename__ = "Tb_Ventas"

    id_Venta = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    id_UsuarioVendedor = db.Column(db.Integer, db.ForeignKey('Tb_Vendedor.id_Vendedor'), nullable=False)
    id_UsuarioCliente = db.Column(db.Integer, db.ForeignKey('Tb_Cliente.id_Cliente'), nullable=False)
    Cantidad_Producto = db.Column(db.Integer(4))
    ValorTotal = db.Column(db.Double(8))


    def __init__(self, id_Venta, id_UsuarioVendedor, id_UsuarioCliente, Cantidad_Producto, ValorTotal):
        self.id_Venta = id_Venta
        self.id_UsuarioVendedor = id_UsuarioVendedor
        self.id_UsuarioCliente = id_UsuarioCliente
        self.Cantidad_Producto = Cantidad_Producto
        self.ValorTotal = ValorTotal
            
with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Venta','id_UsuarioVendedor', 'id_UsuarioCliente', 'Cantidad_Producto', 'ValorTotal')