import HeaderWrapper from "./components/HeaderWrapper";
import NavWrapper from "./components/NavWrapper";
import FooterWrapper from "./components/FooterWrapper";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import References from "./components/References";
import styled from "styled-components";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const TopWrapperDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const NavMainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  text-align: justify;
  margin: 0 1vw;
  font-size: calc(2px + 1.5vw);
  font-family: "Slabo 27px", serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 900px) {
    width: 100%;
    text-align: justify;
    margin: 0 1vw;
    font-size: calc(2px + 1.5vw);
    font-family: "Slabo 27px", serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

function Root() {
  return (
    <>
      <HeaderWrapper></HeaderWrapper>
      <NavMainWrapper>
        <NavWrapper></NavWrapper>

        <MainWrapper>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </MainWrapper>
      </NavMainWrapper>

      <FooterWrapper></FooterWrapper>
    </>
  );
}

function App() {
  return (
    <TopWrapperDiv>
      <RouterProvider router={router}></RouterProvider>
    </TopWrapperDiv>
  );
}

export default App;
