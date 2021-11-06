const express = require("express")
const app = express()
const ejs = require("ejs")
const router = express.Router()
const bodyParser = require("body-parser")
const fs = require("fs")
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")
app.engine("ejs", ejs.__express)

router.get("/", (req, res)=>{
    res.render("index.ejs", {user:true, people: ['Justin', 'Adam', 'Eric', 'John', 'Josh']})
    // const ejsTemp = fs.readFileSync(__dirname + "/templates/index.ejs", "utf-8")
    // const html = ejs.render(ejsTemp, {user:false, people: ['Justin', 'Adam', 'Eric', 'John', 'Josh']})
//     res.end(html)
})

router.post("/login", (req,res)=>{
    console.log(req.body.email)
    console.log(req.body.password)
    var errors = [];

    if(req.body.email === ""){
        errors.push("Email is Required")
    }
    if(req.body.password === ""){
        errors.push("Password is Required")
    }

    if(REGEXPRESSION.test(req.body.email)){
        errors.push("Email is not valid")
    }
    if(REGEXPRESSION.test(req.body.password)){
        errors.push("Password is not valid")
    }

    res.redirect("/")
})

//prefix
app.use("/", router)
app.use("/public", express.static("public"))

// app.get("/", (request,response) =>{
//     response.send("<h1>Hello World!</h1>")
// })

app.listen(3000)

//npm init
//npm install --save express
//node app.js

//npm install --save-dev nodemon
//"dev": "nodemon app.js" in package
//npm run dev

//npm install --save body-parser ejs request

//telnet localhost 3000
//GET / HTTP/1.1