import React from 'react';
import TableFlight from '../TableFlight/TableFlight';
import DatePicker from '../DatePicker/DatePicker';
import { flightsDataSelector, searchTextSelector } from '../../flight.selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Departure = ({ flightsStore, searchStore }) => {
  const filterFlights = flightsStore.body.departure.filter(
    flights =>
      flights['airportToID.city'].toLowerCase().includes(searchStore) ||
      flights.codeShareData[0].codeShare.toLowerCase().includes(searchStore),
  );
  return (
    <>
      <DatePicker />
      <TableFlight flightsStore={filterFlights} />
    </>
  );
};

Departure.propType = {
  flightsStore: PropTypes.array.isRequired,
  searchStore: PropTypes.string,
};

const mapState = state => {
  return {
    flightsStore: flightsDataSelector(state),
    searchStore: searchTextSelector(state),
  };
};

export default connect(mapState)(Departure);
