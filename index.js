/*
const sendmail = require('sendmail')();
 
sendmail({
    from: 'no-reply@yourdomain.com',
    to: '@txt.att.net',
    subject: 'test sendmail',
    html: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
*/

const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
