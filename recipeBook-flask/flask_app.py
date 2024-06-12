
# A very simple Flask Hello World app for you to get started with...
#flask --app flask_app.py run
#run virtual enviroment     source venv/bin/activate 
from flask import Flask,render_template,jsonify
from flask_cors import CORS



app = Flask(__name__)
cors = CORS(app,origins='*')

@app.route('/')
def hello_world():
    return "hello"

@app.route('/fakedata/<searchQuery>')
def fakeData(searchQuery):
    return jsonify(
    [{
    "name": "chicken sauce",
    "rating":"4",
    "id": 1
    },
    {
    "name": "chicken pesto",
    "rating":"2",
    "id":2
    },
    {
    "name": "blueberry tart",
    "rating":"5",
    "id": 3
    },
    {
    "name": "red bean bun",
    "rating":"3",
    "id": 4
    },
    ]
    )


@app.route('/recipe/<recipeID>')
def indvRecipe(recipeID):
    return jsonify({
        "name":"chicken sauce",
        "ingredients": ["chicken broth","cream of mushroom","chicken"],
        "quantity": ["4","2","1"],
        "units" : ["cups","cans","lb"],
        "instructions": """do this and this and that 
                            
        
        """,
        "rating" : "5"
    })

if __name__ == "__main__":
    app.run(debug = True ,port= 5000)

