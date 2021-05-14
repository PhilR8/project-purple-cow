# Project Purple Cow - Counting App

Proof of concept for a counting application called Project Purple Cow.

Bootstrapped using Create-React-App.

## Available Scripts

In the project directory, you can run:

### `yarn build-docker-image`

Creates the docker image needed for the application to run.

### `yarn start`

Spins up a docker container to serve the React application on port `3000`.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn start <port number>`

Spins up a docker container to serve the React application on the provided port number.

Example: `yarn start 5000` will serve the React application on port 5000.

Open `http://localhost:<port number>` to view it in the browser.

### `yarn stop`

Stops and removes Docker container.

### `yarn start-cra`

Runs the application in development mode locally on your development machine.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
