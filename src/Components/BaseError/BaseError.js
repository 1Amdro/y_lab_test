import styles from "./BaseError.module.css";

function BaseError({ propError }) {
  return (
    <div className={styles["base-error"]}>
      <h3>Error:</h3>
      <h4>{propError}</h4>
    </div>
  );
}

export default BaseError;
