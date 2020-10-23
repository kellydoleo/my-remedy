//Get Route from Express
const { Router } = require("express");

const auth = require("./authmiddleware");

// const mongoose = require("../db/dbconn.js")
const mongojs = require('mongojs')
const db = mongojs("mongodb+srv://sei:sei2020@sei.rqdkr.azure.mongodb.net/", ["my-remedy"]);
const mycollection = db.collection('my-remedy')
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
// router.get("/guide", (req, res)=>{
//     Remedy.find({}, (error, allRemedies) => {
//         res.render("guide.jsx", { remedy : allRemedies });
//       });
    
// })

router.get("/guide", auth, (req, res)=>{
  Remedy.find({}, (error, allRemedies) => {
      res.render("guide.jsx", { 
        remedy : allRemedies,
        user: req.session
       });
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


/////EDIT ROUTE on Profile
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



// /// UPDATE guide info
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
// router.get("/auth/profile", (req, res)=>{
//   Login.find({}, (error, user) => {
//     res.render("profile.jsx", { login : user });
//   });
 
// })

router.get("/profile", auth, (req, res)=>{
  Login.find({user: req.session.username}, (error, users) => {
    res.render("profile.jsx", { 
      login : users,
      user: req.session
     });
  });
 
})






//SHOW ROUTE - shows an individual post of the guide- 
router.get("/guide/:id", (req, res) => {
  Remedy.findById(req.params.id, (err, data) => {
    res.render("show.jsx", {remedy: data});
  });
});


/////EDIT GUIDE POSTS


// router.get("/guide/:id", (req, res) => {
//     res.render("show.jsx", {
//         remedy: remedy[req.params.index],
//         index: req.params.index
//     });
// })

// router.get("/guide/:id", (req, res) => {
//   Remedy.find(({_id:req.params.id}), (err, found) => {
//     res.render("show.jsx", { remedy: found });
//   })
// });

// router.get("/guide/:id", (req, res) => {
//   db.mycollection.find({_id:req.params.id}, (error,one) => {
//       res.render("show.jsx", { remedy: one})})
//   })

  // router.get("/guide/:id", (req, res) => {
  //   Remedy.find({}, (error,oneRemedy) => {
  //       res.render("show.jsx", { remedy: oneRemedy})})
  //   })


// router.get("/guide/:id", (req, res) => {
//   res.render("show.jsx", {
//     Remedy.find(({_id:req.params.id}):
//      Remedy[req.params.id],
//       id: req.params.id
//   });
// })



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