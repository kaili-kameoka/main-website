import React from 'react';
import {AboutMeProps} from "@/library/components/AboutMe/types";
import {ABOUT_ME_TITLE} from "@/library/components/AboutMe/contents";
import './AboutMe.scss';
import Image from 'next/image';

function AboutMe({children, img: {src, alt}}: AboutMeProps) {
	return (
			<section className="AboutMe">
				<div className="AboutMe__Container">
					<div className="AboutMe__Content">
						<h2 className="AboutMe__Title">
							{ABOUT_ME_TITLE}
						</h2>
						{children}
					</div>
					<div className="AboutMe__AvatarContainer">

						<Image src={src} alt={alt}  className='AboutMe__Avatar' width={400} height={400} />
					</div>
				</div>
			</section>
	);
}

export default AboutMe;