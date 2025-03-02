import styled from "styled-components";

const CertificationsMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2vh 3vw;
`;

const CertificationsMainText = styled.div`
  width: 100%;
  margin: 1vh 1vw;
`;

const CertificationsMainTitle = styled.p`
  font-size: calc(2px + 2vw);
  font-weight: bold;
`;

export default function Certifications() {
  return (
    <>
      <CertificationsMain>
        <CertificationsMainText>
          <CertificationsMainTitle>
            Certified ScrumMaster (CSM)
          </CertificationsMainTitle>
          <ul>
            <li>
              <p>Issuing Organization: Scrum Alliance</p>
            </li>
            <li>
              <p>Date Earned: March 2021</p>
            </li>
            <li>
              <p>
                Details: Acquired skills in agile project management
                methodologies, enhancing team collaboration and improving
                project delivery timelines.
              </p>
            </li>
          </ul>
        </CertificationsMainText>
      </CertificationsMain>
      <CertificationsMain>
        <CertificationsMainText>
          <CertificationsMainTitle>
            AWS Certified Solutions Architect – Associate
          </CertificationsMainTitle>
          <ul>
            <li>
              <p>Issuing Organization: Amazon Web Services (AWS)</p>
            </li>
            <li>
              <p>Date Earned: July 2022</p>
            </li>
            <li>
              <p>
                Details: Gained expertise in designing scalable, elastic,
                secure, and highly available applications on AWS platforms.
              </p>
            </li>
          </ul>
        </CertificationsMainText>
      </CertificationsMain>
      <CertificationsMain>
        <CertificationsMainText>
          <CertificationsMainTitle>
            Oracle Certified Professional, Java SE 11 Developer
          </CertificationsMainTitle>
          <ul>
            <li>
              <p>Issuing Organization: Oracle</p>
              <p>Date Earned: December 2020</p>
            </li>
            <li>
              <p>
                Details: Demonstrated proficiency in Java Standard Edition 11,
                utilizing new features of the language to improve application
                performance and maintainability.
              </p>
            </li>
          </ul>
        </CertificationsMainText>
      </CertificationsMain>
    </>
  );
}
