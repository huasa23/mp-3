import styled from "styled-components";
const FooterWrapperFooter = styled.footer`
  padding: 1vh 1vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: "Play", serif;
  font-weight: 400;
  font-style: normal;
`;

export default function FootWrapper() {
    return (
        <FooterWrapperFooter>
            <p>All Rights Reserved by Shaohua Yue <a href="https://www.linkedin.com/in/shaohua-yue-0000000000/">Credits</a> &copy;</p>
        </FooterWrapperFooter>
    )
}