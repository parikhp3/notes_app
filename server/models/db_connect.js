require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createPool({
    host: process.env.HOST,
    user: process.env.UNAME,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
});

const query = (sql, binding) => {
    try {
        return new Promise((resolve, reject) => {
            con.query(sql, binding, (err, result) => {
                if (err) {
                    console.log("ERROR " + err);
                    reject()
                };
                resolve(result);
            });
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = { con, query };