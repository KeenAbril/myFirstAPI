const status = {
    ok: 200,
    notFound: 404,
}

module.exports = {
    factorial: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        const num = +req.params.numero;
        let factorial = 1;
        if (num) {
            for (let i = num; i > 0; i--) {
                factorial = factorial * i;
            }
            res.status(status.ok).send(`{factoral: ${factorial}}`);
        } else {
            const msg = {error: 'User Id not found'};
            res.status(status.notFound).send(msg);
        }

    },
};