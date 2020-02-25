const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/posttoview',{ useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports= mongoose;