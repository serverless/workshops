'use strict';

module.exports.deleteUser = (event, context, callback) => {

  console.log("*** Input: "+JSON.stringify(event)+" ***\n");

  // process incoming input data
  var id = JSON.parse(event.pathParameters.id);

  // delete the user

  // send response
  const response = {
    statusCode: 204,
    body: JSON.stringify({
      message: 'User deleted successfully.',
    }),
  };

  callback(null, response);
};
