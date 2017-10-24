var path = require('path');
var express = require('express');
var router = express.Router();

/* GET */
router.get('/api', function(req, res, next) {
  res.json( { title: 'Testing Express plus React' });
});




/** https://daveceddia.com/create-react-app-express-production/ oct-2017
* The "catchall" handler: for any request that doesn't
* match one above, send back React's index.html file.
*/
router.get('*', function(req, res)  {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


module.exports = router;
