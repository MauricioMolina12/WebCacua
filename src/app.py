from controllers.HomeControllers import index_home
from controllers.SignInControllers import SignIn
from controllers.SignUpControllers import SignUp
from controllers.AdminControllers import AdminControl
from controllers.EmpresaControllers import EmpresaControl
from config.db import create_app


# Crear la aplicación Flask y obtener la instancia de SQLAlchemy
app, db, ma = create_app()

# Registrar los blueprints
app.register_blueprint(index_home)
app.register_blueprint(SignIn)
app.register_blueprint(SignUp)
app.register_blueprint(AdminControl)
#app.register_blueprint(EmpresaControl)

if __name__ == "__main__":
    # Ejecutar la aplicación Flask
    app.run(debug=True)










# app = Flask(__name__,template_folder='config/templates', static_folder = 'config/static')

# app.register_blueprint(index_home)
# app.register_blueprint(SignIn)
# app.register_blueprint(SignUp)

# if app == "__main__":
#     app.run(debug= True)