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
          <p className={styles.underlined}>TERMINAL</p>
        </div>
        <div className={styles.options}>
          <ArrowRight />
          <p>npm - vscode-portfolio</p>
          <Plus />
          <ArrowDown />
          <SplitHorizontal />
          <Trash />
          <Dots />
          <ArrowUp />
          <Close />
        </div>
      </div>
      <div className={styles.tbody}>
        <div className={styles.firstLine}>
          <p className={styles.green}>emelito@Workstation</p>
          <p className={styles.noSpace}>:</p>
          <p className={styles.path}>~/workspace/repos/vscode-portfolio</p>
          <p className={styles.noSpace}>$</p>
          <p className={styles.white}>npm run dev</p>
        </div>
        <div className={styles.secondLine}>
          <p className={styles.green}>ready</p>
          <p className={styles.white}>
            {" "}
            - started server on 0.0.0.0:3000, url: http://localhost:3000
          </p>
        </div>
        <div className={styles.thirdLine}>
          <p className={styles.blue}>info</p>
          <p className={styles.white}>
            {" "}
            - Loaded env from /home/user/workspace/repos/vscode-portfolio/.env
          </p>
        </div>
        <div className={styles.fourthLine}>
          <p className={styles.purple}>event</p>
          <p className={styles.white}>
            {" "}
            - compiled client and server successfully in 4.5s (11288modules)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
