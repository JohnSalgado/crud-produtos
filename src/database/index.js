const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once('open', function () {
    console.log('connection has been made');
  })
  .on('error', function (error) {
    console.log('error is:', error);
  });

module.exports = mongoose;
