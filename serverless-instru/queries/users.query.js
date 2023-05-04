const selectUserByIdQuery = 'SELECT * FROM users WHERE id = ?';
const selectAllUsersQuery = 'SELECT * FROM users';
const insertUserQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
const countEmailQuery = 'SELECT COUNT(*) as count FROM users WHERE email = ?';
const updateUserPointsQuery = `
  UPDATE users 
  SET points =
    CASE 
      WHEN ? = 'add' THEN points + ?
      WHEN ? = 'subtract' THEN points - ?
      ELSE points
    END 
  WHERE id = ?
`;

module.exports = {
  selectUserByIdQuery,
  selectAllUsersQuery,
  insertUserQuery,
  countEmailQuery,
  updateUserPointsQuery,
};
