import React from 'react';
import styles from './Balance.module.css';

const Balance = () => {
  return (
    <div className={styles.balance}>
      <div>
        <p>My balance</p>
        <div className={styles.price}>$912.48</div>
      </div>
      <div className={styles.logo}></div>
    </div>
  );
};

export default Balance;
