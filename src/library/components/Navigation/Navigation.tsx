'use client'

import React from 'react';
import Link from "next/link";
import {NavigationProps} from "@/library/components/Navigation/types";
import {usePathname} from "next/navigation";

function Navigation({menuItems}: NavigationProps) {
	const pathName = usePathname();

	return (
			<nav className="Header__Nav">
				<ul className="Header__NavMenu">
					{menuItems.map(({url, text}) => (
							<li key={url} className={`Header__NavMenuItem ${pathName === url && 'Header__NavMenuItem--Active' }`}>
								<Link href={url} className='Header__NavMenuItemLink'>{text}</Link>
							</li>
					))}
				</ul>
			</nav>
	);
}

export default Navigation;