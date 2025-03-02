import styled from "styled-components";

const HeaderWrapperHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vh 1vw;
`;

const HeaderWrapperName = styled.h1`
    margin: auto;
    font-family: "Sixtyfour Convergence", serif;
    font-optical-sizing: auto;
    font-size: calc(10px + 5vw);
    font-weight: 600;
    font-style: normal;
`;

const HeaderWrapperDesc = styled.p`
    margin: auto;
    font-family: "Play", serif;
    font-weight: 400;
    font-style: normal;
`;

export default function HeaderWrapper() {
    return (
        <HeaderWrapperHeader>
            <HeaderWrapperName>Shaohua Yue</HeaderWrapperName>
            <HeaderWrapperDesc>My Online Resume</HeaderWrapperDesc>
        </HeaderWrapperHeader>
    )
}