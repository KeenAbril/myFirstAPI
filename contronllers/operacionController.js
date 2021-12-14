const status = {
    ok: 200,
    notFound: 404,
    unProcessedEntiy: 442,
}

module.exports = {
    sum: (req, res) => {
        const a = req.body.a
        const b = req.body.b
        const result = `${a} + ${b} = ${a + b}`

        res.status(status.ok).send(`${result}`)
    },

    res: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        const a = req.body.a
        const b = req.body.b
        const result = `${a} - ${b} = ${a - b}`

        res.status(status.ok).send(`${result}`)
    },
    mul: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        const a = req.body.a
        const b = req.body.b
        const result = `${a} x ${b} = ${a * b}`

        res.status(status.ok).send(`${result}`)
    },
    div: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        const a = req.body.a
        const b = req.body.b

        if (b !== 0) {
            const result = `${a} ➗ ${b} = ${a / b}`

            res.status(status.ok).send(`${result}`)
        } else {
            res.status(status.unProcessedEntiy).send(`Unprocessable Entity`)
        }
    },
};