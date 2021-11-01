# Rockstar App MVC (.NET WebMVC)
This is an assignment for CSYE7220 which has a .NET web MVC responding to song requests.


## Docker network

It is a good idea to use a network when you have multiple applications talking with each other. We will attach all our microservices container to the same Docker network so that they can communicate with each other. Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Run the container

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name dotnet-webmvc --network <YOUR_NETWORK_NAME> --rm -p 5000:80 pdsuthar10/rockstar-dotnet-webmvc
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.

## Testing the application
You can access the application by visiting : http://localhost:5000.

Make sure you have the following image containers running inorder to test this container:
- [pdsuthar10/rockstar-dotnet-webapi](https://hub.docker.com/repository/docker/pdsuthar10/rockstar-dotnet-webapi)
- [pdsuthar10/rockstar-java-server](https://hub.docker.com/repository/docker/pdsuthar10/rockstar-java-server)
- [pdsuthar10/rockstar-python-logic](https://hub.docker.com/repository/docker/pdsuthar10/rockstar-python-logic)

You should be able to call all different APIs by clicking on the buttons on HomePage.