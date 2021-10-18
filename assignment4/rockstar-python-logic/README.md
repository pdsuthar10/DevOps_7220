# Logic Server for Sentiment Analysis UI - Flask

This is a flask server built for serving requests to find polarity of sentences and return with the JSON response.

## Steps to run:
1. Clone the repository `git@github.com:pdsuthar10/DevOps_7220.git`
2. Navigate to assignment 3 directory
    ```
    cd assignment3/part2-sentiment-analysis/logic/sentiment-analysis
    ```
3. Install with pip
   ```
   pip install -r requirements.txt
   ```
4. Start the flask server with python cli
   ```
   python main.py
   ```
This will start the server.

## API Endpoints
- GET `/`  && GET `/welcome`- Home Page.
- POST `/analyse/sentiment` - Expects a request body with sentence key. Returns the calculated polarity.
- GET `/analyse/sentiment` - Expects a sentence as query parameters. Returns the calculated polarity. # use + for spaces, i.e. http://localhost:5000/analyse?sentence=i+am+so+happy!