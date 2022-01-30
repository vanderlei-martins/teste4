const api = require("./src/app/api/apiStarWars");
const axios = require("axios");

(async () => {
    // const database = require("./src/database/index");
    // const User = require("./src/app/model/user");

    // try {
    //     const sync = await database.sync();

    //     const users = await User.findAll();

    //     console.log(users);
    // } catch (error) {
    //     console.log(error);
    // }

    // let dados = await api.index(1);
    // console.log(dados);

    const api = axios.create();
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQzNTgzMjA2LCJleHAiOjE2NDM2NDMyMDZ9.C3IQlB8jsLe1b2oln2jl2vcMIK9S8pezz6qsoupi3Uk';
    const response = await axios.get("http://localhost:5000/starwars/teste", {
        headers: { Authorization: `Bearer ${token}`},
    });

    console.log(response.data);
})();
