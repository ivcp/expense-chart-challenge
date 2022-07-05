import React from 'react';
import styles from './Bar.module.css';

const Bar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}></div>
      <label className={styles.label}>mon</label>
    </div>
  );
};

export default Bar;
