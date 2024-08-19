import {readdirSync} from "fs";
import {join} from "path";
import {ProjectMeta} from "@/library/content/projects/type";

export default async function getAllProjectsMeta (): Promise<ProjectMeta[]> {
	const files = readdirSync(join(process.cwd(), 'src', 'content', 'projects'));
	return await Promise.all(
			files.map(async (fileNames) => {
				const {metadata} = await import((`../../../content/projects/${fileNames}`));
				return {...metadata, slug: fileNames.split('.')[0]};
			})
	)
}