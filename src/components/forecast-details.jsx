import React from 'react';
import moment from 'moment';

import '../styles/forecast-details.css';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="forecast-details__date"><span>Date: {moment(props.forecast.date).format('ddd Do MMM')}</span></div>
    <div className="forecast-details__temp_max"><span>Max Temp: {props.forecast.temperature.max}°C</span></div>
    <div className="forecast-details__temp_min"><span>Min Temp: {props.forecast.temperature.min}°C</span></div>
    <div className="forecast-details__wind_speed"><span>Wind Speed: {props.forecast.wind.speed} mph</span></div>
    <div className="forecast-details__wind_direction"><span>Wind Direction: {props.forecast.wind.direction}</span></div>
    <div className="forecast-details__humidity"><span>Humidity: {props.forecast.humidity}%</span></div>
  </div>
);

export default ForecastDetails;