const status = {
    ok: 200,
    notFound: 404,
}

module.exports = {
    dos: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        let tabla = "";
        for (let i = 0; i < 11; i++) {
            tabla = tabla + `2 x ${i} = ${2*i}\n`
        }
        console.log(tabla)
        res.status(status.ok).send(`${tabla}`)
    },
    tres: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        let tabla = "";
        for (let i = 0; i < 11; i++) {
            tabla = tabla + `3 x ${i} = ${3*i}\n`
        }
        console.log(tabla)
        res.status(status.ok).send(`${tabla}`)
    },
    cuatro: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        let tabla = "";
        for (let i = 0; i < 11; i++) {
            tabla = tabla + `4 x ${i} = ${4*i}\n`
        }
        console.log(tabla)
        res.status(status.ok).send(`${tabla}`)
    },
    cinco: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user

        let tabla = "";
        for (let i = 0; i < 11; i++) {
            tabla = tabla + `5 x ${i} = ${5*i}\n`
        }
        console.log(tabla)
        res.status(status.ok).send(`${tabla}`)
    },
};