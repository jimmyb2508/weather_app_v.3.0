import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './SearchForm';
import Axios from 'axios';

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
    });
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
    });
  };


  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);


    return (
  <div className="forecast">
      <LocationDetails
        city={this.state.location.city} 
        country={this.state.location.country} 
      />

      <SearchForm onSearch={this.handleCityRequest} />

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