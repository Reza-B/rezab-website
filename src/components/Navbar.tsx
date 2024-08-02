"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { Close, Menu } from "@mui/icons-material";
import { INavItem } from "@/types";
import MenuNavbar from "./Menu";

const navList: INavItem[] = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "About",
		path: "#about",
	},
	{
		title: "About",
		path: "#about",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-10  bg-[#121212] bg-opacity-90">
			<div className="flex flex-wrap items-center justify-between mx-auto px-12 py-4">
				<Link
					href="/"
					className="text-lg md:text-2xl text-white font-semibold">
					Reza Buzarjemhri
				</Link>
				<div className="mobile-menu block md:hidden">
					{open ? (
						<>
							<button
								className="p-0"
								onClick={() => setOpen(false)}>
								<Close
									sx={{
										color: "#ADB7BE",
									}}
								/>
							</button>
						</>
					) : (
						<button
							className="p-0"
							onClick={() => setOpen(true)}>
							<Menu
								sx={{
									color: "#ADB7BE",
								}}
							/>
						</button>
					)}
				</div>
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
		</nav>
	);
};

export default Navbar;
