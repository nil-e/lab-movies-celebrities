// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/celebrities/create", (req, res, next) => {
  res.render('celebrities/new-celebrity');
});

router.post("/celebrities/create", (req, res, next) => {
   return celebrities.create(req.body)
    .then(() => {
        res.render("celebrities/celebrities");
    })
    .catch((error) => {
        res.render("celebrities/new-celebrity");
    });
});

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then(() => {
        
    })
    .catch((error) => {
        console.log("error",error);
    });

    res.render('celebrities/celebrities');
  });


module.exports = router;