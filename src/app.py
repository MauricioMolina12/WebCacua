from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')  #Creo la ruta principal de mi programa mediante render template
def index():
    return render_template('index.html')

#Obtener un peticion
def query_string():
    print(request)
    print(request.args)
    print(request.args.get('param1'))
    return "Ok"

if __name__ == '__main__':
    app.add_url_rule('/query_string', view_func= query_string)
    app.run(debug=True)