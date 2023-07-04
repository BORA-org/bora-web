import React from "react";

import { ReactComponent as ArrowLeftIcon } from '../../../assets/img/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/img/arrow_right.svg';

export interface Image {
    name: string;
    value: string;
}

interface PreviewImageProps {
    images: Image[];
    selected: number;
    onSelected: (index: number) => void;
}

const PreviewImage = ({ images, selected, onSelected }: PreviewImageProps) => {
    const handleSelected = (index: number) => {
        if (images.length) {
            onSelected(index);
        }
    };

    const handlePrevious = () => {
        handleSelected(selected === 0 ? images.length - 1 : selected - 1);
    };

    const handleNext = () => {
        handleSelected(selected === images.length - 1 ? 0 : selected + 1);
    };

    const filterImages = (): Image[] => {
        if (images.length) {
            let preview: Image[] = [];
            if (images.length < 3) {
                preview = images.concat((images.length === 2 ? [''] : ['', '']).map((value, index) => {
                    return {
                        name: `Image ${index + 1}`,
                        value: value
                    };
                }));
            } else {
                preview = images;
            }
            const currentElement = preview[selected];
            const nextElement = preview[(selected + 1) % preview.length];
            const nextNextElement = preview[(selected + 2) % preview.length];
            return [currentElement, nextElement, nextNextElement];
        }
        return ['', '', ''].map((value, index) => {
            return {
                name: `Image ${index + 1}`,
                value: value
            };
        });
    };

    return (
        <div className="max-w-[310px] flex flex-col justify-center">
            <div className="flex flex-row items-center justify-center mb-[25px]">
                <button disabled={images.length < 2} onClick={handlePrevious}>
                    <ArrowLeftIcon
                        width={36}
                        height={36}
                        className="mr-[10px]"
                    />
                </button>
                {images[selected] ?
                    <img
                        src={images[selected].value}
                        alt=""
                        className="w-[206px] h-[200px] rounded-[37px] shadow-3xl"
                    /> :
                    <div className="w-[206px] h-[200px] rounded-[37px] shadow-3xl bg-gray-g2" />
                }
                <button disabled={images.length < 2} onClick={handleNext}>
                    <ArrowRightIcon
                        width={36}
                        height={36}
                        className="ml-[10px]"
                    />
                </button>

            </div>
            <div className="flex flex-row items-center justify-center">
                {filterImages().map((image, index) =>
                    <div key={index}>
                        {image.value ?
                            <img
                                src={image.value}
                                alt=""
                                onClick={() => handleSelected(index)}
                                className="w-[70px] h-[70px] m-[15px] rounded-[10px] shadow-3xl"
                            />
                            :
                            <div className="w-[70px] h-[70px] m-[15px] rounded-[10px] shadow-3xl bg-gray-g2" />
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviewImage;