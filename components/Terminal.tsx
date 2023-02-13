import ArrowRight from "./icons/ArrowRight";
import Dots from "./icons/Dots";
import SplitHorizontal from "./icons/SplitHorizontal";
import Plus from "./icons/Plus";
import Trash from "./icons/Trash";
import ArrowUp from "./icons/ArrowUp";
import Close from "./icons/Close";
import ArrowDown from "./icons/ArrowDown";
import { ReactElement } from "react";
import styles from "../styles/Terminal.module.css";

const Terminal: React.FC = (): ReactElement => {
  return (
    <div className={styles.terminal}>
      <div className={styles.terminal_header}>
        <div className={styles.tabs}>
          <p>PROBLEMS</p>
          <p>OUTPUT</p>
          <p>DEBUG CONSOLE</p>
          <p>TERMINAL</p>
        </div>
        <div className="options">
          <ArrowRight />
          <Plus />
          <ArrowDown />
          <SplitHorizontal />
          <Trash />
          <Dots />
          <ArrowUp />
          <Close />
        </div>
        <div className="terminal__body"></div>
      </div>
    </div>
  );
};

export default Terminal;
