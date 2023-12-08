const con = require('./db_connect');

function createTable() {
    const sql = `
        CREATE TABLE note(
            note_id INT NOT NULL AUTO_INCREMENT,
            user_id INT NOT NULL,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            deadline VARCHAR(255) NOT NULL,
            notifications VARCHAR(255) NOT NULL,
            PRIMARY KEY(note_id),
            FOREIGN KEY(user_id) REFERENCES user(user_id)
        );
    `
}

createTable();

const notes = [
    {
        note_id: 1,
        user_id: 1,
        title: 'First Note',
        description: 'This is the first note',
        deadline: '5pm',
        notifications: 'You have 3hrs to complete this'
    },
    {
        note_id: 2,
        user_id: 2,
        title: 'Second Note',
        description: 'This is the second note',
        deadline: '8pm',
        notifications: 'You have 6hrs to complete this'
    },
    {
        note_id: 3,
        user_id: 3,
        title: 'Third Note',
        description: 'This is the third note',
        deadline: '3pm',
        notifications: 'You have 1hr to complete this'
    }
]

const getAllNotes = () => {
    return notes;
}

const createNote = async (note) => {
    const sql = `
        INSERT INTO note (user_id, title, description, deadline, notifications) values (${note.userId}, "${note.title}", "${note.description}", "${note.deadline}", "${note.notifications}");
    `

    await con.query(sql);

    const newNote = await con.query(`SELECT * FROM note ORDER BY note_id DESC LIMIT 1`);

    return newNote;
}

const getNote = async (note) => {
    const sql = `
        SELECT * FROM note WHERE note_id = ${note.noteId};
    `

    return (await con.query(sql))[0];
}

const editNote = async (note) => {
    const existingNote = await getNote(note);

    if (!existingNote) throw new Error("Note does not exist!");

    const sql = `
        UPDATE note SET 
            title = "${note.title}",
            description =  "${note.description}",
            deadline = "${note.deadline}",
            notifications = "${note.notifications}"
        WHERE note_id = ${note.noteId};
    `

    await con.query(sql);
    const updatedNote = await getNote(note);

    return updatedNote;
}

const deleteNote = async (note) => {
    const existingNote = await getNote(note);

    if (!existingNote) throw new Error("Note does not exist!");

    const sql = `
        DELETE FROM note WHERE note_id = ${note.noteId};
    `

    await con.query(sql);
}

module.exports = { getAllNotes, getNote, editNote, createNote, deleteNote };