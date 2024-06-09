from config.db import create_app
from .DiaSemanaModels import DiaSemana

app, db, ma = create_app()
class Descuento(db.Model):
    __tablename__ = "Tb_Descuento"

    id_Descuento = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    id_DiaSemana = db.Column(db.Integer, db.ForeignKey('Tb_DiaSemana.id_DiaSemana'), nullable=False, unique = True) #Dia semana
    Descuento = db.Column(db.Integer)

    def __init__(self, id_Descuento, id_DiaSemana, Descuento):
        self.id_Descuento = id_Descuento
        self.id_DiaSemana = id_DiaSemana
        self.Descuento = Descuento
            
with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Descuento', 'id_DiaSemana', 'Descuento')