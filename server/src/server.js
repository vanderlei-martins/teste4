const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(routes);

require('./app/controllers/AuthController')(app);
require('./app/controllers/Starwarscontroller')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
