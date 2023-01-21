import { Inter } from "@next/font/google";
import "../../styles/global.css";
import ProjectsPage from "./projects";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <ProjectsPage />
    </>
  );
};

export default Home;
