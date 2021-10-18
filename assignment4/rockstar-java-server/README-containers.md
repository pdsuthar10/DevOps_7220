# Webapp Server for Sentiment Analysis UI - Spring Boot

This is a backend server built for serving requests to frontend for sentiment analysis. The logic layer is handled by a different server based on Flask.

## Docker network

It is a good idea to use a network when you have multiple applications talking with each other. We will attach all our microservices container to the same Docker network so that they can communicate with each other. Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Run the container

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name java-backend-server --network <YOUR_NETWORK_NAME> --rm -p 8080:8080 pdsuthar10/rockstar-java-server
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.

## Testing the application

Make sure you have the following image containers running inorder to test this container:
- [pdsuthar10/rockstar-python-logic](https://hub.docker.com/repository/docker/pdsuthar10/rockstar-python-logic)

The server will run at http://localhost:8080.

Following are the API endpoints: 
- GET `/` - Home Page.
- GET `/my-name` - Returns a string with my name
- POST `/sentiment` - Expects a request body with sentence key. Requests Flask server to calculate the polarity and returns with JSON response.
- GET `/health` - This will return a successful response if the application is running properly. This checks the health of the application
- GET `/testComms` - This will make an API call to Python Server and return a response if Java server can talk successfully with Python server.