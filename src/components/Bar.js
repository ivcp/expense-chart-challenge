import React from 'react';
import styles from './Bar.module.css';

const Bar = ({ day, amount, height, today }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{
            '--height': `${height}%`,
            '--today': today && 'hsl(var(--cyan))',
            '--today-hover': today && 'hsl(var(--cyan), 0.6)',
          }}
        >
          <div className={styles.expense}>${amount}</div>
        </div>
      </div>
      <label className={styles.label}>{day}</label>
    </div>
  );
};

export default Bar;
