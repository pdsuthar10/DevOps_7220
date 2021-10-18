from textblob import TextBlob
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app)


@app.route("/")
@app.route("/welcome")
def welcome():
    return "Hello from Python Sentiment Analysis Flask App!"


@app.route("/analyse/sentiment", methods=['POST'])
def analyse_sentiment():
    sentence = request.get_json()['sentence']
    polarity = TextBlob(sentence).sentences[0].polarity
    return jsonify(
        sentence=sentence,
        polarity=polarity
    )


# use + for spaces, i.e. http://localhost:5000/analyse?sentence=i+am+so+happy!
@app.route("/analyse", methods=['GET'])
def analyse_sentiment_get():
    sentence = request.args.get('sentence')
    polarity = TextBlob(sentence).sentences[0].polarity
    return str(polarity)


@app.route("/health")
@cross_origin()
def test_health():
    return "Hello from Python Sentiment Analysis Flask App! Hope you had fun today!"


@app.route("/testComms", methods=['GET'])
@cross_origin()
def test_comms():
    response = requests.get('http://java-backend-server:8080/health')
    return response.text


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)
