import React from 'react';
import {FOOTER__COPYRIGHT, MAIN_NAV_MENU_ITEMS, SITE_TITLE} from "@/library/utils/content";
import './Footer.scss';
import Navigation from "@/library/components/Navigation/Navigation";
import SocialIcons from "@/library/components/SocialIcons/SocialIcons";

function Footer() {
	return (
			<footer className="Footer">
				<div className="Footer__Container">
					<div className="Footer__TopRow">
						<h2 className="Footer_Title">{SITE_TITLE}</h2>
						<Navigation menuItems={MAIN_NAV_MENU_ITEMS} />
					</div>
					<div className="Footer_BootomRow">
						<SocialIcons />
						<p>{FOOTER__COPYRIGHT}</p>
					</div>
				</div>
			</footer>
	);
}

export default Footer;