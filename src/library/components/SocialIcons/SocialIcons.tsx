import React from 'react';
import Link from "next/link";
import {byPrefixAndName} from '@awesome.me/kit-8be4e715d7/icons'
import {SOCIAL_LINKS} from "@/library/utils/content";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './SocialIcons.scss';

function SocialIcons() {
	return (
			<ul className="SocialIcons">
				{Object.keys(SOCIAL_LINKS).map(key => SOCIAL_LINKS[key].url && (
						<li key={key} className="SocilIcons__Icon">
							<Link href={SOCIAL_LINKS[key].url} className="SocialIcons__Link" target={'_blank'}>
								<FontAwesomeIcon icon={byPrefixAndName.fab[SOCIAL_LINKS[key].icon]} size={'lg'} />
							</Link>
						</li>
				))}
			</ul>
	);
}

export default SocialIcons;