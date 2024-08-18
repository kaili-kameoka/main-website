import React from 'react';
import Cover from "@/library/components/Cover/Cover";
import type {Metadata} from 'next'
import {BlogProps} from "@/app/blog/[slug]/types";
import getBlogMetaBySlug from "@/library/content/blog/getBlogMetaBySlug";
import BlogContentBySlug from "@/library/content/blog/BlogContentBySlug/BlogContentBySlug";
import formatDateString from "@/library/utils/formatDateString";
import {BlogMeta} from "@/library/content/blog/types";

async function Page({params: {slug}}: BlogProps) {
	const {title, lastUpdatedAt} = await getBlogMetaBySlug(slug);

	return (
			<>
				<Cover>
					<h1>{title}</h1>
					<p>Last Updated: {formatDateString(lastUpdatedAt)}</p>
				</Cover>
				<main className={'containerSection {'}>
					<div className={'container container--body'}>
						<div className="container__Content">
							<BlogContentBySlug slug={slug}/>
						</div>
						<div className="container__Sidebar">

						</div>
					</div>

				</main>
			</>
	);
}


export async function generateMetadata(
		{params}: BlogProps
): Promise<Metadata> {
	// read route params
	const metadata = await getBlogMetaBySlug(params.slug)
	return {...metadata} as BlogMeta;
}


export default Page;