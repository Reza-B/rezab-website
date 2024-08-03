"use client";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TsParticles from "@/components/TsParticles";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col bg-[#121212]">
			<TsParticles />
			<div className="container mx-auto px-12 place-content-center h-[100vh] z-10">
				<HeroSection />
			</div>
			<Skills />
			<About />
			<Projects />
			<div className="my-20"></div>
		</main>
	);
}
