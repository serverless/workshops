'use strict';

module.exports.getUser = (event, context, callback) => {

  // process incoming input data
  var id = JSON.parse(event.pathParameters.id);

  // simulate an error
  if (id === 999) {
    // send error response
    const err_resp = {
      statusCode: 404,
      body: JSON.stringify({
        message: 'No user found.',
      }),
    };
    // log the error
    console.log("*** Error: "+JSON.stringify(err_resp)+" ***\n");
    callback(null, err_resp);

  } else {

    // fetch the user
    var data = {
      id: id,
      name: "John Doe",
      email: "john.doe@email.com",
    }

    // send response
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data: data,
        message: 'User fetched successfully.',
      }),
    };
    callback(null, response);
  }
};
