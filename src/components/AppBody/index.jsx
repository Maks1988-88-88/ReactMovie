import React from "react";
import v4 from "uuid/v4";
import posts from "../../posts";
import "./style.css";
import MovieCard from "../MovieCard";
import MovieCardCollection from "../MovieCardCollection";
import MovieForm from "../MovieForm";

class AppBody extends React.Component {
  state = {
    post: [...posts]
  };

  onAddNewPost = (tittle, descr, rating) => {
    const newPost = {
      id: v4(),
      chipsList: [],
      descr: descr,
      rating: rating,
      tittle: tittle
    };
    console.log(newPost);
    this.setState({
      post: [...this.state.post, newPost]
    });
  };

  onDeleteCard = id => {
    console.log(id);
    this.setState({
      post: this.state.post.filter(currentPost => currentPost.id !== id)
    });
  };

  render() {
    const { post } = this.state;
    return (
      <div className="App__body">
        <MovieCardCollection>
          {post.map(post => (
            <MovieCard
              tittle={post.tittle}
              descr={post.descr}
              rating={post.rating}
              chipsList={post.chipsList}
              key={post.id}
              onClick={() => {
                this.onDeleteCard(post.id);
              }}
            />
          ))}
        </MovieCardCollection>
        <MovieForm onFormSubmit={this.onAddNewPost} />
      </div>
    );
  }
}

export default AppBody;
