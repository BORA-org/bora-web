import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string;
  height?: string;
  required?: boolean;
}

const TextArea = ({
  name,
  value,
  onChange,
  placeholder,
  width = 'w-[690px]',
  height = 'h-[350px]',
  required = false,
}: TextAreaProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newEvent = {
      target: {
        name: event.target.name,
        value: event.target.value,
      },
    } as ChangeEvent<HTMLInputElement>;
    onChange(newEvent);
  };

  return (
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      className={`
        ${width}
        ${height} 
        rounded-[5px] 
        border 
        border-gray-g7 
        shadow-3xl
        p-2 
        font-gilroy-regular 
        text-xl 
        leading-none 
        break-words 
        overflow-y-auto
        resize-none
      `}
    />
  );
};

export default TextArea;
