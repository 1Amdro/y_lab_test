import styles from "./BaseButton.module.css";

function BaseButton({ propName, propClick = () => {}, propType = "button" }) {
  return (
    <button
      className={styles["base-button"]}
      onClick={propClick}
      type={propType}
    >
      {propName}
    </button>
  );
}

export default BaseButton;
