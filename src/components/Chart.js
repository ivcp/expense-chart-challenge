import Bar from './Bar';
import data from '../../src/data.json';
import styles from './Chart.module.css';

const Chart = () => {
  const highestAmount = Math.max(...data.map(day => day.amount));
  const dayIndex = new Date().getDay();
  const today = dayIndex === 0 ? 6 : dayIndex - 1;

  return (
    <div className={styles.chart}>
      <h1>Spending - Last 7 days</h1>
      <div className={styles.bars}>
        {data.map((day, i) => (
          <Bar
            key={day.day}
            day={day.day}
            today={today === i}
            amount={day.amount}
            height={(day.amount * 100) / highestAmount}
          />
        ))}
      </div>
      <hr />
      <div className={styles.total}>
        <div>
          <p>Total this month</p>
          <div className={styles['total-amount']}>$478.33</div>
        </div>
        <div>
          <div className={styles.difference}>+2.4%</div>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
