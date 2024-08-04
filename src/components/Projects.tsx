import React from "react";

const Projects = () => {
	return (
		<section
			className="portfolio z-10 text-white"
			id="projects">
			<div className="header">
				<div className="info">
					<h3>Recent Projects</h3>
				</div>
			</div>
			<div className="portfo-items">
				<div className="item">
					<img src="assets/images/project.png" />
					<div className="info">
						<h4>SSA Project</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros.
						</p>
					</div>
				</div>
				<div className="item">
					<img src="assets/images/project2.png" />
					<div className="info">
						<h4>Gizmo shop</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros.
						</p>
					</div>
				</div>
				<div className="item">
					<img src="assets/images/project.png" />
					<div className="info">
						<h4>Project 3</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
