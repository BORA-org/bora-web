import React, { ReactElement } from "react";
import Label from "../Label";

interface IOContextProps {
    label: string;
    children: ReactElement;
    marginLeft?: string;
    marginRight?: string;
}

const IOContext = ({ 
    label, 
    children,
    marginLeft = '',
    marginRight = '',
}: IOContextProps) => (
    <div className={`flex flex-col ${marginLeft} ${marginRight}`}>
        <Label text={label} />
        {children}
    </div>
);

export default IOContext;