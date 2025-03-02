import styled from "styled-components";
// import profileUrl from "./profile.jpeg";

// const HomeMainWrapper = styled.div`
//   width: 100%;
//   text-align: justify;
//     margin: 0 1vw;
//     font-size: calc(2px + 1.5vw);
//     font-family: "Slabo 27px", serif;
//     font-weight: 400;
//     font-style: normal;
//     @media (max-width: 900px) {
        
//         display: flex;
//         flex-direction: column;
//         width:100%;

//         text-align: justify;
//     margin: 0 1vw;
//     font-size: calc(2px + 1.5vw);
//     font-family: "Slabo 27px", serif;
//     font-weight: 400;
//     font-style: normal;
//     }
// `;

const HomeMainFirstPart = styled.div`
  width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
  @media (max-width: 900px) {
    width: 100%;
        display: flex;
        flex-direction: column;
  }
`;

const HomeMainSecondPart = styled.div`
  width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
  @media (max-width: 900px) {
    width: 100%;
        display: flex;
        flex-direction: column;
  }
`;

const HomeMainImage = styled.div`
  width: 40%;
    margin: 1vh 1vw;
  @media (max-width: 900px) {
    margin: 1vh auto;
  }
`;

const ProfileImage = styled.img`
  max-width: 100%;
`;

const HomeMainText = styled.div`
  width: 60%;
    margin: 1vh 1vw;
  @media (max-width: 900px) {
    width: 100%;
        margin: 0 0;
  }
`;

export default function Home() {
  return (
    <>
      <HomeMainFirstPart>
        <HomeMainImage>
          <ProfileImage src="./profile.jpeg" alt="Shaohua Yue" />
        </HomeMainImage>
        <HomeMainText>
          <p>
            My name is Shaohua, and I am currently pursuing a Master's degree in
            Computer Science in Boston. Before applying for this degree, I had
            about three years of professional experience in China. Previously, I
            worked as a contractor software engineer at Electronic Arts Digital
            Platform. Our department focused on commerce and identity. I was
            involved in the development of the inventory system and value
            transfer system.
          </p>
        </HomeMainText>
      </HomeMainFirstPart>
      <HomeMainSecondPart>
        <p>
          Welcome to my website, here you will find my{" "}
          <strong>
            <em>
              <u>Educational</u>
            </em>
          </strong>{" "}
          and my
          <strong>
            <em>
              <u>Employment</u>
            </em>
          </strong>{" "}
          history; as well as other information that might be of interest to
          you.
        </p>
      </HomeMainSecondPart>
    </>
  );
}
