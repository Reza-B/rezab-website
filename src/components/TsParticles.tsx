"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const TsParticles = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	return (
		<>
			{init && (
				<Particles
					id="tsparticles"
					options={{
						fpsLimit: 60,
						interactivity: {
							events: {
								// onClick: {
								// 	enable: true,
								// 	mode: "push",
								// },
								onHover: {
									enable: true,
									mode: "grab",
									parallax: {
										enable: true,
										force: 60,
										smooth: 30,
									},
								},
							},
							modes: {
								push: {
									quantity: 2,
								},
								grab: {
									distance: 150,
									duration: 0.4,
								},
							},
						},
						particles: {
							color: {
								value: "#55ccFF",
							},
							links: {
								color: "#55ccFF",
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 1,
							},
							move: {
								direction: "none",
								enable: true,
								outModes: {
									default: "bounce",
								},
								random: false,
								speed: 3,
								straight: false,
							},
							number: {
								density: {
									enable: true,
								},
								value: 60,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: "circle",
							},
							size: {
								value: { min: 1, max: 4 },
							},
						},
						detectRetina: true,
					}}
				/>
			)}
		</>
	);
};

export default TsParticles;

{
	/* particlesLoaded={particlesLoaded} */
}
