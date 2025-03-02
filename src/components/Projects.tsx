import styled from "styled-components";
import Calculator from "./Calculator";

const ProjectsMain = styled.div`
  width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 3vw;
}
`;

const ProjectsMainText = styled.div`
  width: 100%;
  margin: 1vh 1vw;
`;

const ProjectsMainTitle = styled.p`
  font-size: calc(2px + 2vw);
  font-weight: bold;
`;

export default function Projects() {
  return (
    <>
      <ProjectsMain>
        <ProjectsMainText>
          <ProjectsMainTitle>
            Dynamic Social Media Analytics Tool
          </ProjectsMainTitle>
          <ul>
            <li>
              <p>Role: Lead Backend Developer</p>
            </li>
            <li>
              <p>Technologies Used: Python, Flask, MongoDB, Docker</p>
            </li>
            <li>
              <p>
                Details: Developed a comprehensive analytics tool designed to
                track and analyze social media trends in real-time. Implemented
                robust data processing algorithms that handle large volumes of
                data efficiently. The tool provides actionable insights to
                marketing teams, enhancing their decision-making processes.
              </p>
            </li>
          </ul>
        </ProjectsMainText>
      </ProjectsMain>
      <ProjectsMain>
        <ProjectsMainText>
          <ProjectsMainTitle>
            Cloud-Based Inventory Management System
          </ProjectsMainTitle>
          <ul>
            <li>
              <p>Role: Project Architect</p>
            </li>
            <li>
              <p>Technologies Used: Java, Spring Boot, AWS, PostgreSQL</p>
            </li>
            <li>
              <p>
                Details: Architected and led the development of a cloud-based
                inventory management system for a retail chain. The system
                integrates seamlessly with existing POS systems and offers
                real-time inventory tracking, automated restocking alerts, and
                detailed reports, resulting in a 50% reduction in inventory
                discrepancies.
              </p>
            </li>
          </ul>
        </ProjectsMainText>
      </ProjectsMain>
      <ProjectsMain>
        <ProjectsMainText>
          <ProjectsMainTitle>
            Mobile Payment Gateway Integration
          </ProjectsMainTitle>
          <ul>
            <li>
              <p>Role: Backend Developer</p>
            </li>
            <li>
              <p>Technologies Used: Node.js, Express, Stripe API, Redis</p>
            </li>
            <li>
              <p>
                Details: Implemented a secure and scalable mobile payment
                gateway for an e-commerce platform. This integration supports
                multiple payment methods and currencies, enhancing the
                platform's accessibility and user satisfaction by providing a
                smooth transaction experience.
              </p>
            </li>
          </ul>
        </ProjectsMainText>
      </ProjectsMain>
      <ProjectsMain>
        <ProjectsMainText>
          <ProjectsMainTitle>AI-Driven Job Matching Platform</ProjectsMainTitle>
          <ul>
            <li>
              <p>Role: Lead Developer</p>
            </li>
            <li>
              <p>
                Technologies Used: Python, Django, TensorFlow, Elasticsearch
              </p>
            </li>
            <li>
              <p>
                Details: Led the development of an AI-driven platform that
                matches job seekers with potential employers based on skills,
                experience, and cultural fit. Utilized machine learning
                algorithms to refine search accuracy and user recommendations,
                significantly increasing the platform's user engagement and
                satisfaction rates.
              </p>
            </li>
          </ul>
        </ProjectsMainText>
      </ProjectsMain>
      <Calculator />
    </>
  );
}
