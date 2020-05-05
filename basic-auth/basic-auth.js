const crypto = require('crypto');
const HttpStatus = require('http-status-codes');


/**
 * 
 * const filename = process.argv[2];
const crypto = require('crypto');
const fs = require('fs');

const hash = crypto.createHash('sha256');

const input = fs.createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});
}
 */
function sha1Encode(data) {
    // To be implemented!
    const hashCode = crypto.createHash('sha1');
    hashCode.update(data);
   return hashCode.digest('hex');
}
/**
 *     
var request = require('request'),
    username = "john",
    password = "1234",
    url = "http://www.example.com",
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

request(
    {
        url : url,
        headers : {
            "Authorization" : auth
        }
    },
    function (error, response, body) {
        // Do more stuff with 'body' here
    }
);
 */

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!
    const authorization = request.headers.authorization;
    const mdp = sha1Encode('password');
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const [login, password] = decoded.split(':');
    if (login == 'node' && password == mdp) return next();
    response.sendStatus(HttpStatus.UNAUTHORIZED);
}