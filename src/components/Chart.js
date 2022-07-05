import React from 'react';
import styles from './Chart.module.css';

const Chart = () => {
  return (
    <div className={styles.chart}>
      <h1>Spending - Last 7 days</h1>
      <div>chart</div>
      <hr />
      <div>
        <div>
          <p>Total this month</p>
          <div>$478.33</div>
        </div>
        <div>
          <div>+2.4%</div>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
