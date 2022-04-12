import { SidebarHeader, SidebarWrapper } from './Sidebar.style';

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <SidebarWrapper>
            <SidebarHeader>Dashboard</SidebarHeader>
        </SidebarWrapper>
    );
};

export default Sidebar;
