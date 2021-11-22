const mongoose = require('mongoose')

module.exports = function() {
    var dbConnectionString = ''
    mongoose.connect(dbConnectionString, { useNewUrlParser : true, useUnifiedTopology:true})
    .then((val) => {
        //starting port
    }).catch((err) => console.log(err));
    console.log('Connected with database');
}
