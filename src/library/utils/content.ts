import {NavMenuItem} from "@/library/components/Navigation/types";

export const MAIN_NAV_MENU_ITEMS: NavMenuItem[] = [
	{url: '/', text: 'Home'},
	{url: '/blog', text: 'Blog'},
	{url: '/projects', text: 'Projects'}
]

export const SITE_TITLE = "Kaili Kameoka";

export const FOOTER__COPYRIGHT = '© Kaili Kameoka 2024'

export const SOCIAL_LINKS = {
	gitHub: {
		url: 'https://github.com/kaili-kameoka',
		icon: 'github'
	},
	dribbble: {
		url: 'https://dribbble.com/kaili_kameoka',
		icon: 'dribbble'
	},
	xTwitter: {
		url: 'https://x.com/kailikameoka',
		icon: 'x-twitter'
	},
	instagram: {
		url: 'https://www.instagram.com/kailikameoka',
		icon: 'instagram'
	},
	medium: {
		url: 'https://medium.com/@kaili-kameoka',
		icon: 'medium'
	},
	youTube: {
		url: 'https://www.youtube.com/@kailikameoka4915',
		icon: 'youtube'
	},
	facebook: {
		url: undefined,
		icon: 'facebook-f'
	},
	linkedin: {
		url: 'https://www.linkedin.com/in/kaili-kameoka-450594a3/',
		icon: 'linkedin-in'
	}
}