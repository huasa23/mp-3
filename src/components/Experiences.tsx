import styled from "styled-components";

const ExperienceMain = styled.div`
  width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 3vw;
`;


const ExperienceMainText = styled.div`
     width: 100%;
    margin: 1vh 1vw;
`;

const ExperienceMainPosition = styled.p`
    font-size: calc(2px + 2vw);
    font-weight: bold;
`;



export default function Experience() {
    return (
        <>
        <ExperienceMain>
            <ExperienceMainText>
                <ExperienceMainPosition>Position: Backend Software Engineer</ExperienceMainPosition>
                <ul>
                    <li>
                        <p>Company: Innovative Tech Solutions Ltd.</p>
                        <p>Location: Beijing, China</p>
                        <p>Duration: 3 years (2020 - 2023)</p>
                    </li>
                    <li>
                        <p>Responsibilities:</p>
                        <p>Developed and maintained the backend logic for a series of dynamic web applications tailored for e-commerce and social media analytics.</p>
                    </li>
                    <li>
                        <p>Achievements:</p>
                        <p>Led the backend team in the development of a scalable e-commerce platform that supported over 100,000 active users, significantly boosting the company's market presence.</p>
                    </li>
                </ul>
            </ExperienceMainText>
        </ExperienceMain>
        </>
    );
}