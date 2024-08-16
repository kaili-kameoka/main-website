import React from 'react';
import {ButtonProps} from "@/library/components/Button/types";
import Link from "next/link";
import './Button.scss';

function Button({children, url, onClick, color}: ButtonProps) {
	const classNames = `Button Button--${color}`
	if (url) {
		return (
				<Link href={url} className={classNames}>
					{children}
				</Link>
		)
	}

	return (
			<button onClick={onClick} className={classNames}>
				{children}
			</button>
	)
}

export default Button;