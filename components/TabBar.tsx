import Tab from "./Tab";
import styles from "../styles/TabBar.module.css";
import { ReactElement } from "react";

const TabBar: React.FC = (): ReactElement => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/reactts.svg" filename="home.jsx" path="/" />
      <Tab icon="/js.svg" filename="docs.js" path="/docs" />
      <Tab icon="/tsLogo.svg" filename="projects.ts" path="/projects" />
      <Tab icon="/gitignore.svg" filename=".github" path="/github" />
      <Tab icon="/css.svg" filename="about.css" path="/about" />
      <Tab icon="/vite.svg" filename="contact.vite" path="/contact" />
    </div>
  );
};

export default TabBar;
