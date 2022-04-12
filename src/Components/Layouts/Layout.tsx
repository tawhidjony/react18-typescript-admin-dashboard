import React, { FC, useContext } from 'react';
import LayoutToggleContextProvider from '../../Context/LayoutContext/LayoutContextProvider';
import { Container, MainArea, Wrapper } from './Layout.style';
import Sidebar from './Sidebar/Sidebar';
import TopHeader from './TopHeader/TopHeader';

type ILayout = {
    children: React.ReactNode;
};

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <Container>
            <LayoutToggleContextProvider>
                <Sidebar />
                <MainArea>
                    <TopHeader />
                    <Wrapper>{children}</Wrapper>
                </MainArea>
            </LayoutToggleContextProvider>
        </Container>
    );
};

export default Layout;
