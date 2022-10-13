import React from 'react';
import FlightScreen from '../FlightScreen/FlightScreen';
import SearchBar from '../SearchBar/SearchBar';

const SearchFlightTable = () => {
  return (
    <section className="flight-search container">
      <h1 className="flight-search__title">ПОШУК РЕЙСУ</h1>
      <SearchBar />
      <FlightScreen />
    </section>
  );
};

export default SearchFlightTable;
