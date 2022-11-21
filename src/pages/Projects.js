import React from "react";
import { projectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";

import "../styles/Projects.css";

function Projects() {
	return (
		<div className="projects">
			<h1>My personal projects</h1>
			<div className="projectList">
				{projectList.map((project, idx) => {
					return (
						<ProjectItem id={idx} name={project.name} image={project.image} />
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
