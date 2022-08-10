const {connection} = require('./config');

const getWords  = () => {
    const query  =  `SELECT w.id_word, w.spanish, w.english, p.spanish as pSpanish, p.english as pEnglish FROM word w 
                      INNER JOIN phrase p 
                      WHERE w.idphrase = p.id_phrase
                    `;
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