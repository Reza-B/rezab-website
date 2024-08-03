import { INavItem } from "@/types";
import React from "react";
import NavItem from "./NavItem";

const MenuNavbar = ({ list }: { list: Array<INavItem> }) => {
	return (
		<ul className="flex flex-col items-center py-2">
			{list.map((item, index) => (
				<NavItem
					key={index}
					href={item.path}
					title={item.title}
				/>
			))}
		</ul>
	);
};

export default MenuNavbar;
