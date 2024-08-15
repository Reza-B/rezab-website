import Link from "next/link";

export default ({
	title,
	description,
	imageUrl,
	github,
}: {
	title: string;
	description: string;
	github: string;
	imageUrl: string;
}) => {
	return (
		<>
			<div className="px-4 py-2 max-w-sm sm:h-[360px]">
				<img
					className="object-cover rounded-t-2xl h-[240px] w-full object-top"
					src={imageUrl}
				/>
				<div className="flex border-b-2 border-transparent hover:border-[#5e3bee] rounded-b-2xl h-full dark:bg-gray-800 bg-teal-400 p-6 flex-col">
					<div className="flex items-center mb-3">
						<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#5e3bee] text-white flex-shrink-0">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-5 h-5"
								viewBox="0 0 24 24">
								<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
							</svg>
						</div>
						<h2 className="text-white text-lg font-medium">{title}</h2>
					</div>
					<div className="flex flex-col justify-between flex-grow">
						<p className="leading-relaxed text-base text-white dark:text-gray-300">
							{description}
						</p>
						<Link
							href={github}
							className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
							Github
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
