import React from "react";
import TextInput from "../components/Input/TextInput";
import Button from "../components/button/Button";
import styles from "./RegistContainer.module.scss";
const RegisteContainer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["contents"]}>
        <div className={styles["login-box"]}>
          <TextInput text="이메일" type="email" />
          <TextInput text="비밀번호" type="password" />
          <TextInput text="비밀번호 확인" type="password" />
          <Button text="회원가입" />
        </div>
      </div>
    </div>
  );
};

export default RegisteContainer;
