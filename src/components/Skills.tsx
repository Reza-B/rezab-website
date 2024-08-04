import React from "react";
import Image from "next/image";

import FrontEndIcon from "@/assets/front-end.png";
import BackEndIcon from "@/assets/back-end.png";
import Design from "@/assets/design.png";
import SoftSkills from "@/assets/soft-skills.png";

const Skills = () => {
	return (
		<section
			className="z-10 my-auto bg-black text-white"
			id="skills">
			<div className="skills">
				<h3>My Skills</h3>
				<div className="skill-items">
					<div className="item">
						<div className="icon">
							<Image
								alt="Frontend"
								height={30}
								src={FrontEndIcon}
							/>
						</div>
						<h4>{"<Front-End />"}</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
					</div>
					<div className="item">
						<div className="icon">
							<Image
								alt="Backend"
								height={30}
								src={BackEndIcon}
							/>
						</div>
						<h4>{"<Back-End />"}</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
					</div>
					<div className="item">
						<div className="icon">
							<Image
								alt="Designer"
								height={30}
								src={Design}
							/>
						</div>
						<h4>{"<Design />"}</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
					</div>
					<div className="item">
						<div className="icon">
							<Image
								alt="Soft skills"
								height={30}
								src={SoftSkills}
							/>
						</div>
						<h4>{"<Soft-Skills />"}</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
