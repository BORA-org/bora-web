import React, { ReactElement } from "react";
import Label from "../Label";

interface IOContextProps {
    label: string;
    children: ReactElement;
    marginLeft?: string;
    marginRight?: string;
    required?: boolean;
}

const IOContext = ({ 
    label, 
    children,
    marginLeft = '',
    marginRight = '',
    required = false,
}: IOContextProps) => (
    <div className={`flex flex-col ${marginLeft} ${marginRight}`}>
        <Label text={label + (required ? ' *' : '')} />
        {children}
    </div>
);

export default IOContext;