import React, { SyntheticEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";

//***************************************************************** */
const profilePicture =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png";

const AppContainer = styled.section`
  padding: 2rem;
  font-size: 56px;
`;

const Search = styled.input`
  padding: 1rem;
  font-size: 48px;
  width: 50%;
  margin: 0px auto;
  margin-top: 5rem;
  text-align: center;
  display: block;
  border: 2px solid gray;
  box-shadow: 4px 4px 3px gray;
`;

const PatientCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0px auto;
  width: 50%;
  height: 150px;
  border-radius: 15px;
  margin-top: 3rem;
  box-shadow: 2px -2px 1px gray;
  border: 1px solid gray;
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 999px;
  margin: auto;
  opacity: 0.6;
`;

const PatientDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0px;
`;

const PatientID = styled.h6`
  color: gray;
  margin: 0px;
`;

const PatientName = styled.h5`
  margin: 0px;
  color: slategray;
`;

const App = () => {
  interface Patient {
    id: string;
    name: string;
  }

  const patients: Patient[] = [
    {
      id: "2934t43j29gj3j49t3",
      name: "Haroon"
    },
    {
      id: "ht3j4h3jughgj424g",
      name: "McDonald"
    },
    {
      id: "oajgroiqejb203j4",
      name: "Jeremiah"
    }
  ];

  const initialState: Patient[] = [];

  const [searchResults, setSearchResults] = useState(initialState);

  const handleSearch = (e: SyntheticEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    const results = patients.filter(
      patient => patient.name.match(RegExp(searchValue, "i")) != null
    );
    setSearchResults(searchValue == "" ? [] : results);
  };

  return (
    <AppContainer>
      <Search
        type="text"
        onKeyUp={handleSearch}
        placeholder="Search Patient Name or ID"
      />
      {searchResults.map(patient => (
        <Patient id={patient.id} name={patient.name} />
      ))}
    </AppContainer>
  );
};

interface PatientProps {
  id: string;
  name: string;
}

const Patient: FunctionComponent<PatientProps> = props => {
  return (
    <PatientCard>
      <ProfilePic src={profilePicture} />
      <PatientDetails>
        <PatientID>{props.id}</PatientID>
        <PatientName>{props.name}</PatientName>
      </PatientDetails>
    </PatientCard>
  );
};

// const SearchBar = () => {
//   return (
//     <Search
//       type="text"
//       onKeyUp={handleSearch}
//       placeholder="Search Patient Name or ID"
//     />
//   );
// };

export default App;
