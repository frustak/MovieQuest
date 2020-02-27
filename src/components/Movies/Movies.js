import React from 'react';
import styles from './Movies.module.css';
import Movie from './Movie/Movie';

const Movies = props => {
  const movies = props.moviesData
    ? props.moviesData.map(movieData => (
        <Movie
          movieData={movieData}
          key={movieData.imdbID}
          clicked={props.movieClickHandler}
        />
      ))
    : null;

  return <div className={styles.Movies}>{movies}</div>;
};

export default Movies;
