const URL_STARWARS = "https://swapi.dev/api/people?format=json";
const axios = require("axios");
const api = axios.create();

async function index(page = 1) {
    const response = await api.get(URL_STARWARS + `&page=${page}`);
    return response.data.results;
}

module.exports = {
    index,
};
