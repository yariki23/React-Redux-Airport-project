import moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import * as flightsActions from '../../flight.action';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



const DatePicker = ({ getFlights }) => {
  const [date, setDate] = React.useState(sessionStorage.getItem('dateView'));
  const [value, setValue] = React.useState(sessionStorage.getItem('chosePageDate'));

  React.useEffect(() => {
    const pageView = sessionStorage.getItem('chosePageDate');
    if (pageView === null) {
      setValue(2);
    }
    setValue(pageView);
  }, [sessionStorage.getItem('chosePageDate')]);

  const getDate = event => {
    const selectedDate = event.target.value;
    sessionStorage.setItem('dateView', selectedDate);
    setDate(selectedDate);
    getFlights(selectedDate);
  };

  const handleChange = (event, newValue) => {
    sessionStorage.setItem('chosePageDate', newValue);
  };

  return (
    <div className="date-picker">
      <div className="calendar-date-wrap">
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={+value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: '#1eb7ee' } }}
            sx={{
              '& button.Mui-selected': { color: '#1eb7ee' },
            }}
          >
            <Tab
              className="date-picker__picker"
              label={
                <>
                  <span className="date-picker__picker-date">{date}</span>
                  <i className="fa-solid fa-calendar-days"></i>
                  <input type="date" className="date-picker__calendar" onChange={getDate} />
                  <div className="date-picker__protect"></div>
                </>
              }
              disableRipple
            />
            <Tab
              className="date-picker__yesterday"
              onClick={() => {
                sessionStorage.setItem(
                  'dateView',
                  moment().subtract(1, 'days').format('YYYY-MM-DD'),
                );
                setDate(sessionStorage.getItem('dateView'));
                getFlights(moment().subtract(1, 'days').format('DD-MM-YYYY'));
              }}
              label={
                <>
                  <span className="date-picker__date">
                    {moment().subtract(1, 'days').format('DD/MM')}
                  </span>
                  <span className="date-picker__day">ВЧОРА</span>
                </>
              }
              disableRipple
            />
            <Tab
              className="date-picker__today"
              onClick={() => {
                sessionStorage.setItem('dateView', moment().format('YYYY-MM-DD'));
                setDate(sessionStorage.getItem('dateView'));
                getFlights(moment().format('DD-MM-YYYY'));
              }}
              label={
                <>
                  <span className="date-picker__date">{moment().format('DD/MM')}</span>
                  <span className="date-picker__day">СЬОГОДНI</span>
                </>
              }
              disableRipple
            />
            <Tab
              className="date-picker__tomorrow"
              onClick={() => {
                sessionStorage.setItem('dateView', moment().add(1, 'days').format('YYYY-MM-DD'));
                setDate(sessionStorage.getItem('dateView'));
                getFlights(moment().add(1, 'days').format('DD-MM-YYYY'));
              }}
              label={
                <>
                  <span className="date-picker__date">
                    {moment().add(1, 'days').format('DD/MM')}
                  </span>
                  <span className="date-picker__day">ЗАВТРА</span>
                </>
              }
              disableRipple
            />
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

const mapDispatch = {
  getFlights: flightsActions.getFlights,
};

export default connect(null, mapDispatch)(DatePicker);
