import ProjectWidget from "../components/ProjectWidget";
import styles from "../../styles/Projects.module.css";
import { use } from "react";
import { getProjects } from "../../api/projects";

async function getProjectData() {
  const res = getProjects();
  return res;
}

type ProjectProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  tags: string[];
  source_code?: undefined | string;
  demo?: undefined | string;
};

const ProjectsPage = () => {
  const projects = use(getProjectData());

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project: ProjectProps) => (
          <ProjectWidget key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
