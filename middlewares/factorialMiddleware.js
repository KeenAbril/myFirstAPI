const status = {
    ok: 200,
    notFound: 404,
    unProcessedEntiy: 442,
}

module.exports.checkNumQueryParam = (req, res, next) =>
{
    if (Number.isInteger(+req.query.num)) {
        next()
    } else {
        res.estatus(status.unProcessedEntiy).send({
            message: '"num" param must be integer'
        });
    }
}