"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ReactElement } from "react";
import { ChevronRight } from "@mui/icons-material";
import styles from "../../styles/Explorer.module.css";

const explorerIcons = [
  {
    name: "home.tsx",
    path: "/",
    icon: "reactts.svg",
  },
  {
    name: "docs.js",
    path: "/",
    icon: "js.svg",
  },
  {
    name: "projects",
    path: "/projects",
    icon: "nestGuardTsRed.svg",
  },
  {
    name: "about.css",
    path: "/",
    icon: "css.svg",
  },
  {
    name: ".random",
    path: "/",
    icon: "gitignore.svg",
  },
  {
    name: "contact.vite",
    path: "/",
    icon: "vite.svg",
  },
];

const Explorer: React.FC = (): ReactElement => {
  const [isShown, setIsShown] = useState(true);
  return (
    <>
      <div className={styles.explorer}>
        <p>Explorer</p>
        <div>
          <input
            type="checkbox"
            className={styles.checkBox}
            id="files-chechbox"
            onChange={() => setIsShown(!isShown)}
            checked={isShown}
          />
          <label htmlFor="files-checkbox" className={styles.heading}>
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
              <Link href={item.path} key={item.name}>
                <div className={styles.file}>
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    height={18}
                    width={18}
                  />{" "}
                  <p>{item.name}</p>
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
