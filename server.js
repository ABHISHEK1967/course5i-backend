const express = require('express')
const { Pool } = require('pg');
const dbOptions = require('./config/config')
const sharedRouter = require('./sharedrouter.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(sharedRouter);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

const pool = new Pool(dbOptions);

pool.connect().then(() => {

    console.log("Successfully connected to database");

}).catch((err) => {
    console.log(err);
});


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


exports.queryResolver = (text) => {
    return new Promise((resolve, reject) => {
        pool.query(text)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}
