# Rockstar App UI (React)

This project consists of the frontend part related to Rockstar application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Clone the repository

You can clone the repository by running:

```
git clone https://github.com/pdsuthar10/DevOps_7220.git
```

Move to the source directory for this app:
```
cd assignment4/rockstar-react-ui
```

## Install the required packages

Run the following command to install all the required packages for React application:

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

In the Dockerfile, I build the react applciation and use that build for creating the image to upload on Docker. Create a react app build using: `npm build`

After this, we have our build ready to be used for creating Docker image. Build the docker image by running:

```
docker build -t <YOUR_DOCKER_ID>/rockstar-react-ui
```

## Push the image to Docker registry

Now that we have our image built, push it to Docker registry by running: 

```
docker push <YOUR_DOCKER_ID>/rockstar-react-ui
```

## Run the container using the image pushed

After we have pushed the image to docker registry, we can use that image to run a container. Run the container with the following command:

```
docker run --name react-ui --network <YOUR_NETWORK_NAME> --rm -p 3000:80 <YOUR_DOCKER_ID>/rockstar-react-ui
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.