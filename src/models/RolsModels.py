from config.db import create_app
app, db, ma = create_app()

#BD Maestra
class Rols(db.Model):
    __tablename__ = "Tb_Rol"

    id_Rol = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)   #1 Admin, 2 Empresa, 3 Empleado, 4 Cliente
    Nombre_Rol = db.Column(db.String(50))
    Descripcion = db.Column(db.String(100))

    
    def __init__(self, id_Rol, Nombre_Modulo, Descripcion):
        self.id_Rol = id_Rol
        self.Nombre_Modulo = Nombre_Modulo
        self.Descripcion = Descripcion
        

with app.app_context():
    db.create_all()

class RolsSchema(ma.Schema):
    class Meta:
        fields = ('id_Rol', 'Nombre_Modulo', 'Descripcion')