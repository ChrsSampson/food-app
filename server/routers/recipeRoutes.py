from flask import Blueprint, request, jsonify
from models.userModel import Recipe


GetAllRecipes = Blueprint('GetAllRecipes', __name__)
GetAllRecipes.route('/recipes', methods=['GET'])
def getAllRecipes():
    recipes = Recipe.query.all()
    output = []
    for recipe in recipes:
        recipe_data = {}
        recipe_data['id'] = recipe.id
        recipe_data['name'] = recipe.name
        recipe_data['ingredients'] = recipe.ingredients
        output.append(recipe_data)
    return jsonify({'recipes': output})

