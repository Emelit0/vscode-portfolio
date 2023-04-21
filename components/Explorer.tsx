"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ReactElement } from "react";
import { ChevronRight } from "@mui/icons-material";
import styles from "../styles/Explorer.module.css";

const explorerIcons = [
  {
    name: "home.tsx",
    path: "/",
    icon: "reactts.svg",
  },
  {
    name: "docs.js",
    path: "/docs",
    icon: "js.svg",
  },
  {
    name: "projects.ts",
    path: "/projects",
    icon: "tsLogo.svg",
  },
  {
    name: ".github",
    path: "/github",
    icon: "gitignore.svg",
  },
  {
    name: "about.css",
    path: "/about",
    icon: "css.svg",
  },
  {
    name: "contact.vite",
    path: "/contact",
    icon: "vite.svg",
  },
];

const Explorer: React.FC = (): ReactElement => {
  const [isShown, setIsShown] = useState(true);
  return (
    <>
      <div className={styles.explorer}>
        <p className={styles.title}>Explorer</p>
        <div>
          <input
            type="checkbox"
            className={styles.checkBox}
            id="portfolio-chechbox"
            checked={isShown}
            onChange={() => setIsShown(!isShown)}
          />
          <label htmlFor="portfolio-checkbox" className={styles.heading}>
            <ChevronRight
              className={styles.chevron}
              style={isShown ? { transform: "rotate(90deg)" } : {}}
            />
            Portfolio
          </label>
          <div
            className={styles.files}
            style={isShown ? { display: "block" } : { display: "none" }}
          >
            {explorerIcons.map((item) => (
              <Link className={styles.link} href={item.path} key={item.name}>
                <div className={styles.file}>
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    height={18}
                    width={18}
                  />{" "}
                  <p className={styles.fileName}>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explorer;
