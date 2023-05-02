const User = require('../models/userModel');

exports.getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const response = await User.getUser(userId);

    res.status(200).json({ users: response });
  } catch (error) {
    console.log(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const response = await User.getUsers();

    res.status(200).json({ users: response });
  } catch (error) {
    console.log(error);
  }
};

// exports.createUsers = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const result = await db.query('INSERT INTO users (name) VALUES (?)', [name]);
//     res.status(200).json({ users: result });
//   } catch (error) {}
// };
