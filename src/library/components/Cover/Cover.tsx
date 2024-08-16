import React from 'react';
import {CoverProps} from "@/library/components/Cover/types";
import './Cover.scss';

function Cover({children}: CoverProps) {
	return (
			<section className="Cover">
				<div className="Cover__Container">
					{children}
				</div>

			</section>
	);
}

export default Cover;