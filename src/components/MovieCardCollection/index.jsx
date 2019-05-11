import React from "react";
import "./style.css";
import MovieCard from "../MovieCard";

class MovieCardCollection extends React.Component {
  render() {
    // const { children } = this.props;
    // return <div className="MovieList">{children}</div>;
    const { post, onCardClick } = this.props;

       return (
         <div className="MovieList">
           {post.map(post => (
             <MovieCard
               tittle={post.tittle}
               descr={post.descr}
               rating={post.rating}
               chipsList={post.chipsList}
               key={post.id}
               onClick={() => {
                 onCardClick(post.id);
               }}
             />
           ))}
         </div>
       );

  }
}

export default MovieCardCollection;
