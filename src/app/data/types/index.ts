type Language = "en" | "fa";

type Member = {
	name: string;
	title: string;
};

type Team = {
	name: string;
	description: string;
	members: Member[];
	since: string;
};

type ProjectLanguageData = {
	title: string;
	description: string;
	team: Team;
};

type TechStackItem = {
	name: string;
	version: string;
	logoPath: string;
};

type TechStack = {
	frontend: TechStackItem[];
	backend: TechStackItem[];
};

type Project = {
	id: number;
	slug: string;
	imagePath: string;
	imagesDirPath: string;
	fa: ProjectLanguageData;
	en: ProjectLanguageData;
	techStack: TechStack;
};
