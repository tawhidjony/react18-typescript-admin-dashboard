import { FC, useContext, useState } from 'react';
import { MdMenu, MdCircleNotifications, MdChat } from 'react-icons/md';
import { SiGravatar } from 'react-icons/si';
import { LayoutToggleContext } from '../../../Context/LayoutContext/LayoutContextProvider';
import { DropdownMenu, MenuIcon, NavBar, RightDropdown } from './TopHeader.style';

type Props = {};
interface LayoutContextInterface {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TopHeader: FC<Props> = () => {
    const { isOpen, setIsOpen } = useContext<LayoutContextInterface>(LayoutToggleContext);
    const [profileMenu, setProfileMenu] = useState<boolean>(false);
    console.log(isOpen);

    return (
        <NavBar>
            <MenuIcon>
                <MdMenu size={30} onClick={() => setIsOpen(!isOpen)} />
                <span>Welcome Tawhid to your dashboard</span>
            </MenuIcon>
            <RightDropdown>
                <ul>
                    <li onClick={() => setProfileMenu(!profileMenu)}>
                        <SiGravatar size={20} />
                        <span>MD Tawhidur Rahman</span>
                        <DropdownMenu showHide={profileMenu}>dropdown</DropdownMenu>
                    </li>
                    <li>
                        <MdChat size={20} />
                    </li>
                    <li>
                        <MdCircleNotifications size={20} />
                    </li>
                </ul>
            </RightDropdown>
        </NavBar>
    );
};
export default TopHeader;
