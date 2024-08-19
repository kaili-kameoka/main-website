import React from 'react';
import Cover from "@/library/components/Cover/Cover";
import getAllBlogMeta from "@/library/content/blog/ggetAllBlogMeta";
import Card from "@/library/components/Card/Card";
import Button from "@/library/components/Button/Button";
import formatDateTimeString from "@/library/utils/formatDateTimeString";

async function Page() {
	const posts = await getAllBlogMeta();

	return (
			<>
				<Cover>
					<h1 className="title">Blog</h1>
				</Cover>
				<main className={'containerSection {'}>
					<div className={'container container--body'}>
						<div className="container__Content container__Content--Listing">
							{posts.map(post => (
									<Card key={post.createdAt}>
										<h2>{post.title}</h2>
										<p><span className={'label'}>Last Updated:</span> {formatDateTimeString(post.lastUpdatedAt)}</p>
										<p>{post.excerpt}</p>
										<p>
											<Button color={'Secondary'} url={`/blog/${post.slug}`}>Read More</Button>
										</p>
									</Card>
							))}
						</div>
						<div className="container__Sidebar">

						</div>
					</div>

				</main>
			</>
	);
}

export default Page;