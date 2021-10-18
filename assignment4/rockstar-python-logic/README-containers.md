# Logic Server for Sentiment Analysis UI - Flask

This is a flask server built for serving requests to find polarity of sentences and return with the JSON response.


## Docker network

It is a good idea to use a network when you have multiple applications talking with each other. We will attach all our microservices container to the same Docker network so that they can communicate with each other. Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Run the container using the image pushed

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name python-logic-server --network <YOUR_NETWORK_NAME> --rm -p 5002:5002 pdsuthar10/rockstar-python-logic
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.

## Testing the application

Make sure you have the following image containers running inorder to test this container:
- pdsuthar10/rockstar-java-server

The server will run at http://localhost:5002.

Following are the API endpoints: 
- GET `/`  && GET `/welcome`- Home Page.
- POST `/analyse/sentiment` - Expects a request body with sentence key. Returns the calculated polarity.
- GET `/analyse/sentiment` - Expects a sentence as query parameters. Returns the calculated polarity. # use + for spaces, i.e. http://localhost:5002/analyse?sentence=i+am+so+happy!
- GET `/health` - This will return a successful response if the application is running properly. This checks the health of the application
- GET `/testComms` - This will make an API call to Java Server and return a response if Python server can talk successfully with Java server.
