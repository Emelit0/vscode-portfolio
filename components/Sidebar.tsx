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
    id: 1,
    Icon: FilesIcon,
    path: "/",
  },
  {
    id: 2,
    Icon: GithubIcon,
    path: "/github",
  },
  {
    id: 3,
    Icon: FragmentIcon,
    path: "/projects",
  },
  {
    id: 4,
    Icon: PencilIcon,
    path: "/docs",
  },
  {
    id: 5,
    Icon: MailIcon,
    path: "/contact",
  },
];

const lowerSidebarIcons = [
  {
    id: 6,
    Icon: AccountIcon,
    path: "/about",
  },
  {
    id: 7,
    Icon: SettingsIcon,
    path: "/settings",
  },
];

const Sidebar: React.FC = (): ReactElement => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {upperSidebarIcons.map(({ Icon, id, path }) => (
          <Link href={path} key={id}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  pathname === path
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
        {lowerSidebarIcons.map(({ Icon, id, path }) => (
          <div className={styles.iconContainer} key={id}>
            <Link href={path} key={id} />
            <Icon
              className={styles.icon}
              fill={
                pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"
              }
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
