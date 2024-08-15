import React from "react";
import ProjectCard from "./ProjectCard";
import { getThreeProjects } from "@/app/data";

const Projects = () => {
	const data = getThreeProjects("fa");
	return (
		<section
			className="portfolio z-10 text-white"
			id="projects">
			<div className="header">
				<div className="text-3xl">
					<h3>Recent Projects</h3>
				</div>
			</div>
			<div className="portfo-items">
				{data.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						imageUrl={project.imagePath}
						slug={project.slug}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
