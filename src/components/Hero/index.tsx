"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className="z-[100] place-content-center pt-16 pb-2">
			<div className="container mx-auto px-6 sm:px-12">
				<div className="grid grid-cols-1 sm:grid-cols-12">
					<div className="col-span-5 place-self-center my-auto">
						<div className="rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mb-6">
							<Image
								className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
								src="/assets/images/hero.png"
								alt="Reza Buzarjemehri"
								width={300}
								height={300}
							/>
						</div>
					</div>
					<div className="col-span-7 place-self-center sm:text-left">
						<h1 className="text-white mb-3 sm:mb-6 text-3xl lg:text-5xl font-extrabold">
							<div className="text-transparent sm:mb-1 bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
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
						<p className="text-[#ADB7BE] text-base sm:text-lg mb-4 sm:mb-6 lg:text-xl">
							Web developer based in Tehran, passionate about learning new
							technologies. Enthusiastic about building high-performance
							applications and continually improving my skills.
						</p>
						<div>
							<Link
								href="/#contact"
								className="px-6 tracking-wide inline-block py-2 sm:py-3  w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-center text-white font-semibold">
								{"Let's Talk"}
							</Link>
						</div>
					</div>
				</div>
			</div>
			<motion.div
				initial={{
					opacity: 0,
					y: 0,
				}}
				animate={{
					opacity: 1,
					y: 10,
					transition: {
						duration: 3,
						repeat: Infinity,
					},
				}}
				className="flex justify-center mt-3">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M23 12L12 18L1 12"
						stroke="#fff"
						stroke-width="2"
					/>
					<path
						d="M23 6L12 12L1 6"
						stroke="#fff"
						stroke-width="2"
					/>
				</svg>
			</motion.div>
		</section>
	);
};

export default HeroSection;
