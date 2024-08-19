export interface ProjectMeta {
	title: string;
	slug: string;
	completedOn: string;
	tools: Tool[];
}

export enum Tool {
	xd = 'xd',
	figma =  'figma',
	nextjs = 'nextjs',
	sass = 'sass',
	wordPress = 'wordpress'
}
