import Sidebar from "./Sidebar";
import Titlebar from "./Titlebar";
import Explorer from "./Explorer";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import TabBar from "./TabBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
        <Titlebar />
        <div className={styles.main}>
          <Sidebar />
          <Explorer />
          <div style={{ width: "100%" }}>
            <TabBar />
            <main className={styles.content}>{children}</main>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
