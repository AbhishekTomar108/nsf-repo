const mongoose = require('mongoose');

function dbConnect() {
  // const dbName = 'school';
  const mongoURI = 'mongodb+srv://studentDashboard:RMS40ArMPPYcOBEM@cluster0.qygnrxp.mongodb.net/school';

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(mongoURI, options)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(error => {
      console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = dbConnect;