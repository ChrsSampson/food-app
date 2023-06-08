from os import environ
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# test routes
from routers.testRoutes import serverStatusBlueprint
from routers.AuthRoutes import LoginRoute
from routers.recipeRoutes import GetAllRecipes

app = Flask(__name__)

db = SQLAlchemy()

# currenlty using a test db
app.config["SQLALCHEMY_DATABASE_URI"] ='postgresql+psycopg2://postgres:postgres@localhost:5432/test'

db.init_app(app)

with app.app_context():
    db.create_all()

# server status
app.register_blueprint(serverStatusBlueprint, url_prefix='/test/status')
app.register_blueprint(LoginRoute, url_prefix='/auth')
app.register_blueprint(GetAllRecipes, url_prefix='/recipes')


if __name__ == '__main__':
    app.run(debug=True)