import Link from "next/link";
import React from "react";

const About = () => {
	return (
		<section
			className="bg-black text-white z-10 place-content-center"
			id="about">
			<div className="about">
				<div className="left">
					{/* <Image
					src="/assets/header-img.png"
					width={100}
					height={400}
				/> */}
				</div>
				<div className="right">
					<h3>About Me</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
						varius faucibus massa sollicitudin amet augue. Nibh metus a semper
						purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
						scelerisque ac adipiscing velit non nulla in amet pellentesque.
					</p>
					<p>
						Sit turpis pretium eget maecenas. Vestibulum dolor mattis
						consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
						mi a, euismod risus r.
					</p>
					<Link
						href="/"
						className="px-0.5 inline-block py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-center text-white mt-12 sm:mt-24 font-semibold">
						<span className="block bg-[#121212] hover:bg-[#090909] rounded-full px-5 py-1.5 sm:py-2">
							Downlaod resume
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
