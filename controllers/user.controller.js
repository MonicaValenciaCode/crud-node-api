const getAllUser = (req, res) => {
  res.status(200).json({ reponse: "this method get all users" });
};

const postUser = (req, res) => {
  res.status(200).json({ reponse: "this method add a user " });
};

const putUser = (req, res) => {
  res.status(200).json({ reponse: "this method update a user" });
};

const deleteUser = (req, res) => {
  res.status(200).json({ reponse: "this method delete a user" });
};

module.exports = {
  getAllUser,
  postUser,
  putUser,
  deleteUser,
};
