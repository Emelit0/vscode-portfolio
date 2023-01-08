import Link from "next/link";
import { useRouter } from "next/router";
import FragmentIcon from "./icons/FragmentIcon";
import FilesIcon from "./icons/FilesIcon";
import GithubIcon from "./icons/GithubIcon";
import PencilIcon from "./icons/PencilIcon";
import SettingsIcon from "./icons/SettingsIcon";
import AccountIcon from "./icons/AccountIcon";
import MailIcon from "./icons/EmailIcon";
import styles from "../styles/Sidebar.module.css";

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

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {upperSidebarIcons.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};
