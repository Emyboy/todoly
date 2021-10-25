import React from "react";

import { BaseButton } from "./styled";

interface ButtonProps {
    children: React.ReactElement
}

export const Button = ({children}:ButtonProps) => {
    return <BaseButton>{children}</BaseButton>
};
