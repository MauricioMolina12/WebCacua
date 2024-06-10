from config.db import create_app
from .EmpresaModels import Empresa
from .ModuloModels import Modulos
app, db, ma = create_app()

class Empresa_Modulo(db.Model):
    __tablename__ = "Tb_Empresa_Modulo"

    id_Empresa = db.Column(db.Integer, db.ForeignKey('Tb_Empresa.id_Empresa') ,primary_key = True)
    id_Modulo = db.Column(db.Integer, db.ForeignKey('Tb_Modulos.id_Modulo') ,primary_key = True)

    def __init__(self, id_Empresa, id_Modulo):
        self.id_Empresa = id_Empresa
        self.id_Modulo = id_Modulo

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Empresa', 'id_Modulo')