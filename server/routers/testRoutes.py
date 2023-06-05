from flask import Blueprint

serverStatusBlueprint = Blueprint('status', __name__)
@serverStatusBlueprint.route('/', methods=['GET'])
def upStatus():
    response = {
        'status': 200,
        'message': 'up'
    }
    return response
