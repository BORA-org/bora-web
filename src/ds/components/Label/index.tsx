import React from 'react';

interface LabelProps {
    text: string;
}

const Label = ({ text }: LabelProps) => (
    <p className="h-[27px] font-gilroy-medium leading-none tracking-[0.36px] text-lg text-gray-g7">
        {text}
    </p>
);

export default Label;