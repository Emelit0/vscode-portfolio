import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../styles/Tab.module.css";
import { ReactElement } from "react";

const Tab: React.FC = ({ Icon, filename, path }): ReactElement => {
  const pathName = usePathname();

  return <Link href={path}>
    <div className={`${styles.tab} ${pathName === path && styles.active} `}>
        <Image src={}
    </div>
  </Link>;
};
