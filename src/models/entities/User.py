from werkzeug.security import check_password_hash
from models.UsuarioModels import Usuario


@classmethod
def check_password(sefl, hashed_password, password):
    return check_password_hash(hashed_password, password)

