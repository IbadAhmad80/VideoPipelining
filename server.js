const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const res = require("express/lib/response");

app.use(cors());

routes(app);

app.listen(8000);

let a = "Hello World";

a = "Not Hellp World";

app.get("/", (_, res) => {
    res.send("perfect");
});
