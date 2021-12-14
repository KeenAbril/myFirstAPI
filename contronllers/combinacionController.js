const status = {
    ok: 200,
    notFound: 404,
}

module.exports = {
    combinacion: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        let combinacion = [2,4,8,9,7,3,5,6]
        const numero = req.body.numero;
        if (numero) {
            const result = combinacion.map((element) => {
                return element *= numero;
                });
            res.status(status.ok).send(`{combinacion: ${result}}`);
        } else {
            const msg = {error: 'No se ha podido realizar la combinacion'};
            res.status(status.notFound).send(msg);
        }
    },
};