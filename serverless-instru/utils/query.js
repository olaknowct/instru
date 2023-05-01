const executeQuery = async (db, query) => {
  try {
    const results = await db.query(query);
    return results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to execute query');
  }
};

module.exports = executeQuery;
