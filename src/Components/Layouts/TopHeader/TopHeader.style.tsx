import styled from 'styled-components';

export const DropdownMenu = styled.div`
    opacity: ${(props: { showHide: boolean }) => (props.showHide ? 1 : 0)};
    background: #ddd;
    width: 270px;
    height: calc(100vh - 60px);
    position: absolute;
    right: 0;
    top: 60px;
    padding: 10px;
    transition: all 0.3s ease-in-out;
`;
export const RightDropdown = styled.div`
    ul {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            border: 1px solid #ccc;
            border-radius: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            margin: 0 15px;
            cursor: pointer;
            &:hover {
            }
            &:first-child {
                display: flex;
                align-items: center;
                flex-direction: row-reverse;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-right: 5px;
                padding-left: 15px;
                span {
                    padding-right: 5px;
                }
            }
        }
    }
`;
export const NavBar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background: #fff;
    background: white;
    border-bottom: 1px solid #ccc;
    -webkit-box-shadow: 0 0 0 0 white, 0 0px 3px #ccc;
    -moz-box-shadow: 0 0 0 0 white, 0 0px 3px #ccc;
    box-shadow: 0 0 0 0 white, 0 0px 3px #ccc;
`;
export const Avatar = styled.img`
    width: 44px;
    height: 44px;
`;
export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        margin-left: 16px;
        font-weight: bold;
    }
`;
