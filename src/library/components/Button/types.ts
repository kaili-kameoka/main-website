import {ReactNode} from "react";

interface BaseButtonProps {
	children: ReactNode;
	color: 'Primary' | 'Secondary'
}

interface LinkButtonProps extends BaseButtonProps {
	url: string;
	onClick?: never;
}

interface ActionButtonProps extends BaseButtonProps {
	onClick: () => void;
	url?: never;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;