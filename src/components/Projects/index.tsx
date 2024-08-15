import React from "react";
import ProjectCard from "./ProjectCard";
import { getThreeProjects } from "@/data";
import { Language } from "@/types";

const Projects = ({ lang }: { lang: Language }) => {
	const data = getThreeProjects(lang);
	return (
		<section
			className="portfolio z-10 text-white"
			id="projects">
			<div className="header">
				<div className="text-3xl">
					<h3>{lang === "en" ? "Recent Projects" : "پروژه های اخیر"}</h3>
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
						lang={lang}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
