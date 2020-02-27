import React from 'react';
import styles from './Motd.module.css';

const Motd = props => {
  const msg = props.error
    ? props.error
    : 'Sharing a few of our favorite movies';

  return <div className={styles.Motd}>{msg}</div>;
};

export default Motd;
