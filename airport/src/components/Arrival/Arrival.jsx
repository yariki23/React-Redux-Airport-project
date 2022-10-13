import React from 'react';
import TableFlight from '../TableFlight/TableFlight';
import DatePicker from '../DatePicker/DatePicker';
import { flightsDataSelector, searchTextSelector } from '../../flight.selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Arrival = ({ flightsStore, searchStore }) => {
  const filterFlights = flightsStore.body.arrival.filter(
    flights =>
      flights['airportFromID.city'].toLowerCase().includes(searchStore) ||
      flights.codeShareData[0].codeShare.toLowerCase().includes(searchStore),
  );
  return (
    <>
      <DatePicker />
      <TableFlight flightsStore={filterFlights} />
    </>
  );
};

Arrival.propType = {
  flightsStore: PropTypes.array.isRequired,
  searchStore: PropTypes.string,
};

const mapState = state => {
  return {
    flightsStore: flightsDataSelector(state),
    searchStore: searchTextSelector(state),
  };
};

export default connect(mapState)(Arrival);
