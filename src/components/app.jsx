import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './SearchForm';
import Axios from 'axios';

import '../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      }
    };

    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  };

  componentDidMount() {
    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast`).then(response => {
      this.setState({
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
        forecasts: response.data.forecasts,
      });
    })
  };

  handleCityRequest = (e, city) => {
    e.preventDefault();

    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`).then(response => {
      this.setState({
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
        forecasts: response.data.forecasts,
      });
    }).catch(error => {
      if(404){
        this.setState({
          location: {
            city: 'City Not Found',
            country: 'Try Again!'
          }
        });
      } else if (500){
        this.setState({
          location: {
            location: {
              city: 'Server Error',
              country: 'Test Connection!'
            }
          }
        })
      }
    });
  };


  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);


    return (
      <div className="forecast">
        <h1>WEATHER</h1>
        <h2>FIVE DAY FORECAST</h2>
        <LocationDetails
          city={this.state.location.city} 
          country={this.state.location.country} 
        />

        <div className="search-bar">
          <SearchForm onSearch={this.handleCityRequest} />
        </div>

        <ForecastSummaries 
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        
      </div>
    );
  }
};

export default App;