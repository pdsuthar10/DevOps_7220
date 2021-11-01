# Rockstar App Web Server (.NET WebAPI)
This is an assignment for CSYE7220 which has a .NET web server responding to song requests.

## Steps to run:
1. Clone the repository `git@github.com:pdsuthar10/DevOps_7220.git`
2. Navigate to the source directory:
    ```
    cd assignment4/rockstar-dotnet-webapi
    ```
3. Start the .NET server by running:
   ```
   dotnet run
   ```
This will start the server.

## API Endpoints
- GET `/music`- Home Page
- GET `/music/o-sanam` - Returns lyrics of 'O Sanam' by Lucky Ali
- GET `/music/laari-chootee` - Returns lyrics of 'Laari Chootee' by Ek Chalis Ki Last Local
- GET `/music/despacito` - Returns lyrics of 'Despacito' by Daddy Yankee, Luis Fonsi

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
docker build -t <YOUR_DOCKER_ID>/rockstar-dotnet-webapi
```

## Push the image to Docker registry

Now that we have our image built, push it to Docker registry by running: 

```
docker push <YOUR_DOCKER_ID>/rockstar-dotnet-webapi
```

## Run the container using the image pushed

After we have pushed the image to docker registry, we can use that image to run a container. Run the container with the following command:

```
docker run --name dotnet-webapi --network <YOUR_NETWORK_NAME> --rm -p 5001:80 <YOUR_DOCKER_ID>/rockstar-dotnet-webapi
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.
