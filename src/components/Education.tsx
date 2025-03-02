import styled from "styled-components";

const EducationMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2vh 3vw;
`;

const EducationMainText = styled.div`
  width: 100%;
  margin: 1vh 1vw;
`;

const EducationMainDegree = styled.p`
  font-size: calc(2px + 2vw);
  font-weight: bold;
`;

export default function Education() {
  return (
    <>
    <EducationMain>
      <EducationMainText>
        <EducationMainDegree>
          <p>Bachelor's Degree in Software Engineering</p>
          <ul>
            <li>
              <p>Harbin Institute of Technology</p>
              <p>(2014 - 2018)</p>
            </li>
            <li>
              <p>Key Courses:</p>
              <p>
                Data Structures and Algorithms, Operating Systems, Network
                Security, Software Development Lifecycle, Database Management
                Systems, etc.
              </p>
            </li>
          </ul>
        </EducationMainDegree>
      </EducationMainText>
    </EducationMain>
    <EducationMain>
      <EducationMainText>
        <EducationMainDegree>
          <p>Master's Degree in Computer Science</p>
          <ul>
            <li>
              <p>Boston University</p>
              <p>(2024 - 2025)</p>
            </li>
            <li>
              <p>Focus Areas:</p>
              <p>
                Advanced Computing Theories, Machine Learning, Artificial
                Intelligence, Big Data Analytics, and Cloud Computing.
              </p>
            </li>
          </ul>
        </EducationMainDegree>
      </EducationMainText>
    </EducationMain>
    </>
  );
}
