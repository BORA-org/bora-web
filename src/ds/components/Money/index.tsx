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
    const maskOptions = {
        mask: 'R$ 9999999999,99',
        regex: /R\$\s?\d+(,\d{1,2})?/,
        maskChar: null,
    };

    return (
        <InputMask
            {...maskOptions}
            name={name}
            value={value}
            required={required}
            onChange={onChange}
            placeholder="R$ 0,00"
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