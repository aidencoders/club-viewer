import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import ClubContainer from "../ClubContainer";
import Header from "../Header";
import SearchForm from "../SearchForm";

type Name = {
  name: string;
};

export type ClubInfo = {
  club?: {
    coverUrl?: string;
    description?: string;
    id?: string;
    name?: string;
    place?: string;
    type?: string;
  };
  leaders?: Name[];
  partners?: Name[];
};

function App() {
  const [clubs, setClubs] = useState<ClubInfo[]>([]);

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

  return (
    <>
      <Header />
      <SearchForm />
      <Route path="/clubs">
        <ClubContainer clubs={clubs} />
      </Route>
      <Route path="/">
        <Redirect to="clubs" />
      </Route>
    </>
  );
}

export default App;
