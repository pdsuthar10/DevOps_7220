# Webapp Server for Sentiment Analysis UI

This is a backend server built for serving requests to frontend for sentiment analysis. The logic layer is handled by a different server based on Flask.

## Steps to run:
1. Install the Prerequisites for the project:
   - Java Version >= 11
2. Clone the repository `git@github.com:pdsuthar10/DevOps_7220.git`
3. Navigate to assignment 3 directory
    ```
    cd assignment3/part2-sentiment-analysis/backend/
    ```
4. Start the Spring Boot application
   ```
   mvn clean install spring-boot:run
   ```
This will start the server.

## API Endpoints
- GET `/` - Home Page.
- GET `/my-name` - Returns a string with my name
- POST `/sentiment` - Expects a request body with sentence key. Requests Flask server to calculate the polarity and returns with JSON response.