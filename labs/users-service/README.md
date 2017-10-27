# Users Service

Implements a `users` service and exposes CRUD functionality over a HTTP REST API.

## Create User

`POST /users/create`

### Test Function Locally

Invoke the function locally before deploying to test it.

```
$ sls invoke local -f create -p users/test/event.create.json

*** Input: {"path":"/users/create","body":"{\"user\": {\"name\":\"John Doe\", \"email\":\"john.doe@email.com\"}}"} ***

{
    "statusCode": 201,
    "headers": {
        "location": "/users/create/1"
    },
    "body": "{\"data\":{\"id\":1,\"name\":\"John Doe\",\"email\":\"john.doe@email.com\"},\"message\":\"User created successfully.\"}"
}
```

### Deploy Code

```
$ sls deploy
```

### Test Deployed Function

Invoke the deployed function, and show the log output:

```
$ sls invoke -f create -p users/test/event.create.json --log
{
    "statusCode": 201,
    "headers": {
        "location": "/users/create/1"
    },
    "body": "{\"data\":{\"id\":1,\"name\":\"John Doe\",\"email\":\"john.doe@email.com\"},\"message\":\"User created successfully.\"}"
}
--------------------------------------------------------------------
START RequestId: d2a119e4-bb3a-11e7-a8ab-416ed5a4e223 Version: $LATEST
2017-10-27 13:18:17.685 (-04:00)        d2a119e4-bb3a-11e7-a8ab-416ed5a4e223    *** Input: {"path":"/users/create","body":"{\"user\": {\"name\":\"John Doe\", \"email\":\"john.doe@email.com\"}}"} ***

END RequestId: d2a119e4-bb3a-11e7-a8ab-416ed5a4e223
REPORT RequestId: d2a119e4-bb3a-11e7-a8ab-416ed5a4e223  Duration: 2.54 ms       Billed Duration: 100 ms        Memory Size: 1024 MB    Max Memory Used: 20 MB
```

Call the live endpoint via curl:

```
$ curl -v -X POST https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/create -d '{"user": {"name":"John Doe", "email":"john.doe@email.com"}}'

< HTTP/1.1 201 Created
< Content-Type: application/json
< Content-Length: 1387
< Connection: keep-alive
...
< location: /users/create/1
...
<
...
{
    "data": {
        "email": "john.doe@email.com",
        "id": 1,
        "name": "John Doe"
    },
    "message": "User created successfully."
}
```

### Get User

`GET /users/1`

### Test Function Locally

Invoke the function locally before deploying to test it.

```
$ sls invoke local -f get -p users/test/event.get.json

*** Input: {"pathParameters":{"id":"1"}} ***

{
    "statusCode": 200,
    "body": "{\"data\":{\"id\":1,\"name\":\"John Doe\",\"email\":\"john.doe@email.com\"},\"message\":\"User fetched successfully.\"}"
}
```

### Deploy Code

```
$ sls deploy
```

### Test Deployed Function

Invoke the deployed function, and show the log output:

```
$ sls invoke -f get -p users/test/event.get.json --log
{
    "statusCode": 200,
    "body": "{\"data\":{\"id\":1,\"name\":\"John Doe\",\"email\":\"john.doe@email.com\"},\"message\":\"User fetched successfully.\"}"
}
--------------------------------------------------------------------
START RequestId: 58609afc-bb3b-11e7-a4d0-55464f8d1b5f Version: $LATEST
2017-10-27 13:22:02.249 (-04:00)        58609afc-bb3b-11e7-a4d0-55464f8d1b5f    *** Input: {"pathParameters":{"id":"1"}} ***

END RequestId: 58609afc-bb3b-11e7-a4d0-55464f8d1b5f
REPORT RequestId: 58609afc-bb3b-11e7-a4d0-55464f8d1b5f  Duration: 2.51 ms       Billed Duration: 100 ms        Memory Size: 1024 MB    Max Memory Used: 20 MB
```

Call the live endpoint via curl:

```
$ curl -v https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/1

< HTTP/1.1 200 OK
< Content-Type: application/json
< Content-Length: 103
< Connection: keep-alive
...
{
    "data": {
        "email": "john.doe@email.com",
        "id": 1,
        "name": "John Doe"
    },
    "message": "User fetched successfully."
}
```

### Delete User

`DELETE /users/1`

### Test Function Locally

Invoke the function locally before deploying to test it.

```
$ sls invoke local -f delete -p users/test/event.delete.json

*** Input: {"pathParameters":{"id":"1"}} ***

{
    "statusCode": 204,
    "body": "{\"message\":\"User deleted successfully.\"}"
}
```

### Deploy Code

```
$ sls deploy
```

### Test Deployed Function

Invoke the deployed function, and show the log output:

```
$ sls invoke -f delete -p users/test/event.delete.json --log
{
    "statusCode": 204,
    "body": "{\"message\":\"User deleted successfully.\"}"
}
--------------------------------------------------------------------
START RequestId: e6dcabaa-bb3d-11e7-aa48-2b71d84d097f Version: $LATEST
2017-10-27 13:40:19.925 (-04:00)        e6dcabaa-bb3d-11e7-aa48-2b71d84d097f    *** Input: {"pathParameters":{"id":"1"}} ***

END RequestId: e6dcabaa-bb3d-11e7-aa48-2b71d84d097f
REPORT RequestId: e6dcabaa-bb3d-11e7-aa48-2b71d84d097f  Duration: 0.39 ms       Billed Duration: 100 ms        Memory Size: 1024 MB    Max Memory Used: 21 MB
```

Call the live endpoint via curl:

```
$ curl -v -X DELETE https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/users/1

< HTTP/1.1 204 No Content
< Content-Type: application/json
< Content-Length: 0
< Connection: keep-alive
```
