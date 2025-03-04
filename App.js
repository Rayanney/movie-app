import React, { useState } from "react";
import MovieList from "./MovieList.js";
import Filter from "./filter.js";
import {browserRouter as router,routes,route} from "react-router-dom";
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A journey beyond the stars",
      rating: 4,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = () => {
    const newMovie = {
      title: "New Movie",
      description: "A new description",
