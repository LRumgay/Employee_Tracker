const mysql = require('mysql2/promise');

async function getConnection() {
    const connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'tracker_db'
        }
    );
    return connection;
}

module.exports = getConnection;