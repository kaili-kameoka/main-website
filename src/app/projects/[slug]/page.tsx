import React from 'react';
import getProjectMetaBySlug from "@/library/content/projects/getProjectMetaBySlug";
import formatDateString from "@/library/utils/formatDateString";
import Devicons from "@/library/components/Devicons/Devicons";
import Cover from "@/library/components/Cover/Cover";
import ProjectContentBySlug from "@/library/content/projects/ProjectContentBySlug/ProjectContentBySlug";
import {ProjectPageProps} from "@/app/projects/[slug]/types";

async function Page({params: {slug}}: ProjectPageProps)  {
	const {completedOn, title, tools} = await getProjectMetaBySlug(slug)
	console.log(title);
	return (
			<>
				<Cover>
					<h1>{title}</h1>
					<Cover.Meta>
						<span><span className="label">Completed:</span> {formatDateString(completedOn)}</span> | <Devicons icons={tools}/>
					</Cover.Meta>
				</Cover>
				<main className={'containerSection {'}>
					<div className={'container container--body'}>
						<div className="container__Content">
							<ProjectContentBySlug slug={slug} />
						</div>
						<div className="container__Sidebar">

						</div>
					</div>
				</main>
			</>
	);
}

export default Page;