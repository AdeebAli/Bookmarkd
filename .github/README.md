# Bookmarkd 📖

**_The Social Network for Bibliophiles_** 🤓📖❤️

The backend API for Bookmarkd responsible for communication to and from the MongoDB data store.  
Made with ExpressJS, Eslint, and Jest.  

## Requirements

* NodeJS 13+
* MongoDB

## Getting Started

First things first...

```bash
    npm i # installs dependencies
```

Time to start the application!

```bash
    npm start
```

To run the application with a live dev server that supports hot reloading, run

```bash
    npm run dev
```

## Testing

To run the full test suite,

```bash
    npm test
```

## Linting / Code Style

This project uses the AirBnB ruleset for eslint to enforce code style and syntax errors. Linting is run with the lint command as well as the general npm test command.

To run the linter and check for code style errors,

``` bash
    npm run lint
```

Oh no! We have a bunch of linting errors. That's totally fixable! You just need to run

```bash
    npm run lint:fix
```

## Running with Docker

This application can be run with Docker using the supplied Dockerfile to build the image.
Your machine must have Docker installed in order to perform the following steps. Download instructions can be found on the [Official Docker Website](https://docs.docker.com/get-docker/)

### Building the Image

change directory to the root of the repository, then

```bash
docker build -t <username>/bookmarkd .
```

### Running the Image

```bash
docker run -p <public_port>:<private_port> -d <username>/bookmarkd
```

## Made With ❤️ Using

* Express - Web Framework
* Jest - Unit Testing Framework
* Eslint - Code Style
* Mongoose - MongoDB utility for NodeJS

## Authors

* __[Adeeb Ali](https://github.com/AdeebAli)__ - Main Contributor
