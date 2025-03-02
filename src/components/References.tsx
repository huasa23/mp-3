import styled from "styled-components";

const ReferencesMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2vh 3vw;
`;

const ReferencesMainText = styled.div`
  width: 100%;
  margin: 1vh 1vw;
`;

const ReferencesMainName = styled.p`
  font-size: calc(2px + 2vw);
  font-weight: bold;
`;

export default function References() {
  return (
    <>
      <ReferencesMain>
        <ReferencesMainText>
          <ReferencesMainName>Dr. Li Wei</ReferencesMainName>
          <ul>
            <li>
              <p>Position: Senior Software Engineer</p>
            </li>
            <li>
              <p>Company: Innovative Tech Solutions Ltd.</p>
            </li>
            <li>
              <p>Relationship: Former Team Lead</p>
            </li>
          </ul>
        </ReferencesMainText>
      </ReferencesMain>
      <ReferencesMain>
        <ReferencesMainText>
          <ReferencesMainName>Ms. Zhang Min</ReferencesMainName>
          <ul>
            <li>
              <p>Position: Project Manager</p>
            </li>
            <li>
              <p>Company: Innovative Tech Solutions Ltd.</p>
            </li>
            <li>
              <p>Relationship: Project Manager for multiple projects</p>
            </li>
          </ul>
        </ReferencesMainText>
      </ReferencesMain>
      <ReferencesMain>
        <ReferencesMainText>
          <ReferencesMainName>Mr. John Smith</ReferencesMainName>
          <ul>
            <li>
              <p>Position: Senior Developer</p>
            </li>
            <li>
              <p>Company: Innovative Tech Solutions Ltd.</p>
            </li>
            <li>
              <p>Relationship: Colleague</p>
            </li>
          </ul>
        </ReferencesMainText>
      </ReferencesMain>
      <ReferencesMain>
        <ReferencesMainText>
          <ReferencesMainName>Mr. John Smith</ReferencesMainName>
          <ul>
            <li>
              <p>Position: Senior Developer</p>
            </li>
            <li>
              <p>Company: Innovative Tech Solutions Ltd.</p>
            </li>
            <li>
              <p>Relationship: Colleague</p>
            </li>
          </ul>
        </ReferencesMainText>
      </ReferencesMain>
    </>
  );
}
