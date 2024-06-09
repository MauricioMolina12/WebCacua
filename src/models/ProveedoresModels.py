from config.db import create_app
app, db, ma = create_app()

class Proveedores(db.Model):
    __tablename__ = "Tb_Proveedores"

    id_Proveedor = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Proveedor = db.Column(db.String(30))
    Nic_Proveedor = db.Column(db.Integer(15))
    Telefono = db.Column(db.Integer(10))
    Direccion_Proveedor = db.Column(db.String(30))


    def __init__(self, id_Proveedor, Nombre_Proveedor, Nic_Proveedor, Telefono, Direccion_Proveedor):
        self.id_Proveedor = id_Proveedor
        self.Nombre_Proveedor = Nombre_Proveedor
        self.Nic_Proveedor = Nic_Proveedor
        self.Telefono = Telefono
        self.Direccion_Proveedor = Direccion_Proveedor
    

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Proveedor','Nombre_Proveedor', 'Nic_Proveedor', 'Telefono', 'Direccion_Proveedor')