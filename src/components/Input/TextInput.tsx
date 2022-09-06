import React from "react";
import styles from "./TextInput.module.scss";

type TextInputPropsType = {
  text: string;
  type: string;
};

function TextInput(props: TextInputPropsType) {
  const { text, type } = props;
  return (
    <div className={styles["box"]}>
      <p>{text}</p>
      <input type={type} className={styles["input"]} />
    </div>
  );
}

export default TextInput;
