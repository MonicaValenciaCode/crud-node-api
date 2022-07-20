const {getWords} = require("../MySQL/queries");

const getAllword =  async (req, res) => {
  // getWords()
  // .then(response => {
  //   console.log(response);
  //   res.status(200).json({response:response})
  // })  
  // .catch(err=>{
  //   res.status(404).json({response:err})
  // })
  // res.status(200).json({  reponse: "this method get all words" });
  try{
    const words  = await  getWords();
    res.status(200).json({response:words})
  }catch(error){
    res.status(404).json({response:err})
  }
};

const postWord = (req, res) => {
  res.status(200).json({ reponse: "this method add a word " });
};

const putWord = (req, res) => {
  res.status(200).json({ reponse: "this method update a word" });
};

const deleteWord = (req, res) => {
  res.status(200).json({ reponse: "this method delete a word" });
};

module.exports = {
  getAllword,
  postWord,
  putWord,
  deleteWord,
};
