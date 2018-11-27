import React from "react";
import v4 from "uuid/v4";
import posts from "../../posts";
import "./style.css";
import MovieCard from "../MovieCard";
import MovieCardCollection from "../MovieCardCollection";
import MovieForm from "../MovieForm";


class AppBody extends React.Component {
  render() {
    return <div className="App__body">
        <MovieCardCollection>
          {posts.map(post => <MovieCard {...post} key={v4()} />)}
        </MovieCardCollection>
        <MovieForm />
      </div>;
  }
}



export default AppBody;
