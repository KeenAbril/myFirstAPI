const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'david'},
    {id: 3, name: 'mario'}
]

const status = {
    ok: 200,
    notFound: 404,
    created: 201,
}

module.exports = {
    list: (req, res) => {
        res.status(status.ok).send(users);
    },

    profile: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        const user = users.find((user) => user.id == req.params.userId);

        if (user) {
            res.status(status.ok).send(user);
        } else {
            const msg = {error: 'User Id not found'};
            res.status(status.notFound).send(msg);
        }

    },

    create: (req, res) => {
        const user = req.body;
        user.id = users.length + 1;

        users.push(user);

        res.status(status.created).send(user)
    },
};