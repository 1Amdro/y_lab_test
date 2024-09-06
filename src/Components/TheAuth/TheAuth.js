import { useEffect, useState } from "react";
import BaseButton from "../BaseButton/BaseButton";
import BaseInput from "../BaseInput/BaseInput";
import styles from "./TheAuth.module.css";
import BaseError from "../BaseError/BaseError";

function TheAuth({ propOnLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
      setError("Email is not valid");
      return;
    }
    fakeFetch(email, password)
      .then((response) => {
        if (response.ok) {
          console.log("Success!");
          propOnLogin();
        } else {
          setError("Email or password is incorrect");
        }
      })
      .catch((error) => {
        setError("Error when logging in");
      });
  };

  useEffect(() => {
    setError("");
  }, [email, password]);

  const fakeFetch = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "test123") {
          resolve({ ok: true });
        } else {
          resolve({ ok: false });
        }
      }, 500);
    });
  };

  return (
    <div>
      <form className={styles.wrap}>
        <h2 className={styles.title}>SIGN IN</h2>
        <BaseInput
          propName={"Email"}
          propType={"email"}
          propChange={handleEmail}
        />
        <BaseInput
          propName={"Password"}
          propType={"password"}
          propChange={handlePassword}
        />
        {error ? (
          <>
            <BaseError propError={error} />
          </>
        ) : null}

        <BaseButton
          propName={"Login"}
          propType={"submit"}
          propClick={handleLogin}
        />
      </form>
    </div>
  );
}

export default TheAuth;
