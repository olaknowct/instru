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
