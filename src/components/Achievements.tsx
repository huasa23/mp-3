import styled from "styled-components";

const AchievementsMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2vh 3vw;
`;

const AchievementsMainText = styled.div`
  width: 100%;
  margin: 1vh 1vw;
`;

const AchievementsMainTitle = styled.p`
  font-size: calc(2px + 2vw);
  font-weight: bold;
`;

export default function Achievements() {
  return (
    <>
      <AchievementsMain>
        <AchievementsMainText>
          <AchievementsMainTitle>
            Lead Developer on E-commerce Platform Overhaul
          </AchievementsMainTitle>
          <ul>
            <li>
              <p>
                Details: Spearheaded the redesign and development of a major
                e-commerce platform, which led to a 20% increase in user
                engagement and a 25% increase in transaction volume within the
                first six months post-launch.
              </p>
            </li>
          </ul>
        </AchievementsMainText>
      </AchievementsMain>
      <AchievementsMain>
        <AchievementsMainText>
          <AchievementsMainTitle>
            Performance Optimization Initiative
          </AchievementsMainTitle>
          <ul>
            <li>
              <p>
                Details: Initiated and implemented a series of performance
                enhancements that reduced server response times by 30% and
                database load times by 25%, significantly improving the user
                experience and scalability of our applications.
              </p>
            </li>
          </ul>
        </AchievementsMainText>
      </AchievementsMain>
      <AchievementsMain>
        <AchievementsMainText>
          <AchievementsMainTitle>
            Innovative Tech Solutions Ltd. Employee of the Year
          </AchievementsMainTitle>
          <ul>
            <li>
              <p>
                Details: Awarded the "Employee of the Year" in 2019 for
                exceptional contributions to multiple projects, demonstrating
                outstanding problem-solving skills and leadership.
              </p>
            </li>
          </ul>
        </AchievementsMainText>
      </AchievementsMain>
      <AchievementsMain>
        <AchievementsMainText>
          <AchievementsMainTitle>
            Successful Deployment of Microservices Architecture
          </AchievementsMainTitle>
          <ul>
            <li>
              <p>
                Details: Led the transition from a monolithic architecture to a
                microservices-oriented architecture, which improved system
                resilience and scalability, facilitating easier updates and
                maintenance.
              </p>
            </li>
          </ul>
        </AchievementsMainText>
      </AchievementsMain>
      <AchievementsMain>
        <AchievementsMainText>
          <AchievementsMainTitle>
            Mentorship and Leadership
          </AchievementsMainTitle>
          <ul>
            <li>
              <p>
                Details: Mentored over 10 junior developers, guiding them
                through complex software development processes and best
                practices, which contributed to a 40% increase in team
                productivity and reduced onboarding time for new team members.
              </p>
            </li>
          </ul>
        </AchievementsMainText>
      </AchievementsMain>
    </>
  );
}
