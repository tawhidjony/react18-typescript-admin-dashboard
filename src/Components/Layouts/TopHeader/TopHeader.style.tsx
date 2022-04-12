import styled from 'styled-components';



export const NavBar = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme.white};
    border-bottom: 1px solid ${(props: { theme: any }) => props.theme.borderColor};
    box-shadow:${(props)=> props.theme.shadow};
    padding: 0 1rem;
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
            &:hover {
            }
            a{
                display: flex;
                align-items: center;
                width: 35px;
                height: 35px;
                color: #7B8191;
            }
        }
    }
`;
// export const DropdownMenu = styled.div`
//     opacity: ${(props: { showHide: boolean }) => (props.showHide ? 1 : 0)};
//     background: #ddd;
//     width: 270px;
//     height: calc(100vh - 60px);
//     position: absolute;
//     right: 0;
//     top: 60px;
//     padding: 10px;
//     transition: all 0.3s ease-in-out;
// `;