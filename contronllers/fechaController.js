const status = {
    ok: 200,
    notFound: 404,
}

module.exports = {
    fechaMs: (req, res) => {
        const date =  {date: Date.now()};
        res.status(status.ok).send(date);
    },
    fecha: (req, res) => {
        const date = new Date();
        const dateFormat = {date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`};
        res.status(status.ok).send(dateFormat);
    },

    fechaHora: (req, res) => {
        const date = new Date();
        const dateFormat = {date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`};
        res.status(status.ok).send(dateFormat);
    },
};