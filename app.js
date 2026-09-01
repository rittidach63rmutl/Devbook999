const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const produtRouter = require("./src/views/router/productsRouter");


app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");


app.use("/products", produtRouter);

app.get("/", (req, res) => {
    res.render("index", {
        username: "BOOKZA888+",
        customers: [
            "kitty",
            "picachu",
            "doramoneiei"
        ]
    });
});

if (require.main === module) {
    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;