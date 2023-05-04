const Joi = require('joi');
const {
  selectUserByIdQuery,
  selectAllUsersQuery,
  insertUserQuery,
  updateUserPointsQuery,
} = require('../queries/users.query');
const db = require('../utils/dbConnect');
const { userSchema } = require('../validation/userValidation');

const User = {
  async get(id) {
    try {
      Joi.attempt(id, Joi.number());

      const results = await db.query(selectUserByIdQuery, [id]);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getAll() {
    try {
      const results = await db.query(selectAllUsersQuery);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },

  async create(userDataObj) {
    try {
      // validate
      const { error } = await userSchema(Joi, db).validateAsync(userDataObj);

      if (error) throw new Error(error);

      const userDataArray = Object.values(userDataObj);

      // remove passwordConfirm from the array
      userDataArray.pop();

      const results = await db.query(insertUserQuery, userDataArray);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updatePoints(id, points, operation) {
    try {
      Joi.attempt(id, Joi.number());
      Joi.attempt(points, Joi.number());

      const results = await db.query(updateUserPointsQuery, [
        operation,
        points,
        operation,
        points,
        id,
      ]);

      return results.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = User;
