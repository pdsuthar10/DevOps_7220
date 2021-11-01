# Webapp Server for Sentiment Analysis UI - Spring Boot

This is a backend server built for serving requests to frontend for sentiment analysis. The logic layer is handled by a different server based on Flask.

## Steps to run:
1. Install the Prerequisites for the project:
   - Java Version >= 11
2. Clone the repository `git@github.com:pdsuthar10/DevOps_7220.git`
3. Navigate to the source directory
    ```
    cd assignment4/rockstar-java-server
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
docker build -t <YOUR_DOCKER_ID>/rockstar-java-server
```

## Push the image to Docker registry

Now that we have our image built, push it to Docker registry by running: 

```
docker push <YOUR_DOCKER_ID>/rockstar-java-server
```

## Run the container using the image pushed

After we have pushed the image to docker registry, we can use that image to run a container. Run the container with the following command:

```
docker run --name java-backend-server --network <YOUR_NETWORK_NAME> --rm -p 8080:8080 <YOUR_DOCKER_ID>/rockstar-java-server
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.