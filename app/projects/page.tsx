import { Inter } from "@next/font/google";
import "../../styles/global.css";
import ProjectsPage from "./projects";

//@ts-expect-error Server Component

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ProjectsPage />
    </main>
  );
}
