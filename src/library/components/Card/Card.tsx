import React, {FC} from 'react';
import {CardFooterProps, CardProps, CardType} from "@/library/components/Card/types";
import './Card.scss';

const Card = function ({children}: CardProps) {
	return (
			<div className={'Card'}>
				{children}
			</div>
	);
} as CardType;

const Footer: FC<CardFooterProps> = function ({children}: CardFooterProps) {
	return (
			<div className={'Card__Footer'}>
				{children}
			</div>
	)
}

Card.Footer = Footer;

export default Card;

