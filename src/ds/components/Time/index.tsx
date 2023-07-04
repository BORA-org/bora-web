import React, { ChangeEvent } from 'react';

import InputMask from 'react-input-mask';

interface TimeProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
}

const Time = ({
  name,
  value,
  onChange,
  width = 'w-[69px]',
  height = 'h-[55px]'
}: TimeProps) => (
  <InputMask
    name={name}
    value={value}
    onChange={onChange}
    mask="99:99"
    placeholder="00:00"
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

export default Time;