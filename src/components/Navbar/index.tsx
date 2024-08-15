"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { INavItem, Language } from "@/types";
import MenuNavbar from "./Menu";

const navList_en: INavItem[] = [
	{
		title: "Recent Projects",
		path: "#projects",
	},
	{
		title: "About Me",
		path: "#about",
	},
	{
		title: "My Skills",
		path: "#skills",
	},
	{
		title: "Contact Me",
		path: "#contact",
	},
];

const navList_fa: INavItem[] = [
	{
		title: "پروژه های اخیر",
		path: "#projects",
	},
	{
		title: "درباره من",
		path: "#about",
	},
	{
		title: "توانایی های من",
		path: "#skills",
	},
	{
		title: "ارتباط با من",
		path: "#contact",
	},
];

const Navbar = ({ lang }: { lang: Language }) => {
	const [open, setOpen] = useState(false);
	return (
		<motion.nav
			dir={lang === "en" ? "ltr" : "rtl"}
			animate={open ? "open" : "closed"}
			className="fixed top-0 left-0 right-0 z-[10000] bg-[#121212] bg-opacity-90">
			<div className="flex items-center justify-between mx-auto px-12 py-4">
				<Link
					href={lang === "en" ? "/" : "/fa/"}
					className="text-lg md:text-2xl text-white mr-4 font-semibold">
					{lang === "en" ? "Reza Buzarjemhri" : "رضا بوذرجمهری"}
				</Link>
				<div className="flex md:hidden gap-4">
					<li className="block pt-1 pl-3 pr-4 text-[#ADB7BE] font-bold sm:text-md rounded md:py-0 md:px-2 hover:text-white hover:border-cyan-400 border-b-4 border-transparent cursor-pointer">
						<Link href={lang === "en" ? "/fa/" : "/"}>
							{lang === "en" ? "فارسی" : "English"}
						</Link>
					</li>
					<motion.button
						onClick={() => setOpen((prev) => !prev)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}>
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
				</div>
				<div
					className="menu hidden md:block md:w-auto"
					id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md: space-x-8 mt-0">
						{lang === "en"
							? navList_en.map((item, index) => (
									<NavItem
										key={index}
										href={item.path}
										title={item.title}
									/>
							  ))
							: navList_fa.map((item, index) => (
									<NavItem
										key={index}
										href={item.path}
										title={item.title}
									/>
							  ))}
						<NavItem
							href={lang === "en" ? "/fa/" : "/"}
							title={lang === "en" ? "فارسی" : "English"}
						/>
					</ul>
				</div>
			</div>
			{open ? (
				<MenuNavbar list={lang === "en" ? navList_en : navList_fa} />
			) : (
				""
			)}
		</motion.nav>
	);
};

export default Navbar;
