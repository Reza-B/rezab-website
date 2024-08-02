import Link from "next/link";
import React from "react";

const NavItem = ({ href, title }: { href: string; title: string }) => {
	return (
		<li className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
			<Link href={href}>{title}</Link>
		</li>
	);
};

export default NavItem;
