"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
// mt-4 lg:mt-0
const HeroSection = () => {
	return (
		<section className="z-100">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-5 place-self-center ">
					<div className="rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mb-6">
						<Image
							className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							src="/assets/images/6.png"
							alt="Reza Buzarjemehri"
							width={300}
							height={300}
						/>
					</div>
				</div>
				<div className="col-span-7 place-self-center sm:text-left text-justify">
					<h1 className="text-white mb-6 text-3xl lg:text-5xl font-extrabold">
						<div className="text-transparent mb-1 bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
							{"Hello, I'm"}
						</div>
						<TypeAnimation
							sequence={[
								"Reza",
								1000,
								"Web Developer",
								1000,
								"Mobile Developer",
								1000,
							]}
							wrapper="div"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Web developer based in Tehran, passionate about learning new
						technologies. Enthusiastic about building high-performance
						applications and continually improving my skills.
					</p>
					<div>
						<Link
							href="/#contact"
							className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-center text-white font-semibold">
							Hire Me
						</Link>
						<Link
							href="/"
							className="px-0.5 inline-block py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-center text-white mt-3 font-semibold">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Downlaod resume
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
