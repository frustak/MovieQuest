import React from 'react';
import styles from './Movie.module.css';

const Movie = props => (
  <div
    className={styles.Movie}
    onClick={() => props.clicked(props.movieData.imdbID)}
  >
    <h3>{props.movieData.Title}</h3>
    <img src={props.movieData.Poster} alt={props.movieData.Title} />
    <p>({props.movieData.Year})</p>
  </div>
);

export default Movie;
