import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.get("/features", (req,res) =>{
    res.render("features.ejs");
});

app.get("/FAQs", (req, res) => {
    res.render("FAQs.ejs");
});

app.get("/about", (req, res)=>{
    res.render("about.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

