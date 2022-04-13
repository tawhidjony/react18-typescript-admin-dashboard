import styled from 'styled-components';

export const MainArea = styled.div`
    position: absolute;
    left: ${(props: { collapseMenu: boolean }) => (props.collapseMenu ? '64px' : '240px')};
    width: ${(props: { collapseMenu: boolean }) => (props.collapseMenu ? 'calc(100% - 64px)' : 'calc(100% - 240px)')};
    min-height: 100vh;
    transition: all 0.3s ease-in-out;
`;

export const Wrapper = styled.div`
    padding: 1rem;
    margin-top: 64px;
    min-height: calc(100vh - 64px);
`;
