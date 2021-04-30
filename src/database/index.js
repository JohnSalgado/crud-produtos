const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://johnsalgado:zbockD7kUoDj9DCF@desafio.qc5jc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);

mongoose.connection
  .once('open', function () {
    console.log('connection has been made');
  })
  .on('error', function (error) {
    console.log('error is:', error);
  });

module.exports = mongoose;
