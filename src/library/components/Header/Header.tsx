import React from 'react';
import './Header.scss'
import {MAIN_NAV_MENU_ITEMS, SITE_TITLE} from "@/library/utils/content";
import Navigation from "@/library/components/Navigation/Navigation.tsx";
import Link from "next/link";

function Header() {

	return (
			<header className="Header">
				<div className="Header__Container">
					<h1 className='Header__Title'>
						<Link href={'/'}>{SITE_TITLE}</Link>
					</h1>
					<Navigation menuItems={MAIN_NAV_MENU_ITEMS} />
				</div>
			</header>
	);
}

export default Header;