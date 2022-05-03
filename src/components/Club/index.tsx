import styled from "@emotion/styled";
import { ClubInfo } from "../App";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  .contents {
    flex-grow: 1;
  }
`;

const WrapperImg = styled.div`
  box-sizing: border-box;
  height: 300px;
  position: relative;
  display: flex;
`;

const Img = styled.img`
  position: absolute;
  with: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WrapperContent = styled.div`
  box-sizing: border-box;
  flex: 1;
  overflow: hidden;

  h5 {
    font-weight: bold;
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1.125rem;
  }
`;

function Club({ club, leaders, partners }: ClubInfo) {
  console.log(club);
  console.log(leaders);
  console.log(partners);
  return (
    <Wrapper>
      <WrapperImg>
        <Img src={club?.coverUrl} alt="club thumbnail" />
      </WrapperImg>
      <WrapperContent>
        <h5>{club && club.name}</h5>
        <h6>{club && club.description}</h6>
      </WrapperContent>
    </Wrapper>
  );
}

export default Club;
