import { ReactElement } from "react";

import styles from "../styles/Home.module.css";
import CodeBlock from "../components/CodeBlock";
import TypewriterBlock from "../components/TypewriterBlock";
import Link from "next/link";

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className="App">
            <div className="typeWriter">
              <span>
                <TypewriterBlock />
              </span>
            </div>
            <div className={styles.background}>
              <h1>I BUILD</h1>
              <h1>WEBSITES</h1>
            </div>
            <div className={styles.foreground}>
              <div className={styles.content}>
                <h1 className={styles.name}>Emelito</h1>
                <h6 className={styles.bio}>CS Student</h6>
                <Link href="/projects">
                  <button className={styles.button}>View Work</button>
                </Link>
                <Link href="/contact">
                  <button className={styles.outlined}>Contact Me</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className="codeBlock">
            <CodeBlock />
          </div>
        </div>
        <div className={styles.hiddenForeground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Emelito Pro</h1>
            <h6 className={styles.bio}>CS Student</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}

export default Home;
