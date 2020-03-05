import React from 'react';
import styles from './Motd.module.css';

const Motd = props => {
  const msg = props.error
    ? `${props.error} ＞﹏＜`
    : props.totalResults
    ? `I found ${props.totalResults} results (/≧▽≦)/`
    : 'Type Something To Search ( •̀ ω •́ )/';

  return <div className={styles.Motd}>{msg}</div>;
};

export default Motd;
