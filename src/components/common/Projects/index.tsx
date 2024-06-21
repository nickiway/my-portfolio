import ProjectElement from './ProjectElement';

import { projects } from './projects';

const Projects = () => {
  return projects.map((project) => (
    <ProjectElement key={project.uid} {...project} />
  ));
};

export default Projects;
