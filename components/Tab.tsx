"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../styles/Tab.module.css";
import * as React from "react";

type imageProps = {
  icon: string;
  filename: string;
  path: string;
};

const Tab = ({ icon, filename, path }: imageProps) => {
  const pathName = usePathname();

  return (
    <Link href={path}>
      <div className={`${styles.tab} ${pathName === path && styles.active} `}>
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className={styles.tabText}>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
