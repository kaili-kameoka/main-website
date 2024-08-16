import React from 'react';
import './Header.scss'
import {MAIN_NAV_MENU_ITEMS, SITE_TITLE} from "@/library/utils/content";
import Navigation from "@/library/components/Navigation/Navigation.tsx";

function Header() {

	return (
			<header className="Header">
				<div className="Header__Container">
					<h1 className='Header__Title'>{SITE_TITLE}</h1>
					<Navigation menuItems={MAIN_NAV_MENU_ITEMS} />
				</div>
			</header>
	);
}

export default Header;