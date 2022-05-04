import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { Link, useLocation } from "react-router-dom";

import Club from "../Club";

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

function ClubContainer({ clubs, onClick }: any) {
  const location = useLocation();

  return (
    <Wrapper>
      {clubs &&
        clubs.map((club: any) => {
          const key = club.club?.id;
          return (
            <Link
              key={key}
              to={{
                pathname: `${location.pathname}/${key}`,
                state: { background: location },
              }}
            >
              <Club
                key={nanoid()}
                {...club}
                {...club.leaders}
                {...club.partners}
                onClick={onClick}
              />
            </Link>
          );
        })}
    </Wrapper>
  );
}

export default ClubContainer;
