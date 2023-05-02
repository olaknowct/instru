const User = require('../models/userModel');

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const response = await User.get(userId);

    res.status(200).json({ users: response });
  } catch (error) {
    console.log('error 💥 ', error);
    res.status(404).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const response = await User.getAll();
    res.status(200).json({ users: response });
  } catch (error) {
    console.log('error 💥 ', error);
    res.status(404).json({ error: error.message });
  }
};

exports.signUp = async (req, res, next) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });

    res.status(200).json({ user: newUser });
  } catch (error) {
    console.log('error 💥 ', error);
    res.status(404).json({ error: error.message });
  }
};

// exports.createUsers = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const result = await db.query('INSERT INTO users (name) VALUES (?)', [name]);
//     res.status(200).json({ users: result });
//   } catch (error) {}
// };
