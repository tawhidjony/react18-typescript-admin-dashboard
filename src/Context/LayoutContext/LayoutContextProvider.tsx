import React, { createContext, ReactNode, useState } from 'react';
import { FC } from 'react';

type ILayoutContext = {
    children: ReactNode;
};
interface LayoutContextInterface {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const cartContextDefaultValue: LayoutContextInterface = {
    isOpen: false,
    setIsOpen: () => false
};
export const LayoutToggleContext = createContext<LayoutContextInterface>(cartContextDefaultValue);
const LayoutToggleContextProvider: FC<ILayoutContext> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const values = { isOpen, setIsOpen };
    return <LayoutToggleContext.Provider value={values}>{children}</LayoutToggleContext.Provider>;
};

export default LayoutToggleContextProvider;
