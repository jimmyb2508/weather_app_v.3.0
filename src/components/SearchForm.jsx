import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const { onSearch } = this.props;
    const { searchText } = this.state;
    return (
      <div className="search-field">
        <form>
          <label>
            <input
              type="text"
              id="city-country-search"
              name="city-country-search"
              onChange={this.handleInputChange}
              value={this.state.searchText}
              placeholder="Enter City Name Here..."
            />
            <button
            onClick={e => onSearch(e, searchText)}
            className="search-button"
            type="submit">
            Search</button>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchForm;