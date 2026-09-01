const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const products = require("./data/produtcs.json");

const produtRouter = express.Router();

const app = express();

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

produtRouter.get("/", (req, res) => {
    res.render("products", {
        products: products
    });
});

produtRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    res.render("product", {
        product: products[id]
    });
});

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