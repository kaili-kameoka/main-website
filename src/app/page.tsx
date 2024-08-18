import Cover from "@/library/components/Cover/Cover";
import {
	ABOUT_ME_CONTENT,
	HERO_COVER_BODY,
	HERO_COVER_CTA_TEXT,
	HERO_COVER_CTA_URL,
	HERO_COVER_TITLE
} from "@/app/content";
import Button from "@/library/components/Button/Button";
import avatar from '../assets/img/avatar.png';
import AboutMe from "@/library/components/AboutMe/AboutMe";

export default function Home() {
  return (
			<>
				<Cover alignment={'Center'}>
					<h1 className="title">{HERO_COVER_TITLE}</h1>
					<p className="paragraph">{HERO_COVER_BODY}</p>
					<Button url={HERO_COVER_CTA_URL} color={'Primary'}>{HERO_COVER_CTA_TEXT}</Button>
				</Cover>
				<AboutMe img={{ src: avatar.src, alt: 'Kaili Kameoka'}} >
					{ABOUT_ME_CONTENT}
				</AboutMe>
			</>

  );
}
