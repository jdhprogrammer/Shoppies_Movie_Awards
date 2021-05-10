const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  ID: String,
  Title: {type: String, required: true},
  Year: {type: String, required: true},
  Type: {type: String, required: true},
  Poster: {type: String},
  Genre: {type: String},
  Actors: {type: String},
  Director: {type: String},
  Plot: {type: String},
  Country: {type: String},
  imdbRating: {type: String},
  Production: {type: String},
  Website: {type: String},
  date: {type: Date, default: Date.now}
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
