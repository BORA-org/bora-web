import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    textColor?: string;
    backgroundColor?: string;
    width?: string;
}

const Button = ({
    text,
    textColor = 'text-gray-g5',
    backgroundColor = 'bg-yellow-y4',
    width = 'w-[394px]',
    ...props
}: ButtonProps) => (
    <button
        {...props}
        className={`
            ${width} 
            ${textColor} 
            ${backgroundColor} 
            py-[14px] 
            font-gilroy-bold 
            leading-none 
            text-center 
            text-lg 
            rounded-[20px]
            shadow-3xl
        `}
    >
        {text}
    </button>
);

export default Button;