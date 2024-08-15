import React from "react";
import ProjectCard from "./ProjectCard";
import { getThreeProjects } from "@/data";
import { Language } from "@/types";

const Projects = ({ lang }: { lang: Language }) => {
	const data = getThreeProjects("en");
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
						github={project.github}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
