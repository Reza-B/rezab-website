"use client";

import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TsParticles from "@/components/TsParticles";

export default function Home() {
	return (
		<main className="flex flex-col">
			<TsParticles />
			<HeroSection />
			<Skills />
			<About />
			<Projects />
		</main>
	);
}
