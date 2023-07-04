import React, { ChangeEvent } from 'react';
import InputMask from 'react-input-mask';

interface MoneyProps {
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    height?: string;
    required?: boolean;
}

const Money = ({
    name,
    value,
    onChange,
    width = 'w-[125px]',
    height = 'h-[55px]',
    required = false,
}: MoneyProps) => {    
    return (
        <InputMask
            name={name}
            value={value}
            required={required}
            mask="R$ 9.999,99"
            onChange={onChange}
            placeholder="R$ 0,00"
            maskChar={null}
            className={`
                ${width} 
                ${height} 
                pl-[10px] 
                pr-[10px] 
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
};

export default Money;