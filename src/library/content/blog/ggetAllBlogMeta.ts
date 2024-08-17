import {readdirSync} from "fs";
import {join} from 'path'
import {BlogMeta} from "@/library/content/blog/types";

export default async function getAllBlogMeta (): Promise<BlogMeta[]> {
	const files = readdirSync(join(process.cwd(), 'src', 'content', 'blog'));
	return await Promise.all(
			files.map(async (fileNames) => {
				const {metadata} = await import((`../../../content/blog/${fileNames}`));
				return {...metadata, slug: fileNames.split('.')[0]};
			})
	)
}