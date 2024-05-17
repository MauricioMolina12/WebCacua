from config.db import db, ma, app
from .UsuarioModels import Usuario


class Cliente(db.Model):
    __tablename__ = "Tb_Cliente"

    id_Usuario = db.Column(db.Integer, db.ForeignKey('Tb_Tb_Usuarios.id_Usuario'), nullable=False, unique = True)
    N_Ventas = db.Column(db.Integer(4))
    Status = db.Column(db.Integer(2))

    def __init__(self, id_Usuario, N_Ventas, Status):
        self.id_Usuario = id_Usuario
        self.N_Ventas = N_Ventas
        self.Status = Status
            

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Usuario','N_Ventas', 'Status')