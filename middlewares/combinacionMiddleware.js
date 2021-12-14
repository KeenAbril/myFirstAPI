const status = {
    ok: 200,
    notFound: 404,
    unProcessedEntiy: 442,
}

module.exports.checkString = (req, res, next) =>
{
    if (req.body.string === "mi-caja-fuerte") {
        next()
    } else {
        res.estatus(status.unProcessedEntiy).send({
            message: '"num" param must be integer'
        });
    }
}