const { Pool } = require('pg');

const PG_URL = 'postgres://wgrmqxey:BxoQrkloqzMPqQO7hsGCXFpMVpWsqX1K@suleiman.db.elephantsql.com:5432/wgrmqxey'

const pool = new Pool({
  connectionString: PG_URL,
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query:', text);
    return pool.query(text, params, callback);
  }
}