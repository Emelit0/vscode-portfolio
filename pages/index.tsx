"use client";

import { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import CodeBlock from "../components/CodeBlock";
import TypewriterBlock from "../components/TypewriterBlock";
import Link from "next/link";

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <div className={styles.container}>
        <div className="App">
          <div className="box">
            <span>
              <TypewriterBlock />
            </span>
          </div>
          <div className={styles.background}>
            <h1></h1>
            <h1></h1>
          </div>
          <div className={styles.foreground}>
            <div className={styles.content}>
              <h1 className={styles.name}>Kevin Stoll</h1>
              <h6 className={styles.bio}>Stackoverflow user</h6>
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
        <CodeBlock />
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
