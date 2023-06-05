from flask import Flask

# test routes
from routers.testRoutes import serverStatusBlueprint

app = Flask(__name__)

# server status
app.register_blueprint(serverStatusBlueprint, url_prefix='/test/status')


if __name__ == '__main__':
    app.run(debug=True)