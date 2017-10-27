'use strict';

module.exports.createUser = (event, context, callback) => {

  console.log("*** Input: "+JSON.stringify(event)+" ***\n");

  // process incoming input data
  var data = JSON.parse(event.body);

  // save the user
  var id = 1;

  // send response
  const response = {
    statusCode: 201,
    headers: {
      location: `${event.path}/${id}`
    },
    body: JSON.stringify({
      data: {
        id: id,
        name: data.user.name,
        email: data.user.email,
      },
      message: 'User created successfully.',
    }),
  };

  callback(null, response);
};
