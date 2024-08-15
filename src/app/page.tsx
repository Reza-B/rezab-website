"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TsParticles from "@/components/TsParticles";

export default function Home() {
	return (
		<main className="flex flex-col">
			<TsParticles />
			<Hero />
			<Projects />
			<About />
			<Skills />
			<Contact />
		</main>
	);
}
