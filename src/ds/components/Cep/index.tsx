import React, { ChangeEvent } from 'react';

import InputMask from 'react-input-mask';

interface CepProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
}

const Cep = ({
  name,
  value,
  onChange,
  width = 'w-[150px]',
  height = 'h-[55px]'
}: CepProps) => (
  <InputMask
    name={name}
    value={value}
    onChange={onChange}
    mask="99999-999"
    placeholder="00000-000"
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

export default Cep;