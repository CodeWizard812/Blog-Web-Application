import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));//treats public as a static folder and can be navigated from anywhere.

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/login", (req, res) =>{
    res.render("login.ejs");
});

app.get("/signup", (req, res) =>{
    res.render("signup.ejs");
});

app.get("/home", (req, res)=>{
    res.render("home.ejs");
})

app.post("/create", (req, res) =>{
    res.render("create.ejs",{
        postTopic: req.body["createTopic"],
        postData: req.body["createPost"]
    } );

});

app.post("/delete", (req, res) =>{
    res.render("create.ejs",{
        postTopic: "Deleted Successfully",
        postData: ""
    } );

});

app.post("/edit", (req, res) =>{
    res.render("edit.ejs",{
        editTopic: req.body["postTopic"],
        editData: req.body["postData"]
    });
})

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

