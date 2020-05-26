import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

import '../styles/forecast-summary.css';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="forecast-summary__date"><span>{moment(props.date).format('ddd Do MMM')}</span></div>
    <div className="forecast-summary__temperature"><span>{props.temperature}°C</span></div>
    <div className="forecast-summary__description"><span>{props.description}</span></div>
    <div className="forecast-summary__icon"><span><WeatherIcon className="icon" name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></span></div>
    <div><button className="more-details-butt" onClick={() => props.onSelect(props.date)}>More Details</button></div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.string,
  temperature: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

WeatherIcon.propTypes = {
  name: PropTypes.string,
}


export default ForecastSummary;