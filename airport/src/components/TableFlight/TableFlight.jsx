import React from 'react';
import moment from 'moment';

const TableFlight = ({ flightsStore }) => {
  return (
    <>
      <table className="tabs">
        <thead>
          <tr className="tabs__titles">
            <th className="tabs__title">Термінал</th>
            <th className="tabs__title">Розклад</th>
            <th className="tabs__title">Напрямок</th>
            <th className="tabs__title">Статус</th>
            <th className="tabs__title">Авіакомпанія</th>
            <th className="tabs__title">Рейс</th>
          </tr>
        </thead>

        <tbody>
          {flightsStore.map(flight => (
            <tr className="tabs__row" key={flight.ID}>
              <td className="tabs__column">
                <span
                  className={`tabs__terminal ${flight.term === 'D' ? 'tabs__terminal_blue' : ''}`}
                >
                  {flight.term}
                </span>
              </td>
              <td className="tabs__column">{moment(flight.actual).format('HH:mm')}</td>
              <td className="tabs__column">
                {' '}
                {flight['airportToID.name'] || flight['airportFromID.name']}
              </td>
              <td className="tabs__column">{flight.status}</td>
              <td className="tabs__column">
                <img className="tabs__img" src={`https://api.iev.aero/${flight.logo}`} alt="logo company" />
                <span className="tabs__company">{flight.airline.en.name}</span>
              </td>
              <td className="tabs__column">{flight.codeShareData[0].codeShare}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {flightsStore.length === 0 && <h3 className='notFlight'>Немає рейсів</h3>}
    </>
  );
};

export default TableFlight;
