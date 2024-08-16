import { aboutme } from "@/data";
import { Language } from "@/types";
import Link from "next/link";
import React from "react";

const About = ({ lang }: { lang: Language }) => {
	return (
		<section
			className="bg-black text-white z-10 place-content-center"
			id="about">
			<div className="about gap-4 sm:gap-16">
				<div className="w-[220px] sm:w-[400px] p-1 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500">
					<img
						className="rounded-full"
						src="assets/images/profile.jpg"
					/>
				</div>
				<div className="right">
					<h3>{lang === "en" ? "About Me" : "درباره من"}</h3>
					{lang === "en"
						? aboutme.en.map((line, index) => <p key={index}>{line}</p>)
						: aboutme.fa.map((line, index) => <p key={index}>{line}</p>)}
					<Link
						href="/Resume.pdf"
						target="_blank"
						download={{}}
						className="px-0.5 inline-block py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-center text-white mt-12 sm:mt-24 font-semibold">
						<span className="block bg-[#121212] hover:bg-[#090909] rounded-full px-5 py-1.5 sm:py-2">
							{lang === "en" ? "Downlaod resume" : "دانلود رزومه"}
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
