import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Arrival from '../Arrival/Arrival';
import Departure from '../Departure/Departure';

const Navigation = () => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);

  return (
    <>
      <div className="flight-search__nav">
        <NavLink
          className={() => {
            return isActiveBtn
              ? 'flight-search__btn-departure active-nav'
              : 'flight-search__btn-departure';
          }}
          onClick={() => setIsActiveBtn(true)}
          to="/"
        >
          <i className="fa-solid fa-plane-departure"></i> ВИЛІТ
        </NavLink>
        <NavLink
          className={() => {
            return !isActiveBtn
              ? 'flight-search__btn-arrival active-nav'
              : 'flight-search__btn-arrival';
          }}
          onClick={() => setIsActiveBtn(false)}
          to="/arrival"
        >
          ПРИЛІТ <i className="fa-solid fa-plane-arrival"></i>
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Departure />} />
        <Route path="/arrival" element={<Arrival />} />
      </Routes>
    </>
  );
};

export default Navigation;
