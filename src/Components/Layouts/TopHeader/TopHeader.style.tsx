import styled from 'styled-components';

export const NavBar = styled.div`
    width: ${(props: { collapseMenu: boolean }) => (props.collapseMenu ? 'calc(100% - 64px)' : 'calc(100% - 240px)')};
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme.white};
    border-bottom: 1px solid ${(props: { theme: any }) => props.theme.borderColor};
    box-shadow: ${(props) => props.theme.shadow};
    padding: 0 1rem;
    position: fixed;
    top: 0;
    right: 0;
    left: ${(props: { collapseMenu: boolean }) => (props.collapseMenu ? '64px' : '240px')};
    transition: all 0.3s ease-in-out;
`;

export const MainHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        margin-left: 16px;
        font-weight: bold;
    }
`;
export const MainHeaderRight = styled.div`
    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: nowrap;
            cursor: pointer;
            margin-right: 16px;
            position: relative;
            a {
                display: flex;
                align-items: center;
                width: 35px;
                height: 35px;
                color: #7b8191;
            }
        }
    }
`;

export const DropdownMenu = styled.div`
    opacity: ${(props: { showHide: boolean }) => (props.showHide ? 1 : 0)};
    background: ${(props) => props.theme.white};
    position: absolute;
    border: 1px solid ${(props: { theme: any }) => props.theme.borderColor};
    width: 240px;
    top: 49px;
    right: -10px;
    border-radius: 8px;
    box-shadow: ${(props: { theme: any }) => props.theme.shadow};
    transition: all 0.3s ease-in-out;
    &::before {
        content: '';
        width: 13px;
        height: 13px;
        position: absolute;
        top: -7px;
        right: 20px;
        transform: rotate(45deg);
        border-top: 1px solid #e9edf4;
        border-left: 1px solid #e9edf4;
        background: ${(props: { theme: any }) => props.theme.white};
    }
`;

export const DropdownMenuItem = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0.8rem;
    cursor: pointer;
    border-bottom: 1px solid ${(props: { theme: any }) => props.theme.borderColor};
    &:last-child {
        border-bottom: none;
    }
    div.avatar {
        width: 40px;
        height: 40px;
    }
    div.title {
        h2 {
            font-size: 1.2rem;
        }
        small {
            text-transform: capitalize;
            color: #7b8191;
        }
    }
    button.item {
        cursor: pointer;
        width: 100%;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        span {
            font-size: 14px;
            color: #7b8191;
        }
    }
`;
