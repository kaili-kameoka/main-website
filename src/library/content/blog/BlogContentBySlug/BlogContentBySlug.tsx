import React from 'react';
import {BlogContentBySlugProps} from "@/library/content/blog/BlogContentBySlug/types";

async function BlogContentBySlug({slug}: BlogContentBySlugProps) {
	const postModule = await import((`../../../../content/blog/${slug}.mdx`));
	const Content = postModule.default;
	return <Content />;
}

export default BlogContentBySlug;