import {ProjectMeta} from "@/library/content/projects/type";

export default async function getProjectMetaBySlug (slug: string): Promise<ProjectMeta> {
	const {metadata} = await import((`../../../content/projects/${slug}.mdx`));
	return {...metadata, slug};
}