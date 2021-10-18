# Rockstar App UI (React)

This project consists of the frontend part related to Rockstar application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Docker network

It is a good idea to use a network when you have multiple applications talking with each other. We will attach all our microservices container to the same Docker network so that they can communicate with each other. Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Prerequisites

Make sure you have the following image containers running inorder to test this container:
- pdsuthar10/rockstar-dotnet-webapi
- pdsuthar10/rockstar-dotnet-mvc
- pdsuthar10/rockstar-java-server
- pdsuthar10/rockstar-python-logic

## Run the container

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name react-ui --network <YOUR_NETWORK_NAME> --rm -p 3000:80 pdsuthar10/rockstar-react-ui
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.

## Testing the application

You can access the application by visiting : http://localhost:3000

You should be able to call all different APIs by clicking on the buttons on HomePage.