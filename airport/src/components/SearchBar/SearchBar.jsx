import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as flightsActions from '../../flight.action';
import moment from 'moment';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ getFlights, searchFlight }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const flightsQuery = searchParams.get('flights') || '';
  const [search, setSearch] = useState(flightsQuery);

  useEffect(() => {
    if (sessionStorage.getItem('dateView') == null) {
      getFlights(moment().format('DD-MM-YYYY'));
    }
    getFlights(sessionStorage.getItem('dateView'));
  }, []);

  useEffect(() => {
    searchFlight(flightsQuery);
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.search.value;

    setSearchParams({ flights: query });
  };

  return (
    <div className="flight-search__search">
      <form action="" autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          className="flight-search__input"
          placeholder="Номер рейсу або мiсто"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input type="submit" className="flight-search__btn" value="ЗНАЙТИ" />
      </form>
    </div>
  );
};

const mapDispatch = {
  getFlights: flightsActions.getFlights,
  searchFlight: flightsActions.searchFlight,
};

export default connect(null, mapDispatch)(SearchBar);
