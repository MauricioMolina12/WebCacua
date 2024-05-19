from config.db import db, ma, app
from .VentasModels import Ventas
from .ProductoModels import Producto

#BD Maestra
class VentaProducto(db.Model):
    __tablename__ = "Tb_Ventas_Producto"

    id_Venta = db.Column(db.Integer, db.ForeignKey('') ,primary_key = True)
    id_Producto = db.Column(db.Integer, db.ForeignKey('') ,primary_key = True)
    Valor = db.Column(db.String(10))
    Fecha_Final = db.colummn(db.Integer(10))
    Modulo = db.columm(db.String(50))

    
    def __init__(self, id_Admin, id_Empresa, Fecha_Inicio, Fecha_Final, Modulo):
        self.id_Admin = id_Admin
        self.id_Empresa = id_Empresa
        self.Fecha_Inicio = Fecha_Inicio
        self.Fecha_Final = Fecha_Final
        self.Modulo = Modulo

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Admin','id_Empresa', 'Fecha_Inicio', 'Fecha_Final', 'Modulo')