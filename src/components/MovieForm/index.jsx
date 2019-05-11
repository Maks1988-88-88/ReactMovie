import React from "react";
// import PropTypes from "prop-types";
import v4 from "uuid/v4";
import "./style.css";

class MovieForm extends React.Component {
  // static PropTypes = {
  //   onFormSubmit: PropTypes.func.isRequired
  // };
  state = {
    inputTitleValue: "",
    inputDescriptionValue: "",
    inputRatingValue: ""
  };

  _handleInputChangeTitle = evt => {
    const value = evt.target.value;
    this.setState({
      inputTitleValue: value
    });
  };
  _handleInputChangeDescription = evt => {
    const value = evt.target.value;
    this.setState({
      inputDescriptionValue: value
    });
  };
  _handleInputChangeInputRatingValue = evt => {
    const value = evt.target.value;
    this.setState({
      inputRatingValue: value
    });
  };

  _handleSubmit = evt => {
    evt.preventDefault();
    this.props.onFormSubmit(
      this.state.inputTitleValue,
      this.state.inputDescriptionValue,
      this.state.inputRatingValue
    );
    this.setState({
      inputTitleValue: "",
      inputDescriptionValue: "",
      inputRatingValue: ''
    });
  };

  render() {
    const {
      inputTitleValue,
      inputDescriptionValue,
      inputRatingValue
    } = this.state;
    const ratingScores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const ratingScore = ratingScores.map(rating => (
      <option value={rating} key={v4()}>
        {rating}
      </option>
    ));
    return (
      <form className="MovieForm" onSubmit={this._handleSubmit}>
        <label className="MovieForm__label">
          Title
          <input
            type="text"
            className="MovieForm__input"
            value={inputTitleValue}
            onChange={this._handleInputChangeTitle}
          />
        </label>
        <label className="MovieForm__label">
          Description
          <textarea
            className="MovieForm__txtarea"
            rows="8"
            type="text"
            value={inputDescriptionValue}
            onChange={this._handleInputChangeDescription}
          />
        </label>
        <label className="MovieForm__label">
          Rating
          <select
            className="MovieForm__input"
            value={inputRatingValue}
            onChange={this._handleInputChangeInputRatingValue}
          >
            {ratingScore}
          </select>
        </label>
        <button className="MovieForm__submit" type="submit">
          submit
        </button>
      </form>
    );
  }
}

export default MovieForm;
