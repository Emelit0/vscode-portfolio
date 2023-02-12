"use client";

import { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import CodeBlock from "../components/CodeBlock";
import TypewriterBlock from "../components/TypewriterBlock";

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
