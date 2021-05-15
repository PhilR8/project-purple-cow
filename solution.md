# Solution.md

### Concept:

Take Time to Give Thanks

### Description:

It's been a challenging ~~year~~

~~decade~~

...

...things are tough out there. Take care of yourself and remember to make space for gratitude.

Use this app to record the good times; the small victories; the little moments that help us get through the day.

When things are looking down and you feel hope slipping away, open the app and reflect on the things that are going well in your life.

Stay healthy and stay thankful.

## Getting Started

In the project directory, run the following commands from the command line:

### `yarn build-docker-image`

Creates the docker image needed for the application to run.

### `yarn start` or `yarn start <port number>`

Spins up a docker container to serve the React application.

If no port number is provided, the application is served on port 3000.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If a port number is provided, the application is served on that port.

Example: `yarn start 5000` will serve the React application on port 5000.

### `yarn stop`

Stops and removes Docker container.

### `yarn start-cra`

For development purposes.

Runs the application in development mode locally on your development machine and serves it on port 3000.

This command supports hot reloading when edits are made.  Lint errors will be displayed in the browser console.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Future Enhancements

- The user experience for first-time users needs further discussion. Currently, the app can only update an existing counter.  I don't mind this restriction - I don't think I would want the app to ever tell someone they have nothing for which to be thankful.
- However, as currently implemented, the app flashes 0 on load until the initial call to hit the counter API is returned.  A loading indicator of some kind would be helpful.
- There's only one unit test.  Further testing is required.
