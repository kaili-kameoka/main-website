import React from 'react';
import './Devicons.scss';
import {DeviconsProps} from "@/library/components/Devicons/types";

function Devicons({icons}: DeviconsProps) {
	return (
			<span className={'Devicons'}>
				{icons.map(tool => <i key={tool} className={`devicon-${tool}-plain`}></i>)}
			</span>
	);
}

export default Devicons;
