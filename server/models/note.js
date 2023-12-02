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

module.exports = { getAllNotes };