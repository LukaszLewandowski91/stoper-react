import styles from "./Timer.module.scss";
import { useEffect, useState } from "react";
import FormattedTime from "../FormattedTime/FormattedTime";

const Timer = (props) => {
  const [time, setTime] = useState(0);
  const [startWatch, setStartWatch] = useState(false);

  useEffect(() => {
    let start;

    if (startWatch) {
      start = setInterval(() => {
        setTime((prevValue) => prevValue + 10);
      }, 10);
    } else if (!startWatch) {
      clearInterval(start);
    }
    return () => clearInterval(start);
  }, [startWatch]);

  return (
    <div>
      <div className={styles.timer}>
        <FormattedTime time={time} />
      </div>
      <div>
        <button className={styles.button} onClick={() => setStartWatch(true)}>
          Start
        </button>
        <button className={styles.button} onClick={() => setStartWatch(false)}>
          Stop
        </button>
        <button className={styles.button} onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
