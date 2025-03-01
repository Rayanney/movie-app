import React from "react";
//first component moviecard
const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "", padding: "10px", margin: "10px" }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "150px" }} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;