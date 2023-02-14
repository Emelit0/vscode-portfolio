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
        <div className={styles.options}>
          <ArrowRight />
          <Plus />
          <ArrowDown />
          <SplitHorizontal />
          <Trash />
          <Dots />
          <ArrowUp />
          <Close />
        </div>
      </div>
      <div className={styles.terminal_body}>
        <div className="firstLine">
          <p>emelito@Workstation</p>
          <p>:</p>
          <p>~/workspace/repos/vscode-portfolio</p>
          <p>$</p>
          <p>npm run dev</p>
        </div>
        <div className="secondLine">
          <p>ready</p>
          <p> - started server on 0.0.0.0:3000, url: http://localhost:3000</p>
        </div>
        <div className="thirdLine">
          <p>info</p>
          <p>
            {" "}
            - Loaded env from /home/user/workspace/repos/vscode-portfolio/.env
          </p>
        </div>
        <div className="fourthLine">
          <p>event</p>
          <p>
            {" "}
            - compiled client and server succesfully in 4.5s (11288modules)
          </p>
        </div>
        <div className="fifthLine">
          <p>wait</p>
          <p> - compiling / (client and server)...</p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
