from config.db import create_app

app, db, ma = create_app()

#BD Maestra
class Empresa(db.Model):
    __tablename__ = "Tb_Empresa"

    id_Empresa = db.Column(db.Integer, primary_key = True, autoincrement=True, nullable=False)
    Nombre_Empresa = db.Column(db.String(50))
    Nic_Empresa = db.Column(db.Integer)
    Ubicacion = db.Column(db.String(60))
    Correo_Empresa = db.Column(db.String(50))
    Fecha_Inicio = db.Column(db.String(10))
    Fecha_Final = db.Column(db.String(10))
    Modulo = db.Column(db.Integer)
    Status = db.Column(db.Boolean)
    
    def __init__(self, id_Empresa, Nombre_Empresa, Nic_Empresa, Ubicacion_Empresa,Correo_Empresa, Fecha_Inicio, Fecha_Final, Modulo, Status):
        self.id_Empresa = id_Empresa
        self.Nombre_Empresa = Nombre_Empresa
        self.Nic_Empresa = Nic_Empresa
        self.Ubicacion_Empresa = Ubicacion_Empresa
        self.Correo_Empresa = Correo_Empresa
        self.Fecha_Inicio = Fecha_Inicio
        self.Fecha_Final = Fecha_Final
        self.Modulo = Modulo
        self.Status = Status

with app.app_context():
    db.create_all()

class Empresa_Schema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Empresa
        load_instance = True

class EmpresaSchema(ma.Schema):
    class Meta:
        fields = ('id_Empresa', 'Nombre_Empresa', 'Nic_Empresa', 'Ubicacion_Empresa','Correo_Empresa', 'Fecha_Inicio', 'Fecha_Final', 'Modulo', 'Status')
