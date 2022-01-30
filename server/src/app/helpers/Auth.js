const jwt = require("jsonwebtoken");
const Consts = require("../../config/consts");

module.exports = {
    createToken(id) {
        return jwt.sign({ id: id }, Consts.auth.secret, {
            expiresIn: 60000,
        });
    },

    verifyToken(token) {
        return jwt.verify(token, Consts.auth.secret, (error, decoded) => {
            if (error) {
                console.log('cai aqui');
                return false;
            }

            console.log(decoded);
            return decoded.id;
        })
    },
};
