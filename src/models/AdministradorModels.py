from config.db import db, ma, app

#BD Maestra
class Administrador(db.Model):
    __tablename__ = "Tb_Administrador"

    id_Admin = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Admin = db.Column(db.String(150))
    CC_Admin = db.colummn(db.Integer(10))
    Correo_Admin = db.columm(db.String(50))

    
    def __init__(self, id_Admin, Nombre_Admin, CC_Admin, Correo_Admin):
        self.id_Admin = id_Admin
        self.Nombre_Admin = Nombre_Admin
        self.CC_Admin = CC_Admin
        self.Correo_Admin = Correo_Admin

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Admin', 'Nombre_Admin', 'CC_Admin', 'Correo_Admin')
