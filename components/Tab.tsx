import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Tab.module.css";
import * as React from "react";
import { useRouter } from "next/router";

type imageProps = {
  icon: string;
  filename: string;
  path: string;
};

const Tab = ({ icon, filename, path }: imageProps) => {
  const router = useRouter();

  return (
    <Link href={path} className={styles.noUnderline}>
      <div
        className={`${styles.tab} ${
          router.pathname === path && styles.active
        } `}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className={styles.p}>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
