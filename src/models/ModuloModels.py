from config.db import db, ma, app

#BD Maestra
class Modulos(db.Model):
    __tablename__ = "Tb_Modulos"

    id_Modulo = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Modulo = db.Column(db.String(50))
    Descripcion = db.Colummn(db.Integer(20))
    
    def __init__(self, id_Modulo, Nombre_Modulo, Descripcion):
        self.id_Modulo = id_Modulo
        self.Nombre_Modulo = Nombre_Modulo
        self.Descripcion = Descripcion

with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Modulo', 'Nombre_Modulo', 'Descripcion')
