from config.db import db, ma, app
from .UsuarioModels import Usuario

class Vendedor(db.Model):
    __tablename__ = "Tb_Vendedor"

    id_Vendedor = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    id_Usuario = db.Column(db.Integer, db.ForeignKey('Tb_Tb_Usuarios.id_Usuario'), nullable=False, unique = True)
    Salario = db.Column(db.Double(12))
    Fecha_Inicio = db.Column(db.String(10))
    Fecha_Fin = db.Column(db.String(10))
    Status = db.Column(db.Integer(1)) #Inactivo 0 - Activo 1

    def __init__(self, id_Vendedor, id_Usuario, Salario, Fecha_Inicio, Fecha_Fin, Status):
            self.id_Vendedor = id_Vendedor
            self.id_Usuario = id_Usuario
            self.Salario = Salario
            self.Fecha_Inicio = Fecha_Inicio
            self.Fecha_Fin = Fecha_Fin
            self.Status = Status
            

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Vendedor','id_Usuario','Salario', 'Fecha_Inicio', 'Fecha_Fin', 'Status')
