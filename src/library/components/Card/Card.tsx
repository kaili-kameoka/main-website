import React from 'react';
import {CardProps} from "@/library/components/Card/types";
import './Card.scss';

function Card({children}: CardProps) {
	return (
			<div className={'Card'}>
				{children}
			</div>
	);
}

export default Card;