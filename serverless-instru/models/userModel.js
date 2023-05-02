const db = require('../utils/dbConnect');

const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  passwordConfirm: Joi.ref('password'),
});

const User = {
  async get(id) {
    try {
      Joi.attempt(id, Joi.number());

      const results = await db.query('SELECT * FROM users WHERE id = ?', [id]);

      return results;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getAll() {
    try {
      const results = await db.query('SELECT * FROM users');
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },

  async create(userDataObj) {
    try {
      // validate
      const { error } = userSchema.validate(userDataObj);

      if (error) throw new Error(error);

      const insertUserQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

      const userDataArray = Object.values(userDataObj);

      // remove passwordConfirm from the array
      userDataArray.pop();

      const results = await db.query(insertUserQuery, userDataArray);
      return results;
    } catch (error) {
      throw new Error(error);
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
