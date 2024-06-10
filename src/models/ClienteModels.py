from config.db import create_app
from .UsuarioModels import Usuario
app, db, ma = create_app()


class Cliente(db.Model):
    __tablename__ = "Tb_Cliente"

    id_Cliente = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    id_Usuario = db.Column(db.Integer, db.ForeignKey('Tb_Tb_Usuarios.id_Usuario'), nullable=False, unique = True)
    N_Ventas = db.Column(db.Integer)
    Status = db.Column(db.Boolean)
    id_Empresa = db.Column(db.Integer, db.ForeignKey('Tb_Empresa.id_Empresa'), nullable = False)

    def __init__(self, id_Cliente, id_Usuario, N_Ventas, Status, id_Empresa):
        self.id_Cliente = id_Cliente
        self.id_Usuario = id_Usuario
        self.N_Ventas = N_Ventas
        self.Status = Status
        self.id_Empresa = id_Empresa
        

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Cliente','id_Usuario','N_Ventas', 'Status', 'id_Empresa')