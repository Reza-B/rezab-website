"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { INavItem, Language } from "@/types";
import MenuNavbar from "./Menu";

const navList: INavItem[] = [
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Skills",
		path: "#skills",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const Navbar = ({ lang }: { lang: Language }) => {
	const [open, setOpen] = useState(false);
	return (
		<motion.nav
			animate={open ? "open" : "closed"}
			className="fixed top-0 left-0 right-0 z-[10000] bg-[#121212] bg-opacity-90">
			<div className="flex items-center justify-between mx-auto px-12 py-4">
				<Link
					href="/"
					className="text-lg md:text-2xl text-white font-semibold">
					Reza Buzarjemhri
				</Link>
				<motion.button
					onClick={() => setOpen((prev) => !prev)}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="block md:hidden">
					<svg
						width="23"
						height="23"
						viewBox="0 0 23 23">
						<motion.path
							strokeWidth="3"
							stroke="white"
							strokeLinecap="round"
							variants={{
								closed: {
									d: "M 2 2.5 L 20 2.5",
								},
								open: {
									d: "M 3 16.5 L 17 2.5",
								},
							}}
						/>
						<motion.path
							strokeWidth="3"
							stroke="white"
							strokeLinecap="round"
							variants={{
								closed: {
									d: "M 2 9.423 L 20 9.423",
									opacity: 1,
								},
								open: {
									d: "M 2 9.423 L 20 9.423",
									opacity: 0,
								},
							}}
						/>
						<motion.path
							strokeWidth="3"
							stroke="white"
							strokeLinecap="round"
							variants={{
								closed: {
									d: "M 2 16.346 L 20 16.346",
								},
								open: {
									d: "M 3 2.5 L 17 16.346",
								},
							}}
						/>
					</svg>
				</motion.button>
				<div
					className="menu hidden md:block md:w-auto"
					id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md: space-x-8 mt-0">
						{navList.map((item, index) => (
							<NavItem
								key={index}
								href={item.path}
								title={item.title}
							/>
						))}
					</ul>
				</div>
			</div>
			{open ? <MenuNavbar list={navList} /> : ""}
		</motion.nav>
	);
};

export default Navbar;
