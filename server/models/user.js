const con = require('./db_connect');

function createTable() {
    const sql = `
        CREATE TABLE user(
            user_id INT NOT NULL AUTO_INCREMENT,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            user_name VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            PRIMARY KEY(user_id)
        );
    `
}

createTable();

const users = [
    {
        user_id: 1,
        first_name: 'A',
        last_name: 'L',
        user_name: 'AL@gmail.com'
    },
    {
        user_id: 2,
        first_name: 'B',
        last_name: 'L',
        user_name: 'BL@gmail.com'
    },
    {
        user_id: 3,
        first_name: 'C',
        last_name: 'L',
        user_name: 'CL@gmail.com'
    }
]

const getAllUsers = () => {
    return users;
}

const createUser = async (user) => {
    const sql = `
        INSERT INTO user (first_name, last_name, user_name, password) values ("${user.firstName}", "${user.lastName}", "${user.userName}", "${user.password}");
    `

    await con.query(sql);

    const newUser = await con.query(`SELECT * FROM user ORDER BY user_id DESC LIMIT 1`);

    return newUser;
}

const getUser = async (user) => {
    const sql = `
        SELECT * FROM user WHERE user_id = ${user.userId};
    `

    return (await con.query(sql))[0];
}

const editUser = async (user) => {
    const existingUser = await getUser(user);

    if (!existingUser) throw new Error("User does not exist!");

    const sql = `
        UPDATE user SET 
            first_name = "${user.firstName}",
            last_name =  "${user.lastName}",
            user_name = "${user.userName}",
            password = "${user.password}"
        WHERE user_id = ${user.userId};
    `

    await con.query(sql);
    const updatedUser = await getUser(user);

    return updatedUser;
}

const deleteUser = async (user) => {
    const existingUser = await getUser(user);

    if (!existingUser) throw new Error("User does not exist!");

    const sql = `
        DELETE FROM user WHERE user_id = ${user.userId};
    `

    await con.query(sql);
}

module.exports = { getAllUsers, createUser, getUser, editUser, deleteUser };