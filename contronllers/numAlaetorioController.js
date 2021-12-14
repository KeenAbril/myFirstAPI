const status = {
    ok: 200,
    notFound: 404,
}

module.exports = {
    aleatorio: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        const num = +req.params.numero;
        if (num) {
            let random = Math.random() * (req.params.numero - 1) + 1;

            res.status(status.ok).send(`{factoral: ${random}}`);
        } else {
            const msg = {error: 'User Id not found'};
            res.status(status.notFound).send(msg);
        }

    },
};