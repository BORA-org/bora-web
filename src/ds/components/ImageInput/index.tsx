import React, { ChangeEvent, Fragment } from "react";

interface ImageInputProps {
    text: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    textColor?: string;
    backgroundColor?: string;
    width?: string;
}

const ImageInput = ({
    text,
    onChange,
    textColor = 'text-gray-g5',
    backgroundColor = 'bg-yellow-y4',
    width = 'w-[394px]',
}: ImageInputProps) => {
    return (
        <Fragment>
            <label
                htmlFor="input-imagem"
                className={`
                block
                ${width} 
                ${textColor} 
                ${backgroundColor} 
                py-[14px] 
                font-gilroy-bold 
                leading-none 
                text-center 
                text-lg 
                rounded-[20px]
                cursor-pointer
                shadow-3xl 
        `}
            >
                {text}
            </label>
            <input
                id="input-imagem"
                type="file"
                accept="image/*"
                onChange={onChange}
                className="hidden"
            />
        </Fragment>
    );
};

export default ImageInput;