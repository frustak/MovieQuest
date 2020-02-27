import React from 'react';
import styles from './Search.module.css';

const Search = props => (
  <div className={styles.Search}>
    <input
      onChange={props.changed}
      value={props.inputValue}
      onKeyUp={event => {
        if (event.keyCode === 13) {
          event.preventDefault();
          props.clicked();
        }
      }}
      autoFocus
    />
    <button onClick={props.clicked}>Search</button>
  </div>
);

export default Search;
