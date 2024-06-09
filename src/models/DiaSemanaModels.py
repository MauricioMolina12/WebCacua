from config.db import create_app
app, db, ma = create_app()

class DiaSemana(db.Model):
    __tablename__ = "Tb_DiaSemana"

    id_DiaSemana = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Dia = db.Column(db.String(15)) #Dia semana


    def __init__(self, id_DiaSemana, Nombre_Dia):
        self.id_DiaSemana = id_DiaSemana
        self.Nombre_Dia = Nombre_Dia
            
with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_DiaSemana', 'Nombre_Dia')