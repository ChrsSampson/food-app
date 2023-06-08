from flask import Blueprint, request, jsonify


LoginRoute = Blueprint('login', __name__)
@LoginRoute.route('/login', methods=['POST'])
def login():
    req = request.get_json()
    print(req)
    return jsonify(req)