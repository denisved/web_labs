from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'crud.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)


class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, unique=False)
    description = db.Column(db.String, unique=False)
    price = db.Column(db.Integer, unique=False)

    def __init__(self, title, description, price):
        self.title = title
        self.description = description
        self.price = price


class CarSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description', 'price')


car_schema = CarSchema()
cars_schema = CarSchema(many=True)


@app.route("/car", methods=["POST"])
def add_car():
    data = CarSchema().load(request.json)
    new_car = Car(**data)

    db.session.add(new_car)
    db.session.commit()

    return car_schema.jsonify(new_car)


@app.route("/car", methods=["GET"])
def get_cars():
    all_cars = Car.query.all()
    result = cars_schema.dump(all_cars)
    return jsonify(result)


@app.route("/car/<id>", methods=["GET"])
def get_car(id):
    car = Car.query.get(id)

    if car is None:
        abort(404)

    return car_schema.jsonify(car)


@app.route("/car/<id>", methods=["PUT"])
def car_update(id):
    car = Car.query.get(id)

    if car is None:
        abort(404)

    title = request.json['title']
    description = request.json['description']
    price = request.json['price']

    car.title = title
    car.description = description
    car.price = price

    db.session.commit()
    return car_schema.jsonify(car)


@app.route("/car/<id>", methods=["DELETE"])
def car_delete(id):
    car = Car.query.get(id)

    if car is None:
        abort(404)

    db.session.delete(car)
    db.session.commit()

    return car_schema.jsonify(car)


if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)
