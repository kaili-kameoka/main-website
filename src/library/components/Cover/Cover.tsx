import React from 'react';
import {CoverProps} from "@/library/components/Cover/types";
import './Cover.scss';

function Cover({children, alignment = 'Left'}: CoverProps) {
	return (
			<section className="Cover">
				<div className={`Cover__Container Cover__Container--${alignment}`}>
					{children}
				</div>

			</section>
	);
}

export default Cover;