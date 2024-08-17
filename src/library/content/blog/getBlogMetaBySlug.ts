import {BlogMeta} from "@/library/content/blog/types";

export default async function getBlogMetaBySlug (slug: string): Promise<BlogMeta> {
	const {metadata} = await import((`../../../content/blog/${slug}.mdx`));
	return {...metadata, slug};

}