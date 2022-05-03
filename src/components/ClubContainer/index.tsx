import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { ClubInfo } from "../App";
import Club from "../Club";

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

type Props = {
  clubs: ClubInfo[];
};

function ClubContainer({ clubs }: Props) {
  return (
    <Wrapper>
      {clubs &&
        clubs.map((club) => {
          return (
            <Club
              key={nanoid()}
              {...club}
              {...club.leaders}
              {...club.partners}
            />
          );
        })}
    </Wrapper>
  );
}

export default ClubContainer;
