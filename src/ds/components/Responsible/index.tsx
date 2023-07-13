import React, { ChangeEvent } from 'react';

import InputMask from 'react-input-mask';

interface ResponsibleProps {
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    height?: string;
    required?: boolean;
}

const Responsible = ({
    name,
    value,
    onChange,
    width = 'w-[138px]',
    height = 'h-[55px]',
    required = false,
}: ResponsibleProps) => {
    const getMask = () => {
        if (value && value.length <= 14) {
            return '999.999.999-999';
        } else {
            return '99.999.999/9999-99';
        }
    }

    return (
        <InputMask
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            mask={getMask()}
            maskChar={null}
            className={`
      ${width} 
      ${height} 
      pl-[14px] 
      pr-[14px] 
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

export default Responsible;