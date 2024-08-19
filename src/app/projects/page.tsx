import React from 'react';
import Cover from "@/library/components/Cover/Cover";
import Card from "@/library/components/Card/Card";
import Button from "@/library/components/Button/Button";
import getAllProjectsMeta from "@/library/content/projects/getAllProjectsMeta";
import formatDateString from "@/library/utils/formatDateString";
import Devicons from "@/library/components/Devicons/Devicons";

async function Page() {
	const projects = await getAllProjectsMeta()
	return (
			<>
				<Cover>
					<h1>Projects</h1>
				</Cover>
				<main className={'containerSection {'}>
					<div className={'container container--body'}>
						<div className="container__Content container__Content--Listing">
							{projects.map(({slug, title, completedOn, tools}) => (
									<Card key={slug}>
										<h2>{title}</h2>
										<p><span className="label">Completed:</span> {formatDateString(completedOn)}</p>
										<Card.Footer>
											<Button color={'Secondary'} url={`/projects/${slug}`}>Project Details</Button>
											<Devicons icons={tools}/>
										</Card.Footer>

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