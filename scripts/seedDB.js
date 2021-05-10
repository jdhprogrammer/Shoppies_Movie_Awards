const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Movies collection and inserts the movies below
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://jdhprogrammer:Spoons081410!@cluster0.vjufe.mongodb.net/shoppiesDB?retryWrites=true&w=majority`);

const movieSeed = [
  {
    title: "Guardians of the Galaxy 2",
    year: "2014",
    id: "tt2015381",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg",
    date: new Date(Date.now())
  }
];

db.Movie.remove({})
  .then(() => db.Movie.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vjufe.mongodb.net/shoppiesDB?retryWrites=true&w=majority`;