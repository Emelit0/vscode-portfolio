import React from "react";
import styles from "../styles/NeonSign.module.css";

const NeonSign = () => {
  return (
    <h1 className={styles.neon} data-text="U">
      いら<span className={styles.flickeSlow}>っ</span>し
      <span className={styles.flickerFast}>ゃ</span>いませ
    </h1>
  );
};

export default NeonSign;
