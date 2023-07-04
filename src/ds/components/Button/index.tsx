import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    textColor?: string;
    backgroundColor?: string;
    width?: string;
    disabled?: boolean;
}

const Button = ({
    text,
    onClick,
    type = 'button',
    textColor = 'text-gray-g5',
    backgroundColor = 'bg-yellow-y4',
    width = 'w-[394px]',
    disabled = false,
}: ButtonProps) => (
    <button
        type={type}
        disabled={disabled}
        onClick={onClick}
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