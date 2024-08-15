import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TsParticles from "@/components/TsParticles";
import { Language } from "@/types";

const lang: Language = "fa";

export default function Home() {
	return (
		<main
			className="flex flex-col"
			dir={lang === "en" ? "ltr" : "rtl"}>
			<TsParticles />
			<Hero lang={lang} />
			<Projects lang={lang} />
			<About lang={lang} />
			<Skills lang={lang} />
			<Contact lang={lang} />
		</main>
	);
}
