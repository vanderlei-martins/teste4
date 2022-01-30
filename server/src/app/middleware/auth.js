const helpersAuth = require('../helpers/Auth');

module.exports = (req, res, prox) => {
    const auth = req.headers.authorization;

    if(!auth) {
        return res.status(401).send({msg: "Token � nulo"});
    }

    const [, valueToken] = auth.split(' ');

    if(!valueToken) {
        return res.status(401).send({msg: "Token � invalido"});
    }

    const idUser = helpersAuth.verifyToken(valueToken);

    if(!idUser) {
        return res.status(401).send({ msg: "Token � invalido #2" });
    }

    req.idUser = idUser;

    return prox();
}