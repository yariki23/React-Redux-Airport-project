import React from 'react';
import Header from './components/Header/Header';
import SearchFlightTable from './components/SearchFlightTable/SearchFlightTable';
import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <SearchFlightTable />
    </Provider>
  );
};

export default App;

// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version +
// 4. declare state (what, where) and props +
// 5. write logic
