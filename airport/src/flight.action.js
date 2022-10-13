import { getFlightsData } from './flight.gateway';

export const SHOW_FLIGHT = 'SHOW_FLIGHT';
export const SEARCH_FLIGHT = 'SEARCH_FLIGHT';

export const showFlight = flightData => {
  return {
    type: SHOW_FLIGHT,
    payload: {
      flightData,
    },
  };
};

export const searchFlight = textSearch => {
  return {
    type: SEARCH_FLIGHT,
    payload: {
      textSearch,
    },
  };
};

export const getFlights = data => {
  return function (dispatch) {
    getFlightsData(data).then(flightData => {
      dispatch(showFlight(flightData));
    });
  };
};
