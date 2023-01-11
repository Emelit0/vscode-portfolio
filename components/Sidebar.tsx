// "use client";

import Link from "next/link";
import FragmentIcon from "./icons/FragmentIcon";
import FilesIcon from "./icons/FilesIcon";
import GithubIcon from "./icons/GithubIcon";
import PencilIcon from "./icons/PencilIcon";
import SettingsIcon from "./icons/SettingsIcon";
import AccountIcon from "./icons/AccountIcon";
import MailIcon from "./icons/EmailIcon";
import styles from "../styles/Sidebar.module.css";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";

const upperSidebarIcons = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: FragmentIcon,
    path: "/projects",
  },
  {
    Icon: PencilIcon,
    path: "/docs",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

const lowerSidebarIcons = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

const Sidebar: React.FC = (): ReactElement => {
  const pathName = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {upperSidebarIcons.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathName === path && styles.active
              }`}
            >
              <Icon
                fill={
                  pathName === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {lowerSidebarIcons.map(({ Icon, path }) => (
          <div className={styles.iconContainer}>
            <Link href={path} key={path} />
            <Icon
              className={styles.icon}
              fill={
                pathName === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"
              }
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
