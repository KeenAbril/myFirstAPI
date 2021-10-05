//request, response
module.exports.helloWorld = (req, res) => {
    const responseObj = {"alumnos": [
        "Gerard",
        "Khadija",
        "Alex",
        "Roger",
        "Xavier",
        "Eric",
        "Miquel",
        "Alba",
        "Raul",
        "Marc",
        "Jordi",
        "Marc",
        "Pol",
        "Jordi",
        "Alvar",
        "Dani",
        "Alejandro"
      ],
      "numAlumnos": 17}
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}