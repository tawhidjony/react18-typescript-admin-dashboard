import { FC, useContext, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoMoonOutline } from 'react-icons/io5';
import { BsEnvelope } from 'react-icons/bs';
import { BiMessage, BiLogOutCircle, BiUserCircle } from 'react-icons/bi';
import { AiOutlineFullscreen, AiOutlineMenuUnfold, AiOutlineSetting, AiOutlineMessage } from 'react-icons/ai';
import { LayoutToggleContext } from '../../../Context/LayoutContext/LayoutContextProvider';
import { MainHeaderLeft, NavBar, MainHeaderRight, DropdownMenu, DropdownMenuItem } from './TopHeader.style';
import AvatarImg from '../../../assets/Icons/avatar-icon.jpg';

type Props = {};
type LayoutContextInterface = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const TopHeader: FC<Props> = () => {
    const { isOpen, setIsOpen } = useContext<LayoutContextInterface>(LayoutToggleContext);
    const [profileMenu, setProfileMenu] = useState<boolean>(false);

    return (
        <NavBar collapseMenu={isOpen}>
            <MainHeaderLeft>
                <AiOutlineMenuUnfold size={28} onClick={() => setIsOpen(!isOpen)} />
                <span>Welcome Tawhid to your dashboard</span>
            </MainHeaderLeft>
            <MainHeaderRight>
                <ul>
                    <li>
                        <a href="">
                            <IoMoonOutline size={22} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <BiMessage size={22} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <BsEnvelope size={22} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <IoMdNotificationsOutline size={22} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineFullscreen size={22} />
                        </a>
                    </li>
                    <li onClick={() => setProfileMenu(!profileMenu)}>
                        <a href="#">
                            <img src={AvatarImg} alt="" width={'100%'} />
                        </a>
                        <DropdownMenu showHide={profileMenu}>
                            <DropdownMenuItem>
                                <div className="avatar">
                                    <img src={AvatarImg} alt="" width={'100%'} />
                                </div>
                                <div className="title">
                                    <h2>Tawhid Jony</h2>
                                    <small>Premium member</small>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="item">
                                    <BiUserCircle size={18} color="#7b8191" />
                                    <span>Profile</span>
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="item">
                                    <BsEnvelope size={18} color="#7b8191" />
                                    <span>Inbox</span>
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="item">
                                    <AiOutlineMessage size={18} color="#7b8191" />
                                    <span>Messages</span>
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="item">
                                    <AiOutlineSetting size={18} color="#7b8191" />
                                    <span>Settings</span>
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="item">
                                    <BiLogOutCircle size={18} color="#7b8191" />
                                    <span>Sign Out</span>
                                </button>
                            </DropdownMenuItem>
                        </DropdownMenu>
                    </li>
                </ul>
            </MainHeaderRight>
        </NavBar>
    );
};
export default TopHeader;
