import React, { FC } from 'react';
import LayoutToggleContextProvider from '../../Context/LayoutContext/LayoutContextProvider';
import { Container } from './Layout.style';
import MainWrapper from './MainWrapper/MainWrapper';
import Sidebar from './Sidebar/Sidebar';

type ILayout = {
    children: React.ReactNode;
};

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <Container>
            <LayoutToggleContextProvider>
                <Sidebar />
                <MainWrapper children={children} />
            </LayoutToggleContextProvider>
        </Container>
    );
};

export default Layout;
