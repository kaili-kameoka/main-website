import React, {FC} from 'react';
import {CoverMetaProps, CoverProps, CoverType} from "@/library/components/Cover/types";
import './Cover.scss';

const Cover = function({children, alignment = 'Left'}: CoverProps) {
	return (
			<section className="Cover">
				<div className={`Cover__Container Cover__Container--${alignment}`}>
					{children}
				</div>

			</section>
	);
} as CoverType;

const Meta: FC<CoverMetaProps> = function ({children}: CoverMetaProps) {
	return (
			<div className="Cover__Meta">
				{children}
			</div>
	)
}

Cover.Meta = Meta;

export default Cover;