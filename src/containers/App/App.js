import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Motd from '../../components/Motd/Motd';
import Movies from '../../components/Movies/Movies';
import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/core';
import FullMovie from '../../components/FullMovie/FullMovie';
import Pagination from '../../components/Pagination/Pagination';
import axios from 'axios';

const override = css`
  position: fixed;
  margin: 16px auto;

  z-index: 100;
  width: 100%;
  height: 100%;
`;
const API_KEY = '90d42c5';
const ITEM_PER_PAGE = 10;

const App = props => {
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState('');
  const [rawMoviesData, setRawMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieIsShown, setMovieIsShown] = useState(false);
  const [fullMovie, setFullMovie] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const searchChangeHandler = event => setSearchInput(event.target.value);

  const searchClickHandler = async () => {
    if (!searchInput.trim()) return;
    setIsLoading(true);

    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}`
    );

    setRawMoviesData(response.data);
    setSearchData(searchInput);
    setSearchInput('');
    setActiveStep(0);
    setIsLoading(false);
  };

  useEffect(() => {
    const pageHandler = async () => {
      if (activeStep === 0 && !rawMoviesData) return;
      setIsLoading(true);

      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchData}&page=${activeStep +
          1}`
      );

      setRawMoviesData(response.data);
      setIsLoading(false);
    };

    pageHandler();
  }, [activeStep, searchData]);

  const movieClickHandler = async id => {
    setIsLoading(true);

    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );

    const goBackHandler = () => setMovieIsShown(false);
    setFullMovie(
      <FullMovie movieData={response.data} clicked={goBackHandler} />
    );
    setMovieIsShown(true);
    setIsLoading(false);
  };

  return movieIsShown ? (
    <div>{fullMovie}</div>
  ) : (
    <div className={styles.App}>
      <HashLoader loading={isLoading} css={override} />
      <Header />
      <Search
        changed={searchChangeHandler}
        clicked={searchClickHandler}
        inputValue={searchInput}
      />
      <Motd
        error={rawMoviesData?.Error}
        totalResults={rawMoviesData?.totalResults}
      />
      <Movies
        moviesData={rawMoviesData?.Search}
        movieClickHandler={movieClickHandler}
      />
      {rawMoviesData?.totalResults > ITEM_PER_PAGE ? (
        <Pagination
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          steps={Math.ceil(rawMoviesData.totalResults / ITEM_PER_PAGE)}
        />
      ) : null}
    </div>
  );
};

export default App;
