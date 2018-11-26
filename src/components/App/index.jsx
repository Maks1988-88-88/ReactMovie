import React from "react";
import "./style.css";
import Header from "../Header/index";
import AppBody from "../AppBody/index";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header headerLogo="Movie Mate" />
        <AppBody />
      </div>
    );
  }
}

export default App;
