import styles from "./ProjectsStyles.module.css";
import NMT from "../../assets/NMT.jpeg";
import OpenCVProject from "../../assets/OpenCVProj.jpeg";
import FetchUserData from "../../assets/FetchUserData.jpeg";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={NMT}
          link="https://github.com/Cyberoctane29/Language-Translation-System-Using-Neural-Networks"
          alt="Neural Machine Translation Project"
          h3="Neural Translation System"
          p="AI-driven language translation."
        />
        <ProjectCard
          src={FetchUserData}
          link="https://github.com/Cyberoctane29/Fetch-user-data"
          alt="Fetch User Data Project"
          h3="API Data Retrieval"
          p="Efficient user data fetching."
        />
        <ProjectCard
          src={OpenCVProject}
          link="https://github.com/Cyberoctane29/OpenCV-Interactive-Painting-and-Color-Extraction-System"
          alt="OpenCV - Interactive Painting and Color Extraction System"
          h3="Interactive Painting Tool"
          p="Painting with color extraction."
        />
      </div>
    </section>
  );
}

export default Projects;
