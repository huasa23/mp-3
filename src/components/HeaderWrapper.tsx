import styled from "styled-components";

const HeaderWrapperHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vh 1vw;
`;

const HeaderWrapperName = styled.h1`
    text-align: left;
    font-family: "Sixtyfour Convergence", serif;
    font-optical-sizing: auto;
    font-size: calc(10px + 5vw);
    font-weight: 600;
    font-style: normal;
    @media (max-width: 900px) {
        margin: auto;
    }
`;

const HeaderWrapperDesc = styled.p`
    text-align: left;
    padding-left: 1vw;
    font-family: "Play", serif;
    font-weight: 400;
    font-style: normal;
    @media (max-width: 900px) {
    padding-left: 1vw;
        margin: auto;
    }
`;

export default function HeaderWrapper() {
    return (
        <HeaderWrapperHeader>
            <HeaderWrapperName>Shaohua Yue</HeaderWrapperName>
            <HeaderWrapperDesc>My Online Resume</HeaderWrapperDesc>
        </HeaderWrapperHeader>
    )
}