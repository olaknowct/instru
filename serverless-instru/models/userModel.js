const db = require('../utils/dbConnect');

const User = {
  async getUser(id) {
    try {
      const results = await db.query('SELECT * FROM users WHERE id = ?', [id]);

      return results;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get user');
    }
  },

  async getUsers() {
    try {
      const results = await db.query('SELECT * FROM users');
      return results;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get users');
    }
  },

  // async create(data) {
  //   try {
  //     const result = await db.query('INSERT INTO users SET ?', data);
  //     return { id: result.insertId };
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Failed to create user');
  //   }
  // },
};

module.exports = User;
