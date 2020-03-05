import React from 'react';
import styles from './Motd.module.css';

const Motd = props => {
  const msg = props.error ? props.error : 'Type Something To Search ( •̀ ω •́ )y';

  return <div className={styles.Motd}>{msg}</div>;
};

export default Motd;
