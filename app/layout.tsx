import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import Explorer from "../components/Explorer";
import styles from "../styles/Layout.module.css";
import Footer from "../components/Footer";
import { style } from "@mui/system";

export default function RootLayout({
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
      <head />
      <body>
        <Titlebar />
        <div className={styles.main}>
          <Sidebar />
          <Explorer />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
