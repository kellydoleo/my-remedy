//Get Route from Express
const { Router } = require("express");


const Remedy = require('../models/remedy.js');

//create new router for our todos views
const router = Router();


/////ROUTES 
///INDEX ROUTE
router.get('/', (req, res) => {
    res.render('/index.jsx');
    });


////GUIDE ROUTE, shows the posts of recipes/advice/tips
router.get("/guide", (req, res)=>{
    res.render("guide.jsx", {data:Remedy})
})

 ///////NEW ROUTE 
router.get("/new", (req, res) => {
    res.render("new.jsx");
})


////LEARN ROUTE
router.get("/learn", (req, res)=>{
    res.render("learn.jsx")
})


// // ////CREATE ROUTE
router.post("/guide", (req, res)=> {
    Remedy.create(req.body, (error, result) => {
        res.redirect("/guide");
      });
})


/////EDIT ROUTE 
// router.get("/:index/edit", (req, res) => {
//     res.render("pokedex/edit.jsx", {
//         pokemon: pokemon[req.params.index],
//         index: req.params.index
//     } )
// })



////PUT/UPDATE ROUTE
// router.put("/:index", (req, res) => {
//     pokemon[req.params.index] = req.body
//     res.redirect(`/pokemon/`)
// })






//SHOW ROUTE - shows an individual post of the guide
router.get("/guide/:id", (req, res) => {
    res.render("show.jsx", {
        remedy: remedy[req.params.index],
        index: req.params.index
    });
})


//DELETE Route
// router.delete("/:index", (req, res) => {
//     pokemon.splice(req.params.index,1)
//     res.redirect("/pokemon")
// })


//Export Router to be used in Server.js
module.exports = router;