# Logic Server for Sentiment Analysis UI - Flask

This is a flask server built for serving requests to find polarity of sentences and return with the JSON response.

## Steps to run:
1. Clone the repository `git@github.com:pdsuthar10/DevOps_7220.git`
2. Navigate to the source directory
    ```
    cd assignment4/rockstar-python-logic/sentiment-analysis
    ```
3. Install with pip
   ```
   pip install -r requirements.txt
   ```
4. Start the flask server with python cli
   ```
   python main.py
   ```
This will start the server on http://localhost:5002.

## API Endpoints
- GET `/`  && GET `/welcome`- Home Page.
- POST `/analyse/sentiment` - Expects a request body with sentence key. Returns the calculated polarity.
- GET `/analyse/sentiment` - Expects a sentence as query parameters. Returns the calculated polarity. # use + for spaces, i.e. http://localhost:5000/analyse?sentence=i+am+so+happy!


## Login with Docker

Run the following to log in Docker with your credentials:

```
docker login -u <YOUR_USERNAME> -p <YOUR_PASSWORD>
```

## Docker network

It is a good idea to use a network when you have multiple applications talking with each other. We will attach all our microservices container to the same Docker network so that they can communicate with each other. Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```


## How to Build Docker Image

Build the docker image by running:

```
docker build -t <YOUR_DOCKER_ID>/rockstar-python-logic
```

## Push the image to Docker registry

Now that we have our image built, push it to Docker registry by running: 

```
docker push <YOUR_DOCKER_ID>/rockstar-python-logic
```

## Run the container using the image pushed

After we have pushed the image to docker registry, we can use that image to run a container. Run the container with the following command:

```
docker run --name python-logic-server --network <YOUR_NETWORK_NAME> --rm -p 5002:5002 <YOUR_DOCKER_ID>/rockstar-python-logic
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.
