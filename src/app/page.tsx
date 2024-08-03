"use client";
import HeroSection from "@/components/HeroSection";
import TsParticles from "@/components/TsParticles";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col bg-[#121212]">
			<div className="container mx-auto px-12 mb-6 mt-24">
				<TsParticles />
				<HeroSection />
			</div>
		</main>
	);
}
