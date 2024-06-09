from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

# Inicialización de SQLAlchemy y Marshmallow
db = SQLAlchemy()
ma = Marshmallow()

def create_app():
    app = Flask(__name__)

    # Configuración de la base de datos
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/innovashopweb'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.secret_key = "41E5653FC7AEB894026D6BB7B2DB7F65902B454945FA8FD65A6327047B5277FB"

    # Inicialización de SQLAlchemy y Marshmallow
    db.init_app(app)
    ma.init_app(app)

    with app.app_context():
        db.create_all()

    return app, db, ma


# app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/innovashopweb'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# app.secret_key = "41E5653FC7AEB894026D6BB7B2DB7F65902B454945FA8FD65A6327047B5277FB"

# db = SQLAlchemy(app)
# ma = Marshmallow(app)