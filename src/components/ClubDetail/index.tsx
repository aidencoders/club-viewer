import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 35em;
  height: 35em;

  h1 {
    font-size: 1.5em;
  }

  img {
    width: 100%;
  }
`;

function ClubDetail({ club }: any) {
  console.log(club);
  return (
    <Wrapper>
      <img src={club.coverUrl} alt="coverUrl" />
      <h1>{club.name}</h1>
      <h2>모임 장소 : {club.place}</h2>
    </Wrapper>
  );
}

export default ClubDetail;
