// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/celebrities/create", (req, res, next) => {
  res.render('celebrities/new-celebrity');
});

router.post("/celebrities/create", (req, res, next) => {
   return Celebrity.create(req.body)
    .then(() => {
      return Celebrity.find()
        .then((celebs) => {
        res.redirect("/celebrities");})
    })
    .catch((error) => {
      console.log("error",error);
        res.render("celebrities/new-celebrity");
    });
});

router.get("/celebrities", (req, res, next) => {
    return Celebrity.find()
    .then((celebs) => {
      res.render("celebrities/celebrities",{celebs});
    })
    .catch((error) => {
        console.log("error",error);
    });
  });


module.exports = router;