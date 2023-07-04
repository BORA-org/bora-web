import React, { ChangeEvent } from 'react';

import InputMask from 'react-input-mask';

interface DateProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
}

const Date = ({
  name,
  value,
  onChange,
  width = 'w-[138px]',
  height = 'h-[55px]'
}: DateProps) => (
  <InputMask
    name={name}
    value={value}
    onChange={onChange}
    mask="99/99/9999"
    placeholder="00/00/0000"
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

export default Date;