import Link from "next/link";
import React from "react";

const NavItem = ({ href, title }: { href: string; title: string }) => {
	return (
		<li className="block py-1 my-1 pl-3 pr-4 text-[#ADB7BE] font-bold sm:text-md rounded md:py-0 md:px-2 hover:text-white hover:border-cyan-400 border-b-4 border-transparent cursor-pointer">
			<Link href={href}>{title}</Link>
		</li>
	);
};

export default NavItem;
