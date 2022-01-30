const express = require("express");
const middlewareAuth = require("../middleware/auth");

const api = require("../api/apiStarWars");

const router = express.Router();

router.use(middlewareAuth);

router.get("/index", async (req, res) => {
    const page = req.query.page ? req.query.page : 1;

    let dados = await api.index(page);
    return res.json({ data: dados });
});

router.get("/teste", (req, res) => {
    const { headers, body, params, query } = req;
    return res.json({ headers: headers, body, params, query });
});

module.exports = (app) => app.use("/starwars", router);
