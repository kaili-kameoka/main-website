import {FC, ReactNode} from "react";

export interface CoverProps {
	children: ReactNode;
	alignment?: 'Left' | 'Center';
}

export interface CoverMetaProps {
	children: ReactNode;
}

export type CoverType = FC<CoverProps> & { Meta: FC<CoverMetaProps> }