import React, { ReactElement } from "react";

interface SectionProps {
    title?: string;
    subtitle?: string;
    styles?: string;
    children: ReactElement | ReactElement[];
}

const Section = ({
    title = '',
    subtitle = '',
    styles = '',
    children,
}: SectionProps) => (
    <div className={`flex mb-[60px] ${styles}`}>
        <div className="mb-[23px]">
            {title && <h1 className="font-gilroy-bold text-[42px] text-center text-black-b1 leading-none tracking-[4.2px] mb-[1px]">{title}</h1>}
            {subtitle && <p className="font-gilroy-medium text-lg text-center text-gray-g7 leading-none tracking-[0.36px]">{subtitle}</p>}
        </div>
        {children}
    </div>
);

export default Section;