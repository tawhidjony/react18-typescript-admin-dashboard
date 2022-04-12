import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
`;
export const MainArea = styled.div`
    position: absolute;
    left: 240px;
    width: calc(100% - 240px);
    min-height: 100vh;
    transition: all 0.5s ease-in-out;
`;

export const Wrapper = styled.div`
    padding: 1rem;
    min-height: calc(100vh - 64px);
`;
