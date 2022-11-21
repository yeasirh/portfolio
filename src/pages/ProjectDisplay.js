import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHunIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
	const { id } = useParams();
	const project = projectList[id];
	return (
		<div className="project">
			<h1>{project.name}</h1>
			<img src={project.image} alt={project.name} />
			<p>
				<b>Skills:</b> {project.skills}
				<br />
				<b>Description:</b> {project.description}
			</p>
			<a href={project.repo} target="_blank" rel="noreferrer">
				<GitHunIcon />
			</a>
		</div>
	);
}

export default ProjectDisplay;
