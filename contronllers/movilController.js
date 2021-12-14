class Movil {
    constructor(modelo, precio, pulgadas, ram, cpu) {
        this.modelo = modelo;
        this.precio = precio;
        this.pulgadas = pulgadas; 
        this.ram = ram;
        this.cpu = cpu;
    }
}

let moviles = []

const status = {
    ok: 200,
    notFound: 404,
}

module.exports = {
    anadir: (req, res) => {
        //Aquí hauria d'anar la petició a la BBDD per obtenir les dades d'un user
        const modelo = req.body.modelo;
        const precio = req.body.precio;
        const pulgadas = req.body.pulgadas; 
        const ram = req.body.ram;
        const cpu = req.body.cpu;

        const movil = new Movil(modelo, precio, pulgadas, ram, cpu);
        moviles.push(movil);

        res.status(status.ok).send(`Guardado`);

        /* if (numero) {
            
        } else {
            const msg = {error: 'No se ha podido realizar la combinacion'};
            res.status(status.notFound).send(msg);
        } */
    },

    mostrar: (req, res) => {

        res.status(status.ok).send(`${JSON.stringify(moviles)}`);
        
        /* if (numero) {
            
        } else {
            const msg = {error: 'No se ha podido realizar la combinacion'};
            res.status(status.notFound).send(msg);
        } */
    },

    actualizar: (req, res) => {
        const modelo = req.body.modelo;
        const precio = req.body.precio;
        const pulgadas = req.body.pulgadas; 
        const ram = req.body.ram;
        const cpu = req.body.cpu;
        const modeloActualizar = req.params.modelo;

        const movil = new Movil(modelo, precio, pulgadas, ram, cpu);

        for (let i = 0; i < moviles.length; i++) {
            if(moviles[i].modelo === modeloActualizar) {
                moviles[i] = movil
            }            
        }

        res.status(status.ok).send('Modificado');
        
        /* if (numero) {
            
        } else {
            const msg = {error: 'No se ha podido realizar la combinacion'};
            res.status(status.notFound).send(msg);
        } */
    },
    eliminar: (req, res) => {

        const modeloActualizar = req.params.modelo;

        for (let i = 0; i < moviles.length; i++) {
            if(moviles[i].modelo === modeloActualizar) {
                moviles.splice(i, 1)
            }            
        }

        res.status(status.ok).send('Borrado');
        
        /* if (numero) {
            
        } else {
            const msg = {error: 'No se ha podido realizar la combinacion'};
            res.status(status.notFound).send(msg);
        } */
    },
};