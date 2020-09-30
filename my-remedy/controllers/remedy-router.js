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
    Remedy.find({}, (error, allRemedies) => {
        res.render("guide.jsx", { remedy : allRemedies });
      });
    
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

// router.post("/", (req, res)=> {
//     pokemon.push(req.body);
//     res.redirect("/pokemon");
// })


/////EDIT ROUTE 
// router.get("/:index/edit", (req, res) => {
//     res.render("pokedex/edit.jsx", {
//         pokemon: pokemon[req.params.index],
//         index: req.params.index
//     } )
// })



/// UPDATE
router.put("/guide/:id", (req, res) => {
    
  
    Remedy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedModel) => {
        res.redirect("/guide");
      }
    );
  });






//SHOW ROUTE - shows an individual post of the guide
router.get("/guide/:id", (req, res) => {
    res.render("show.jsx", {
        remedy: remedy[req.params.index],
        index: req.params.index
    });
})


// DElETE
router.delete("/guide/:id", (req, res) => {
    Remedy.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/guide/");
    });
  });


//Export Router to be used in Server.js
module.exports = router;