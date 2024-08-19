import React from 'react';
import {ProjectContentBySlugProps} from "@/library/content/projects/ProjectContentBySlug/types";

async function ProjectContentBySlug({slug}: ProjectContentBySlugProps) {
	const postModule = await import((`../../../../content/projects/${slug}.mdx`));
	const Content = postModule.default;
	return <Content />;
}

export default ProjectContentBySlug;