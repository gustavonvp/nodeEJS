const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            mensagem: "Desenvolver aplicações/serviços de forma fácil",
        },
        {
            title: "E",
            mensagem: "EJS usa JavaScript para renderizar HTML",
        }
    ]

    res.render("pages/index", {
        qualitys: items,
    });
})

app.get("/sobre", function (req,res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando servidor")