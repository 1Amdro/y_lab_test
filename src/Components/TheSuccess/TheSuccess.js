import styles from "./TheSuccess.module.css";
import BaseButton from "../BaseButton/BaseButton";

function TheSuccess({ propHandleLogin }) {
  return (
    <div className={styles.wrap}>
      <h2>You have successfully logged in!</h2>
      <BaseButton propName="Logout" propClick={propHandleLogin} />
    </div>
  );
}

export default TheSuccess;
