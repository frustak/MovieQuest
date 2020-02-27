import React from 'react';
import styles from './FullMovie.module.css';

const FullMovie = props => (
  <>
    <div className={styles?.FullMovie}>
      <div>
        <p>
          <strong>Title:</strong> {props?.movieData?.Title}
        </p>
        <p>
          <strong>Year:</strong> {props?.movieData?.Year}
        </p>
        <p>
          <strong>Rated:</strong> {props?.movieData?.Rated}
        </p>
        <p>
          <strong>Released:</strong> {props?.movieData?.Released}
        </p>
        <p>
          <strong>Runtime:</strong> {props?.movieData?.Runtime}
        </p>
        <p>
          <strong>Genre:</strong> {props?.movieData?.Genre}
        </p>
        <p>
          <strong>Director:</strong> {props?.movieData?.Director}
        </p>
        <p>
          <strong>Writer:</strong> {props?.movieData?.Writer}
        </p>
        <p>
          <strong>Actors:</strong> {props?.movieData?.Actors}
        </p>
        <p>
          <strong>Language:</strong> {props?.movieData?.Language}
        </p>
        <p>
          <strong>Country:</strong> {props?.movieData?.Country}
        </p>
        <p>
          <strong>Awards:</strong> {props?.movieData?.Awards}
        </p>

        {props?.movieData?.movieData?.Ratings?.map(rating => (
          <p>
            <strong> {rating?.Source}:</strong> {rating?.value}
          </p>
        ))}

        <p>
          <strong>Metascore:</strong> {props?.movieData?.Metascore}
        </p>
        <p>
          <strong>imdbRating:</strong> {props?.movieData?.imdbRating}
        </p>
        <p>
          <strong>imdbVotes:</strong> {props?.movieData?.imdbVotes}
        </p>
        <p>
          <strong>Type:</strong> {props?.movieData?.Type}
        </p>
        <p>
          <strong>DVD:</strong> {props?.movieData?.DVD}
        </p>
        <p>
          <strong>BoxOffice:</strong> {props?.movieData?.BoxOffice}
        </p>
        <p>
          <strong>Production:</strong> {props?.movieData?.Production}
        </p>
        <p>
          <strong>Website:</strong> {props?.movieData?.Website}
        </p>
        <p>
          <strong>Plot:</strong> {props?.movieData?.Plot}
        </p>
      </div>
      <img src={props?.movieData?.Poster} alt={props?.movieData?.Title} />
      <button onClick={props.clicked}>GO BACK</button>
    </div>
  </>
);

export default FullMovie;
