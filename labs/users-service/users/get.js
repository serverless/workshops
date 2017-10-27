'use strict';

module.exports.getUser = (event, context, callback) => {

  console.log("*** Input: "+JSON.stringify(event)+" ***\n");

  // process incoming input data
  var id = JSON.parse(event.pathParameters.id);

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
};
