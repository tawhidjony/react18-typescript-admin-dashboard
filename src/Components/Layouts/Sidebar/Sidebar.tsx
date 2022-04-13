import { SidebarHeader, SidebarWrapper } from './Sidebar.style';
import { useContext } from 'react';
import { LayoutToggleContext } from '../../../Context/LayoutContext/LayoutContextProvider';
import { AiOutlineAppstoreAdd, AiOutlineHome } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {};
type LayoutContextInterface = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar = (props: Props) => {
    const { isOpen, setIsOpen } = useContext<LayoutContextInterface>(LayoutToggleContext);
    const menuItem = [
        {
            title: 'Main',
            menu: [
                { icon: <AiOutlineHome />, name: 'Dashboard', link: '/', title: 'MAIN' },
                { icon: <AiOutlineAppstoreAdd />, name: 'Apps', link: '/about' }
            ]
        },
        {
            title: 'Web Apps',
            menu: [
                { icon: <AiOutlineHome />, name: 'Dashboard', link: '/', title: 'MAIN' },
                { icon: <AiOutlineAppstoreAdd />, name: 'Apps', link: '/about' }
            ]
        }
    ];
    return (
        <SidebarWrapper collapseMenu={isOpen}>
            <SidebarHeader>Dashboard</SidebarHeader>
            <div>
                <SidebarMenu>
                    {menuItem.map((item, index) => {
                        return (
                            <>
                                <MenuItemTitle key={index}>{item.title}</MenuItemTitle>
                                {item.menu?.map((menu, index) => {
                                    return (
                                        <SidebarMenuItem key={index}>
                                            <Link to={menu.link}>
                                                {menu.icon} {menu.name}
                                            </Link>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </>
                        );
                    })}
                </SidebarMenu>
            </div>
        </SidebarWrapper>
    );
};

export default Sidebar;

export const SidebarMenu = styled.ul`
    list-style: none;
`;
export const MenuItemTitle = styled.li`
    font-size: 10px;
    font-weight: 600;
    color: #ccc;
    padding-top: 16px;
    padding-left: 10px;
    padding-bottom: 5px;
    text-transform: uppercase;
`;
export const SidebarMenuItem = styled.li`
    list-style: none;
    cursor: pointer;
    padding: 10px 16px;
    a {
        text-decoration: none;
        color: #7b8191;
        font-size: 16px;
        display: flex;
        align-items: center;
        svg {
            margin-right: 10px;
            font-size: 20px;
        }
    }
`;
