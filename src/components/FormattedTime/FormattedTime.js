import styles from "./FormattedTime.module.scss";
const FormattedTime = ({ time }) => {
  const formatTime = (miliseconds) => {
    let mili = Math.floor(miliseconds % 1000);
    let seconds = Math.floor(miliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${mili}`;
  };

  return (
    <div className={styles.timer}>
      <span>{formatTime(time)}</span>
    </div>
  );
};

export default FormattedTime;
