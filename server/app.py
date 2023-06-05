from os import environ
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# test routes
from routers.testRoutes import serverStatusBlueprint

app = Flask(__name__)

db = SQLAlchemy()

app.config["SQLALCHEMY_DATABASE_URI"] ='postgresql://postgres:postgres@localhost:5432/test'

db.init_app(app)

with app.app_context():
    db.create_all()

# server status
app.register_blueprint(serverStatusBlueprint, url_prefix='/test/status')


if __name__ == '__main__':
    app.run(debug=True)