import {
	Language,
	Project,
	ProjectLanguageData,
	Skills,
	TechStack,
} from "@/types";

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
		github: "https://github.com/TribeCo/gizmo-frontend",
		url: "https://gizmo-shop.ir/",
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
		github: "https://github.com/FirstGen99/anjoman",
		url: "none",
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
		github: "https://github.com/FivePlusOneTeam/Hotel-FrontEnd",
		url: "none",
	},
];

export const getThreeProjects = (
	language: Language,
): {
	id: number;
	github: string;
	title: string;
	description: string;
	imagePath: string;
}[] => {
	return projects
		.filter((project) => RPids.includes(project.id))
		.slice(0, 3)
		.map((project) => ({
			id: project.id,
			github: project.github,
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

//? Skills section
export const skills_en: Skills[] = [
	{
		title: "Front-End",
		items: [
			"Next JS",
			"React JS",
			"Material UI",
			"TypeScript",
			"JavaScript",
			"Figma",
		],
	},
	{
		title: "Back-End",
		items: ["Node JS", "Express JS", "Mongo DB", "TypeScript", "JavaScript"],
	},
	{
		title: "Soft-Skills",
		items: ["Team Work"],
	},
	{ title: "Other", items: ["OS - C", "Algorithm - C# / C++", "AI - Python"] },
];

export const aboutme = {
	fa: [
		`من رضا بوذرجمهری، ۲۲ ساله و دانشجوی مهندسی کامپیوتر در دانشگاه علم و صنعت تهران هستم. از ۱۶ سالگی به برنامه‌نویسی علاقه‌مند شدم و از ۱۹ سالگی این مسیر رو به‌طور جدی دنبال کردم.`,
		`آدم پرانرژی و فعالی هستم که همیشه دنبال یادگیری و حل چالش‌های جدیدم. علاوه بر برنامه‌نویسی، به نجوم، تکنولوژی، بازی‌های کامپیوتری و ورزش هم علاقه دارم. تخصصم در توسعه فرانت‌اند هست و با جاوا اسکریپت، تایپ اسکریپت، React و Next.js حسابی کار کردم.`,
		`اگه دنبال یه برنامه‌نویس پرشور و مشتاق هستی که همیشه در حال پیشرفت و روبرو شدن با چالش‌های تازه‌ست، خوشحال می‌شم باهاتون همکاری کنم.`,
	],
	en: [
		`I'm Reza Buzarjemehri, a 22-year-old computer engineering student at Iran University of Science and Technology. I've been passionate about programming since I was 16, and I've been pursuing it seriously since I was 19.`,
		`I'm an energetic and active person, always eager to learn and tackle new challenges. In addition to programming, I'm also interested in astronomy, technology, video games, and sports. My expertise lies in front-end development, and I've worked extensively with JavaScript, TypeScript, React, and Next.js. I also have experience working with back-end technologies like Node.js and Express.`,
		`If you're looking for a passionate and driven developer who's always growing and taking on new challenges, I'd be happy to collaborate with you.`,
	],
};
