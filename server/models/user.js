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

module.exports = { getAllUsers };