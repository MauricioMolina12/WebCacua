from config.db import db, ma, app

#BD Maestra
class Empresa(db.Model):
    __tablename__ = "Tb_Empresa"

    id_Empresa = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Empresa = db.Column(db.String(50))
    Nic_Empresa = db.colummn(db.Integer(20))
    Correo_Empresa = db.columm(db.String(50))

    
    def __init__(self, id_Empresa, Nombre_Empresa, Nic_Empresa, Correo_Empresa):
        self.id_Empresa = id_Empresa
        self.Nombre_Empresa = Nombre_Empresa
        self.Nic_Empresa = Nic_Empresa
        self.Correo_Empresa = Correo_Empresa

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Empresa', 'Nombre_Empresa', 'Nic_Empresa', 'Correo_Empresa')
