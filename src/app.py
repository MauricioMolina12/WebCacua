from flask import Flask
from controllers.HomeControllers import index_home
from controllers.SignInControllers import SignIn
from controllers.SignUpControllers import SignUp
from config.db import db

app = Flask(__name__, template_folder='config/templates', static_folder = 'config/static')

app.register_blueprint(index_home)
app.register_blueprint(SignIn)
app.register_blueprint(SignUp)

if __name__ == "__main__":
    app.run(debug= True)