import React, { ChangeEvent } from 'react';

export interface Data {
	label: string;
	value: string | number;
}

interface SelectProps {
	name: string;
	data: Data[];
	value: string;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	width?: string;
	height?: string;
}

const Select = ({
	name,
	data,
	value,
	onChange,
	width = 'w-full',
	height = 'h-[55px]'
}: SelectProps) => (
	<select
		name={name}
		value={value}
		onChange={onChange}
		className={`
			${width} 
			${height} 
			p-2 
			border 
			rounded-[5px]
			border-gray-g7 
			shadow-3xl 
			font-gilroy-regular 
			text-base 
			leading-none 
			text-gray-g5
		`}
	>
		{data.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)}
	</select>
);

export default Select;