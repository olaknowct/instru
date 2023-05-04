const selectUserByIdQuery = 'SELECT * FROM users WHERE id = ?';
const selectAllUsersQuery = 'SELECT * FROM users';
const insertUserQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

module.exports = {
  selectUserByIdQuery,
  selectAllUsersQuery,
  insertUserQuery,
};
