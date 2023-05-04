const selectUserByIdQuery = 'SELECT * FROM users WHERE id = ?';
const selectAllUsersQuery = 'SELECT * FROM users';
const insertUserQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
const countEmailQuery = 'SELECT COUNT(*) as count FROM users WHERE email = ?';

module.exports = {
  selectUserByIdQuery,
  selectAllUsersQuery,
  insertUserQuery,
  countEmailQuery,
};
