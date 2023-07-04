import React, { ChangeEvent } from 'react';

interface InputProps {
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    width?: string;
    height?: string;
}

const Input = ({
    name,
    value,
    onChange,
    type = 'text',
    placeholder,
    width = 'w-full',
    height = 'h-[55px]'
}: InputProps) => (
    <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
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
    />
);

export default Input;