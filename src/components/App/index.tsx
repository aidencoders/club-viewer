import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import ClubContainer from "../ClubContainer";
import ClubDetail from "../ClubDetail";
import Header from "../Header";
import Modal from "../Modal";
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
  const [isShowModal, setIsShowModal] = useState(false);
  const history = useHistory();

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
    setIsShowModal(true);
  }

  function handleModalClose() {
    setIsShowModal(!isShowModal);
    history.push("/clubs");
  }

  return (
    <>
      <Header />
      <SearchForm />
      <Route path="/clubs">
        <ClubContainer clubs={clubs} onClick={handleClubClick} />
      </Route>
      <Route path="/clubs/:clubId">
        <Modal opened={isShowModal} onClick={handleModalClose}>
          <ClubDetail club={selectedClub} />
        </Modal>
      </Route>
      <Route path="/">
        <Redirect to="clubs" />
      </Route>
    </>
  );
}

export default App;
