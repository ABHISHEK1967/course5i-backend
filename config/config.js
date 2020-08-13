const dotenv = require('dotenv');
dotenv.config();

const dboptions = {
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
    ssl: {
        rejectUnauthorized: false,
    }

}

module.exports = dboptions