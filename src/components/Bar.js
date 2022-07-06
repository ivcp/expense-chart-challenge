import React from 'react';
import styles from './Bar.module.css';

const Bar = ({ day, amount, today }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{
            '--height': `${amount}%`,
            backgroundColor: today ? 'var(--cyan)' : ' var(--soft-red)',
          }}
        >
          <div className={styles.expense}>$55.31</div>
        </div>
      </div>
      <label className={styles.label}>{day}</label>
    </div>
  );
};

export default Bar;
