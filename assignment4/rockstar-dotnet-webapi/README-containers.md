# Rockstar App Web Server (.NET WebAPI)
This is an assignment for CSYE7220 which has a .NET web server responding to song requests.


## Docker network

It is a good idea to use a network when you have multiple applications talking with each other. We will attach all our microservices container to the same Docker network so that they can communicate with each other. Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Run the container

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name dotnet-webapi --network <YOUR_NETWORK_NAME> --rm -p 5001:80 pdsuthar10/rockstar-dotnet-webapi
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.

## Testing the application
The application will run on http://localhost:5001.

Following are the API endpoints: 
- GET `/music`- Home Page
- GET `/music/o-sanam` - Returns lyrics of 'O Sanam' by Lucky Ali
- GET `/music/laari-chootee` - Returns lyrics of 'Laari Chootee' by Ek Chalis Ki Last Local
- GET `/music/despacito` - Returns lyrics of 'Despacito' by Daddy Yankee, Luis Fonsi
- GET `/health` - For testing the health of the application