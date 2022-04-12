import { FC, useContext, useState } from 'react';
import { MdMenu, MdCircleNotifications, MdChat } from 'react-icons/md';
import { SiGravatar } from 'react-icons/si';
import { LayoutToggleContext } from '../../../Context/LayoutContext/LayoutContextProvider';
import { MainHeaderLeft, NavBar, MainHeaderRight } from './TopHeader.style';
import AvatarImg from '../../../assets/Icons/avatar-icon.jpg';

type Props = {};
interface LayoutContextInterface {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TopHeader: FC<Props> = () => {
    const { isOpen, setIsOpen } = useContext<LayoutContextInterface>(LayoutToggleContext);
    const [profileMenu, setProfileMenu] = useState<boolean>(false);
   

    return (
        <NavBar>
            <MainHeaderLeft>
                <MdMenu size={35} onClick={() => setIsOpen(!isOpen)} />
                <span>Welcome Tawhid to your dashboard</span>
            </MainHeaderLeft>
            <MainHeaderRight>
                <ul>
                    <li>
                        <a href=""><MdCircleNotifications size={25} /></a>
                    </li>
                    <li>
                        <a href=""><MdChat size={25} /></a>
                    </li>
                    <li>
                        <a href=""><MdChat size={25} /></a>
                    </li>
                    <li>
                        <a href=""><MdChat size={25} /></a>
                    </li>
                    <li>
                        <a href=""><MdChat size={25} /></a>
                    </li>
                    <li>
                        <a href=""><MdChat size={25} /></a>
                    </li>
                    <li onClick={() => setProfileMenu(!profileMenu)}>
                        <a href="" >
                            <img src={AvatarImg} alt="" width={'100%'} />
                        </a>
                        {/* <DropdownMenu showHide={profileMenu}>dropdown</DropdownMenu> */}
                    </li>
                </ul>
            </MainHeaderRight>
        </NavBar>
    );
};
export default TopHeader;
