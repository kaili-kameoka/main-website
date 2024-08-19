import {FC, ReactNode} from "react";

export interface CardProps {
	children: ReactNode;
}

export interface CardFooterProps {
	children: ReactNode;
}

export type CardType = FC<CardProps> & { Footer: FC<CardFooterProps> }