# Serverless Workshops

A companion repository for workshops with instructions and code examples.

## Pre-requisites

These steps need to be completed before the workshop:

* Text editor installed
* NPM and NodeJS 6.10 or later installed
* Git 2.0.0 or later installed
* Curl installed
* Serverless Framework installed
* AWS account setup & credentials configured

### Install NPM and NodeJS

[Download](https://nodejs.org/en/download/) appropriate OS package and install it on your machine.

Test to see that you have `npm` and `node` installed properly:

```
$ npm -v
$ node -v
```

### Install Git

[Download](https://git-scm.com/downloads) appropriate OS package and install it on your machine.

Test to see that you have `git` installed properly:

```
$ git version
```

### Install Curl

[Download](https://curl.haxx.se/download.html) appropriate OS package and install it on your machine.

Test to see that you have `curl` installed properly:

```
$ curl --version
```

### Install Serverless Framework

```
$ npm install -g serverless

$ serverless version
```

### AWS Setup

* AWS account setup
* AWS credentials configured with the Serverless Framework

Follow instructions in the [tutorial](https://serverless.com/provider-setup/#get-started).

## Labs Code Examples

To follow along with the workshop, please get the code examples:

```
$ cd <user folder>
$ git clone https://github.com/serverless/workshops.git
$ cd workshops
```

### Exercise 1: Hello World - dynamic app

Open the `handler.js` file in your text editor and update it with the following code:

```
'use strict';

module.exports.helloWorld = (event, context, callback) => {

  let dynamicMsg = 'Hello Unknown!';

  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.name) {
      dynamicMsg = `Hello ${event.queryStringParameters.name}!`;
  }

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      // message: 'Go Serverless v1.0! Your function executed successfully!',
      message: dynamicMsg,
      input: event,
    }),
  };

  callback(null, response);
};
```

Then, deploy the new code changes:

```
sls deploy
```

### Exercise 2: Users Service - install project

Let's install the `users-service` project from the Github repo:

```
// cd into your working folder
$ cd <user_folder>

// install the project
$ sls install --url https://github.com/serverless/workshops/tree/master/labs/users-service

// cd into the users-service folder
$ cd users-service
```

Then, deploy the new project:

```
cd
sls deploy
```

### Exercise 3: Users Service - calling the API

**Note**: We need to fetch the urls for the deployed endpoints, and replace the urls in the following code fragments, before we run them.

#### Fetch the urls for the endpoints

```
$ sls info
```

#### Create User

```
$ curl -v -X POST \
       https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/create \
       -d '{"user": {"name":"John Doe", "email":"john.doe@email.com"}}'
```

#### Get User

```
$ curl -v -X GET https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/1
```

Simulate an error and see it in the logs:

```
$ curl -v -X GET https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/999
```

```
$ sls logs -f get
```

#### Delete User

```
$ curl -v -X DELETE https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/1
```

### Exercise 4: Users Service - other CLI commands

#### Fetch the project urls

```
$ sls info
```

#### Tail logs for a function

```
$ sls logs -f get -t
```

#### Fetch the project metrics

```
$ sls metrics
```

#### Invoke a function locally

```
$ sls invoke local -f get -p \
       users/test/event.get.json
```

#### Invoke a function on the cloud

```
$ sls invoke -f get -p \
      users/test/event.get.json --log
```
