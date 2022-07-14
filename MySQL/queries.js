const {connection} = require('./config');

const getWords  = () => {
    const query  =  "SELECT * FROM word";
    return new Promise((resolve, reject)=>{
        //sea bueno (resolve)->data
        //sea malo  (reject)->error
        connection.query(query, function(err, results, fields) {
            //   console.log(results); // results contains rows returned by server
            //   console.log(fields); // fields contains extra meta data about results, if available
              if(err)reject(false);
              if(results.length>0)resolve(results);
            }
          );
    });
};

module.exports = {
    getWords
}