import React, { Component, SyntheticEvent } from "react";
import styled from "styled-components";

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

const App = () => {
  return (
    <AppContainer>
      <SearchBar />
    </AppContainer>
  );
};

const handleSearch = (e: SyntheticEvent<HTMLInputElement>) => {
  const searchValue = e.currentTarget.value;
  const results = patients.filter(
    patient => patient.name.match(/jere/i) != null
  );
  console.log(results);
};

const SearchBar = () => {
  return (
    <Search
      type="text"
      onKeyUp={handleSearch}
      placeholder="Search Patient Name or ID"
    />
  );
};

export default App;
