import Balance from './components/Balance';
import Chart from './components/Chart';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.main}>
      <Balance />
      <Chart />
      <div className={styles.attribution}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/ivcp">ivcp</a>.
      </div>
    </main>
  );
}

export default App;
