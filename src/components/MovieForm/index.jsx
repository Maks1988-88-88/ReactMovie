import React from "react";
import v4 from "uuid/v4";
import "./style.css";

class MovieForm extends React.Component {
  render() {
    const ratingScores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const ratingScore = ratingScores.map(rating => (
      <option value={rating} key={v4()}>
        {rating}
      </option>
    ));
    return (
      <form className="MovieForm">
        <label className="MovieForm__label">
          Title
          <input type="text" className="MovieForm__input" />
        </label>
        <label className="MovieForm__label">
          Description
          <textarea className="MovieForm__txtarea" rows="8" />
        </label>
        <label className="MovieForm__label">
          Rating
          <select className="MovieForm__input">{ratingScore}</select>
        </label>
        <button className="MovieForm__submit" type="submit">
          submit
        </button>
      </form>
    );
  }
}


export default MovieForm;
