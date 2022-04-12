import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100%;
    background: ${(props) => props.theme.white};
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    z-index: 999;
    border-right: 1px solid #ccc;
    -webkit-box-shadow: 0 0 0 0 white, 0 0px 3px black;
    -moz-box-shadow: 0 0 0 0 white, 0 0px 3px black;
    box-shadow: 0 0 0 0 white, 0 0px 3px #ccc;
`;

export const SidebarHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background: #fff;
    border-bottom: 1px solid #ccc;
`;
