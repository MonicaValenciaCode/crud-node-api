const getAllword = (req, res) => {
  res.status(200).json({ reponse: "this method get all words" });
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
