import React, { FC, useContext } from 'react';
import { LayoutToggleContext } from '../../../Context/LayoutContext/LayoutContextProvider';
import TopHeader from '../TopHeader/TopHeader';
import { MainArea, Wrapper } from './MainWrapper.style';

type IMainWrapper = {
    children: React.ReactNode;
};
interface LayoutContextInterface {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainWrapper: FC<IMainWrapper> = ({ children }) => {
    const { isOpen } = useContext<LayoutContextInterface>(LayoutToggleContext);
    return (
        <MainArea collapseMenu={isOpen}>
            <TopHeader />
            <Wrapper>{children}</Wrapper>
        </MainArea>
    );
};

export default MainWrapper;
