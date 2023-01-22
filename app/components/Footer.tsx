import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarnIcon";
import BellIcon from "./icons/BellIcon";
import CheckIcon from "./icons/CheckIcon";
import NextjsIcon from "./icons/NextJsIcon";
import SourceControlIcon from "./icons/SourceIcon";
import styles from "../../styles/Footer.module.css";
import { ReactElement } from "react";

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a
          href="https://github.com/Emelit0"
          target="_blank"
          rel="noopener"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errText}>0</p>
          <WarningIcon className={styles.icon} />
          <p className={styles.errText}>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <NextjsIcon className={styles.icon} />
          <p>Next.js</p>
        </div>
        <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
