const status = {
    ok: 200,
    notFound: 404,
    unProcessedEntiy: 442,
    resposeStatus: 400,
}

module.exports.checkNumQueryParam = (req, res, next) =>
{

    let num = +req.params.numero
    console.log(num)
    if (Number(num) && num >= 1) {
        next()
    } else {
        res.status(status.resposeStatus).send({
            message: '"string" no es correcto'
        });
    }
}