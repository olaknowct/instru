const { countEmailQuery } = require('../queries/users.query');

const userSchema = (Joi, db) => {
  return Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required()
      .external(async (email) => {
        if (await emailExists(email, db)) {
          throw new Error('Email is already taken');
        }
        return email;
      }),
    password: Joi.string().min(6).required(),
    passwordConfirm: Joi.ref('password'),
  });
};

const emailExists = async (email, db) => {
  console.log(email, countEmailQuery);
  const result = await db.query(countEmailQuery, email);
  const count = result[0].count;
  return count > 0;
};

module.exports = { userSchema };
