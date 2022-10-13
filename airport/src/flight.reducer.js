import { SHOW_FLIGHT, SEARCH_FLIGHT } from './flight.action';

const initialData = {
  flightsList: {
    body: {
      departure: [],
      arrival: [],
    },
  },
};
const initialSearchText = {
  searchText: '',
};

export const flightsReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_FLIGHT: {
      return {
        ...state,
        flightsList: action.payload.flightData,
      };
    }
    default:
      return state;
  }
};
export const searchReducer = (state = initialSearchText, action) => {
  switch (action.type) {
    case SEARCH_FLIGHT: {
      return {
        ...state,
        searchText: action.payload.textSearch.toLowerCase(),
      };
    }
    default:
      return state;
  }
};
