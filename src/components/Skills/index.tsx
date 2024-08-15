import React from "react";
import Image from "next/image";

import FrontEndIcon from "@/assets/front-end.png";
import BackEndIcon from "@/assets/back-end.png";
import Design from "@/assets/design.png";
import SoftSkills from "@/assets/soft-skills.png";
import { skills_en } from "@/data";
import { Language } from "@/types";

const Skills = ({ lang }: { lang: Language }) => {
	const icons = [FrontEndIcon, BackEndIcon, Design, SoftSkills];

	return (
		<section
			className="z-10 my-auto pb-10 bg-black text-white place-content-center"
			id="skills">
			<div className="skills">
				<h3>{lang === "en" ? "My Skills" : "مهارت ها"}</h3>
				<div
					className="skill-items"
					dir="ltr">
					{skills_en.map((s, index) => (
						<div
							key={index}
							className="item">
							<div className="icon">
								<Image
									alt="Frontend"
									height={30}
									src={icons[index]}
								/>
							</div>
							<h4>{`<${s.title} />`}</h4>
							<div className="mt-4">
								{s.items.map((i, index) => (
									<p
										key={index}
										className="">
										• {i}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
