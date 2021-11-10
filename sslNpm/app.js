const express = require("express")
const app = express()
const ejs = require("ejs")
const router = express.Router()
const bodyParser = require("body-parser")
const fs = require("fs")
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")
app.engine("ejs",require("ejs").__express)

const session = require('express-session')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


router.get("/", (req, res)=>{
    res.render("index",{pagename:"Home"})
    // res.render("index.ejs", {user:true, people: ['Justin', 'Adam', 'Eric', 'John', 'Josh']})
    // const ejsTemp = fs.readFileSync(__dirname + "/templates/index.ejs", "utf-8")
    // const html = ejs.render(ejsTemp, {user:false, people: ['Justin', 'Adam', 'Eric', 'John', 'Josh']})
//     res.end(html)
    
})

// router.get("/loggedIn", (req,res)=>{
//     req.session.isLoggedIn = true;
//     res.send("You have been logged in")
// })

// router.get("/asdf", (req,res)=>{
//     req.session.asdf = {foo: "bar"};
//     res.send("Saved!")
// })

// router.get("/loggedIn", (req,res)=>{
//     req.session.isLoggedIn = true;
//     res.send("You have been logged in")
// })

// router.get("/is-logged-in", (req,res)=>{
//     if(req.sessing.isLoggedIn){
//         res.send("You are logged in")
//     }
//     else{
//         res.send("You are NOT logged in")
//     }
// })

router.get("/gray", (req,res)=>{
    res.render("gray",{pagename:"Gray"})
})

router.get("/themes", (req,res)=>{
    res.render("themes",{pagename:"Themes"})
})

router.post("/register", (req,res)=>{
    
    console.log("Male Radio Btn: " + req.body.male)
    console.log("Consent check: " + req.body.consent)
    var errors = [];
    var success = [];

    if(req.body.fName == ""){
        errors.push("First name is required")
    }
    if(req.body.lName == ""){
        errors.push("Last name is required")
    }
    if(req.body.address == ""){
        errors.push("Address is required")
    }
    if(req.body.city == ""){
        errors.push("City is required")
    }
    if(req.body.state == ""){
        errors.push("State is required")
    }
    if(req.body.zip == ""){
        errors.push("Zip-code is required")
    }
    if(req.body.age == "0"){
        errors.push("Please select a valid age")
    }
    if(!req.body.male == true && !req.body.female == true && !req.body.other == true){
        errors.push("Gender is required")
    }
    if(!req.body.consent == true){
        errors.push("You must agree to the terms")
    }
    if(req.body.bio == ""){
        errors.push("Please enter a bio")
    }
    // if(req.body.fName !== "" && req.body.lName !== "" && req.body.address !== "" && req.body.city !== "" && req.body.state !== "" && req.body.zip != "" && req.body.age !== "0" && (req.body.male !== "undefined" && req.body.female !== "undefined" && req.body.other !== "undefined") && req.body.consent !== "undefined" && req.body.bio !== ""){
    //     success.push("Registration Success!")
    // }
    if(errors.length == 0){
        success.push("Registration Success!")
    }

    res.render("index",{pagename:"Home", errors, success})
})

router.post("/login", (req,res)=>{
    console.log(req.body.email)
    console.log(req.body.password)

    var errors = [];
    var success = [];

    if(req.body.email == ""){
        errors.push("Email is Required")
    }
    if(req.body.password == ""){
        errors.push("Password is Required")
    }

    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(req.body.email)){
        errors.push("Email is not valid")
    }
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(req.body.password)){
        errors.push("Password is not valid")
    }

    if(errors.length == 0){
        success.push("Login Success")
    }

    res.render("index", {pagename:"Home", errors, success})
})

//prefix
app.use(express.static("public"));
app.use("/", router)
// app.use("/public", express.static("public"))


var server = app.listen(3000)

//npm init
//npm install --save express
//node app.js

//npm install --save-dev nodemon
//"dev": "nodemon app.js" in package
//npm run dev

//npm install --save body-parser ejs request

//telnet localhost 3000
//GET / HTTP/1.1