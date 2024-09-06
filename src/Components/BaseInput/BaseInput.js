import styles from "./BaseInput.module.css";

function BaseInput({ propName, propType, propChange = () => {} }) {
  return (
    <label className={styles.wrap}>
      <span className={styles.name}>{propName}</span>
      <input
        className={styles.field}
        required
        type={propType}
        minLength="3"
        maxLength="40"
        onChange={propChange}
      />
    </label>
  );
}

export default BaseInput;
