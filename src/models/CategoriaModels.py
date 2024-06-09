from config.db import create_app
app, db, ma = create_app()
class Categoria(db.Model):
    __tablename__ = "Tb_Categoria"

    id_Categoria = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Categoria = db.Column(db.String(20))
    Descripcion = db.Column(db.String(80))

    def __init__(self, id_Categoria, Nombre_Categoria, Descripcion):
        self.id_Categoria = id_Categoria
        self.Nombre_Categoria = Nombre_Categoria
        self.Descripcion = Descripcion
         
with app.app_context():
    db.create_all()

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id_Categoria', 'Nombre_Categoria', 'Descripcion')