// Recent Projects
const RPids: number[] = [1, 2, 3];

const projects: Project[] = [
	{
		id: 1,
		slug: "gizmoshop",
		imagePath: "assets/images/projects/gizmo/1.png",
		imagesDirPath: "assets/images/projects/gizmo/",
		fa: {
			title: "فروشگاه گیزمو",
			description: `پروژه Gizmo-Shop یک پروژه فروشگاهی جذاب با رابط کاربری زیبا برای سفارش محصولات از فروشگاه های آنلاین خارج از کشور مانند آمازون و ... می باشد.این پروژه دارای صفحات فروشگاهی، وبلاگ و داشبورد می باشد.`,
			team: {
				name: "ترایب",
				description: "",
				members: [
					{
						name: "طاها موسوی",
						title: "توسعه دهنده بک اند و اسکرام مستر",
					},
					{
						name: "رضا بوذرجمهری",
						title: "توسعه دهنده فرانت اند",
					},
					{
						name: "پوریا کرمی",
						title: "توسعه دهنده فرانت اند",
					},
					{
						name: "پارسا",
						title: "توسعه دهنده فرانت اند",
					},
					{
						name: "ساحل",
						title: "توسعه دهنده بک اند",
					},
					{
						name: "نازنین",
						title: "طراح رابط کاربری",
					},
				],
				since: "2023",
			},
		},
		en: {
			title: "Gizmo Shop",
			description: `The Gizmo-Shop project is an attractive store project with a
								beautiful user interface for ordering products from overseas
								online stores such as Amazon, etc. This project has store pages,
								a blog and a dashboard.`,
			team: {
				name: "Tribe",
				description: "",
				members: [
					{
						name: "Taha Mousavi",
						title: "Backend Developer and Scrum Master",
					},
					{
						name: "Reza Buzarjemehri",
						title: "Frontend Developer",
					},
					{
						name: "Pourya Karami",
						title: "Frontend Developer",
					},
					{
						name: "Parsa",
						title: "Frontend Developer",
					},
					{
						name: "Sahel",
						title: "Backend Developer",
					},
					{
						name: "Nazanin",
						title: "Designer",
					},
				],
				since: "2023",
			},
		},
		techStack: {
			frontend: [
				{
					name: "Next",
					version: "14.0.0",
					logoPath: "assets/images/logos/next.png",
				},
			],
			backend: [
				{
					name: "Django",
					version: "none",
					logoPath: "assets/images/logos/django.png",
				},
			],
		},
	},
	{
		id: 2,
		slug: "ssa",
		imagePath: "assets/images/projects/ssa/1.png",
		imagesDirPath: "assets/images/projects/ssa/",
		fa: {
			title: "انجمن های دانشگاه علم و صنعت",
			description: `پروژه مدیریت رویداد دارای یک پنل کاربری رسپانسیو و کاربرپسند و دو پنل مدیریتی است که یکی برای برگزارکننده و دیگری برای نظارت بر کل سیستم است.`,
			team: {
				name: "نسل اول",
				description: "تیمی دانشجویی",
				members: [
					{
						name: "رضا بوذرجمهری",
						title: "توسعه‌دهنده فرانت اند",
					},
					{
						name: "امیر",
						title: "توسعه دهنده بک اند",
					},
					{
						name: "امیرعلی -- ",
						title: "طراح رابط کاربری",
					},
				],
				since: "2023",
			},
		},
		en: {
			title: "IUST Assosiations website",
			description: `The event management project has a responsive and user-friendly
								user panel and two management panels, one for the organizer and
								the other for monitoring the entire system.`,
			team: {
				name: "FirstGen",
				description: `Student Team`,
				members: [
					{
						name: "Reza Buzarjemehri",
						title: "Frontend Developer",
					},
					{
						name: "Amir",
						title: "Backend Developer",
					},
					{
						name: "MohammadAli Azhini",
						title: "Designer",
					},
					{
						name: "----",
						title: "Product Manager",
					},
				],
				since: "2023",
			},
		},
		techStack: {
			frontend: [
				{
					name: "React",
					version: "18.0.0",
					logoPath: "assets/images/logos/react.svg",
				},
			],
			backend: [
				{
					name: "Asp.Net",
					version: "none",
					logoPath: "assets/images/logos/asp.png",
				},
			],
		},
	},
	{
		id: 3,
		slug: "hotelmanagement",
		imagePath: "assets/images/projects/hotel/1.jpg",
		imagesDirPath: "assets/images/projects/hotel/",
		fa: {
			title: "سایت مدیریت هتل",
			description: `این وب سایت با ارائه امکانات لازم یک هتل مانند رزرو اتاق به همراه پنل مدیریتی جذاب با بخش های مختلف از جمله رستوران داری، مدیریت اتاق و رزرواسیون و حسابداری پاسخگوی اکثر نیازهای کاربران و مدیران هتل می باشد.`,
			team: {
				name: "ترایب",
				description: "",
				members: [
					{
						name: "طاها موسوی",
						title: "توسعه دهنده بک اند و اسکرام مستر",
					},
					{
						name: "رضا بوذرجمهری",
						title: "توسعه دهنده فرانت اند",
					},
					{
						name: "پوریا کرمی",
						title: "توسعه دهنده فرانت اند",
					},
					{
						name: "پارسا",
						title: "توسعه دهنده فرانت اند",
					},
					{
						name: "پوریا پورنوین",
						title: "توسعه دهنده فرانت اند",
					},
				],
				since: "2023",
			},
		},
		en: {
			title: "Hotel Management website",
			description: `This website meets the needs of most users and hotel managers by providing the necessary facilities of a hotel such as room reservation along with an attractive management panel with different sections including restaurant management, room management and reservation and accounting.`,
			team: {
				name: "Tribe",
				description: "",
				members: [
					{
						name: "Taha Mousavi",
						title: "Backend Developer",
					},
					{
						name: "Reza Buzarjemehri",
						title: "Frontend Developer",
					},
					{
						name: "Pourya Karami",
						title: "Frontend Developer",
					},
					{
						name: "Parsa",
						title: "Frontend Developer",
					},
					{
						name: "Pourya Pornovin",
						title: "Frontend Developer",
					},
				],
				since: "2023",
			},
		},
		techStack: {
			frontend: [
				{
					name: "React",
					version: "18.0.0",
					logoPath: "assets/images/logos/react.png",
				},
			],
			backend: [
				{
					name: "Django",
					version: "none",
					logoPath: "assets/images/logos/django.png",
				},
			],
		},
	},
];

export const getThreeProjects = (
	language: Language,
): {
	id: number;
	slug: string;
	title: string;
	description: string;
	imagePath: string;
}[] => {
	return projects
		.filter((project) => RPids.includes(project.id))
		.slice(0, 3)
		.map((project) => ({
			id: project.id,
			slug: project.slug,
			title: project[language].title,
			description: project[language].description,
			imagePath: project.imagePath,
		}));
};

export const getProjectById = (
	id: number,
	language: Language,
):
	| (ProjectLanguageData & {
			id: number;
			slug: string;
			imagePath: string;
			imagesDirPath: string;
			techStack: TechStack;
	  })
	| undefined => {
	const project = projects.find((project) => project.id === id);
	if (project) {
		const projectLanguageData = project[language];
		return {
			id: project.id,
			slug: project.slug,
			imagePath: project.imagePath,
			imagesDirPath: project.imagesDirPath,
			techStack: project.techStack,
			...projectLanguageData,
		};
	}
	return undefined;
};

export const getAllProjects = (
	language: Language,
): {
	id: number;
	slug: string;
	title: string;
	description: string;
	imagePath: string;
}[] => {
	return projects.map((project) => ({
		id: project.id,
		slug: project.slug,
		title: project[language].title,
		description: project[language].description,
		imagePath: project.imagePath,
	}));
};
