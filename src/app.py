from flask import Flask
from routes.Home import index_home
from routes.SignIn import SignIn
from routes.SignUp import SignUp

app = Flask(__name__, template_folder='config/templates', static_folder = 'config/static')

app.register_blueprint(index_home)
app.register_blueprint(SignIn)
app.register_blueprint(SignUp)

if __name__ == "__main__":
    app.run(debug= True)