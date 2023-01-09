import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";

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
        <div className="main">
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  );
}
