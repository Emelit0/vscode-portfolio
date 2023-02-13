import Sidebar from "./Sidebar";
import Titlebar from "./Titlebar";
import Explorer from "./Explorer";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import TabBar from "./TabBar";
import Terminal from "./Terminal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <TabBar />
          <main className={styles.content}>{children}</main>
          <Terminal />
        </div>
      </div>
      <Footer />
    </>
  );
}
