const {Pool} = require ("pg");

const pool = new Pool({
  user: 'aliang',
  host: 'localhost',
  database: 'todo_list',
  password: '123456',
  post: 5432

})

module.exports = pool;