const db = require('../utils/dbConnect');
const executeQuery = require('../utils/query');
const { getUsers } = require('../queries/userQueries');

exports.getAllUsers = async (req, res) => {
  try {
    const response = await executeQuery(db, getUsers);

    res.status(200).json({ users: response });
  } catch (error) {
    console.log(error);
  }
};

exports.createUsers = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await db.query('INSERT INTO users (name) VALUES (?)', [name]);
    res.status(200).json({ users: result });
  } catch (error) {}
};
