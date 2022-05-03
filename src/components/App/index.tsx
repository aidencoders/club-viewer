import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ClubContainer from "../ClubContainer";
import ClubDetail from "../ClubDetail";
import Header from "../Header";
import SearchForm from "../SearchForm";

export type ClubInfo = {
  club?: {
    coverUrl?: string;
    description?: string;
    id?: string;
    name?: string;
    place?: string;
    type?: string;
  };
  leaders?: string[];
  partners?: string[];
};

function App() {
  const [clubs, setClubs] = useState<ClubInfo[]>([]);
  const [selectedClub, setSelectedClub] = useState();

  useEffect(() => {
    const getClubData = async () => {
      const { data } = await axios.get<ClubInfo[], AxiosResponse<ClubInfo[]>>(
        "https://api.json-generator.com/templates/ePNAVU1sgGtQ/data?",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        },
      );

      setClubs(data);
    };

    getClubData();
  }, []);

  function handleClubClick(club: any) {
    setSelectedClub(club);
    console.log(club);
    console.log(selectedClub);
  }

  return (
    <>
      <Header />
      <SearchForm />
      <Switch>
        <Route exact path="/clubs">
          <ClubContainer clubs={clubs} onClick={handleClubClick} />
        </Route>
        <Route exact path="/clubs/:clubId">
          <ClubDetail club={selectedClub} />
        </Route>
        <Route exact path="/">
          <Redirect to="clubs" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
