# Import flask and datetime module for showing date and time
from flask import Flask,jsonify,request
import datetime
from flask_cors import CORS
from textblob import TextBlob

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app)

# Route for seeing a data
@app.route('/data')
def get_time():

	# Returning an api for showing in reactjs
	return {
		'Name':"geek",
		"Age":"22",
		"Date":x,
		"programming":"python"
		}

@app.route("/abc", methods=["POST"])
def analyze_sentiment():
    data = request.get_json()
    print(data)
    return jsonify(data)

@app.route("/analyze",methods=["POST"])
def analyze():
	data = request.get_json()
	text = data["text"]
	blob = TextBlob(text)
	polarity = blob.sentiment.polarity
	subjectivity = blob.sentiment.subjectivity
	result = {
        'polarity': polarity,
        'subjectivity': subjectivity
    }
	
	return jsonify(result)

	
# Running app
if __name__ == '__main__':
	app.run(debug=True)
