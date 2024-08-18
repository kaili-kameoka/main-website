interface SocialLink {
	url?: string;
	icon: string;
}

export interface SocialLinks {
	[key: string]: SocialLink;
}