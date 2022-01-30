const database = require("../../database");
const User = require("../model/user");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const Consts = require("../../config/consts");
const helpersAuth = require('../helpers/Auth');

module.exports = {
    /**
     * Listar usuarios
     */
    async index(req, res) {
        const sync = await database.sync(); // tenta confirmar se isso aq precisa mesmo
        
        const users = await User.findAll();

        if (!users) {
            return res.json({ msg: "Nenhum registro encontrado" });
        }
        console.log(users);
        
        return res.json({data: users});
    },

    /**
     * Cadastrar usuarios
     */
    async post(req, res) {
        const sync = await database.sync();

        const { name, mail, password } = req.body;

        if (await User.findOne({ where: { mail: mail } })) {
            return res.status(400).json({
                msg: "E-mail já cadastrado",
            });
        }

        const hashPassword = await bcrypt.hash(password, 9);

        try {

            const user = await User.create({
                name: name,
                mail: mail,
                password: hashPassword,
            });

            const token = helpersAuth.createToken(user.id);

            return res.json({ user, token });
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    /**
     * Faz a autenticação do usuario gerando o token do JWT
     */
    async auth(req, res) {
        const sync = await database.sync();

        const { mail, password } = req.body;
        const user = await User.findOne({ where: { mail: mail } });

        if (!user) {
            return res.status(400).json({ msg: "Nenhum registro encontrado" });
        }

        // $hashDecript = await bcrypt.compare(password, user.password);
        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ msg: "Usuario/Senha inválidos!" });
        }

        // const token = helpersAuth.createToken(user.id);

        return res.json({ user, token: helpersAuth.createToken(user.id) });
    },
};
