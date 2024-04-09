// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", (req, res, next) => {
    Celebrity.find()
        .then((celebs) => {
        res.render("movies/new-movie",{celebs});});
  });
  
  router.post("/movies/create", (req, res, next) => {
     return Movie.create(req.body)
      .then(() => {
        return Movie.find()
          .then((movies) => {
          res.redirect("/movies");})
      })
      .catch((error) => {
        console.log("error",error);
          res.render("movies/new-movie");
      });
  });
  
  router.get("/movies", (req, res, next) => {
      return Movie.find()
      .then((movies) => {
        res.render("movies/movies",{movies});
      })
      .catch((error) => {
          console.log("error",error);
      });
    });

module.exports = router;