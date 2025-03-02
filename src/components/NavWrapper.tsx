import { styled } from "styled-components";
import { Link } from "react-router-dom";

const NavMainWrapperNav = styled.nav`
  width: 20%;
  padding: 2vh;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const NavMainWrapperUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  list-style: none;
  padding-left: 0;
  li:last-child {
    border-right: none;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    text-align: center;
  }
`;

const NavMainWrapperLi = styled.li`

width: 80%;
    border-right: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    margin: auto;
    a:link,
  a:visited {
    text-align: center;
        color: black;
        text-decoration: none;
        font-family: "Moulpali", serif;
        font-weight: 400;
        font-size: calc(2px + 2vw);
        font-style: normal;
  }
}

  
  @media (max-width: 900px) {
    width: 75%;
  margin: auto;
  border-right: 1px solid #000;
  border-bottom: none;
  padding: 0 1vw;
  a:link,
  a:visited {
    text-align: center;
        color: black;
        text-decoration: none;
        font-family: "Moulpali", serif;
        font-weight: 400;
        font-size: calc(2px + 2vw);
        font-style: normal;
  }
}
`;

export default function NavWrapper() {
  return (
    <>
      <NavMainWrapperNav>
        <NavMainWrapperUl>
          <NavMainWrapperLi>
            <Link to="/">Home</Link>
          </NavMainWrapperLi>
          <NavMainWrapperLi>
            <Link to="/education">Education</Link>
          </NavMainWrapperLi>
          <NavMainWrapperLi>
            <Link to="/experiences">Experiences</Link>
          </NavMainWrapperLi>
          <NavMainWrapperLi>
            <Link to="/certifications">Certifications</Link>
          </NavMainWrapperLi>
          <NavMainWrapperLi>
            <Link to="/references">References</Link>
          </NavMainWrapperLi>
          <NavMainWrapperLi>
            <Link to="/achievements">Achievements</Link>
          </NavMainWrapperLi>
          <NavMainWrapperLi>
            <Link to="/projects">Projects</Link>
          </NavMainWrapperLi>
        </NavMainWrapperUl>
      </NavMainWrapperNav>
    </>
  );
}
