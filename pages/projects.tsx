import ProjectWidget from "../components/ProjectWidget";
import styles from "../../styles/Projects.module.css";
import { getStaticProps } from "./github";
import { getProjects } from "../api/projects"





type ProjectProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  tags: string[];
  source_code?: undefined | string;
  demo?: undefined | string;
};

const Projects = ({ projects }: ProjectProps) => {
  return (
    <>
      <h3>Stuff I have Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project: ProjectProps) => (
          <ProjectWidget key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};


export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects}
  }
}

export default Projects;




