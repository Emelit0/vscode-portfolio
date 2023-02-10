import Image from "next/image";
import { ReactElement } from "react";
// import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import styles from "../../styles/Titlebar.module.css";

const Titlebar: React.FC = (): ReactElement => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="vscode-icon"
        width={16}
        height={16}
        className={styles.vsicon}
      />
      <div className={styles.navbar_items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Kevin Stoll - Visual Studio Code</p>
      <div className={styles.window_btns}>
        {/* <RemoveOutlinedIcon />
            <Image src='../public/window-restoredown.svg' alt='window-restoredown' width={12} height={12}/>
            <CloseOutlinedIcon /> */}
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
