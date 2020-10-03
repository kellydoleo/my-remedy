//Get Route from Express
const { Router } = require("express");

const mongoose = require("mongoose")

const Remedy = require('../models/remedy.js');
const Login = require("../models/auth/index.js");

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
//   Login.find({}, (error, user) => {
//     res.render("edit.jsx", { login : user });
//   });
// })

router.get('/:id/edit', (req, res)=>{
  
    res.render("edit.jsx", {
        Login: Login[req.params.id],
        id: req.params.id
    } )
})



////PUT/UPDATE ROUTE login info
router.put("/:index", (req, res) => {

  Login[req.params.index] = req.body
  res.redirect(`/profile`) 
});



/// UPDATE guide info
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

////PROFILE ROUTE
router.get("/profile", (req, res)=>{
  Login.find({}, (error, user) => {
    res.render("profile.jsx", { login : user });
  });
 
})





//SHOW ROUTE - shows an individual post of the guide- 
// router.get("/guide/:id", (req, res) => {
//     res.render("show.jsx", {
//         remedy: remedy[req.params.index],
//         index: req.params.index
//     });
// })

router.get("/guide/:id", (req, res) => {
  Remedy.find(({_id:req.params.id}), (err, found) => {
    res.render("show.jsx", { remedy: found });
  })
});





// DElETE
router.delete("/guide/:id", (req, res) => {
    Remedy.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/guide/");
    });
  });



  router.post("/signup", async (req, res) => {
    // ENCRYPT THE PASSWORD
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // SAVE NEW USER IN DB
    const newUser = await Login.create(req.body);
  
      // SAVE NAME AND EMAIL IN DB
  
  // newUser = await Name.create(req.body);
  // newUser = await Email.create(req.body);
  
    // Redirect to login page
    res.redirect("/auth/login");
  });


  //LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

//Export Router to be used in Server.js
module.exports = router;