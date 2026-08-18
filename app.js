const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require("./data/produtcs.json");

const produtRouter = express.Router();

const app = express();  
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs")

produtRouter.route("/").get((req,res)=>{
    res.render("products",
        products,
    );
});

app.use("/products",produtRouter)

app.get("/",(req,res)=>{

    res.render('index',{username: 'BOOKZA888+',customers:["kitty ","picachu","doramoneiei"]});
})

app.listen(PORT,()=>{

        debug("Listening on PORT" + chalk.red(" : "+PORT));

})

