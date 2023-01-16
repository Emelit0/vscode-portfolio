import ProjectCard from "../../components/ProjectWidget";
import { getProjects } from "../../api/projects";
import styles from "../styles/ProjectsPage.module.css";

const getProjectData = () => {
  const projects = getProjects();
  return projects;
};

type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
  source_code: string;
  demo: string;
};

const ProjectsPage = () => {
  const projects = getProjectData();

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
