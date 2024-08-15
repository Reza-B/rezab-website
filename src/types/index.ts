export interface INavItem {
	title: string;
	path: string;
}

export type Language = "en" | "fa";

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

export type ProjectLanguageData = {
	title: string;
	description: string;
	team: Team;
};

type TechStackItem = {
	name: string;
	version: string;
	logoPath: string;
};

export type TechStack = {
	frontend: TechStackItem[];
	backend: TechStackItem[];
};

export type Project = {
	id: number;
	slug: string;
	imagePath: string;
	imagesDirPath: string;
	fa: ProjectLanguageData;
	en: ProjectLanguageData;
	techStack: TechStack;
	github: string;
	url: string;
};

export type Skills = {
	title: string;
	items: string[];
};
