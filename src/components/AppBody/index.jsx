import React from "react";
import v4 from "uuid/v4";
import posts from "../../posts";
import "./style.css";
// import MovieCard from "../MovieCard";
import MovieCardCollection from "../MovieCardCollection";
import MovieForm from "../MovieForm";

class AppBody extends React.Component {
  state = {
    post: [...posts]
  };

  // onAddNewPost = text => {
  //   const newPost = {
  //     id: v4(),
  //     text: text
  //   };
  //   this.setState({
  //     post: [...this.state.post, newPost]
  //   });
  // };

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

  // const { tittle, descr, rating, chipsList, onClick } = this.props;

  onDeleteCard = id => {
    console.log(id);
    this.setState({
      post: this.state.post.filter(currentPost => currentPost.id !== id)
    });
  };

  render() {
    // console.log(...posts);
    const { post } = this.state;
    return (
      <div className="App__body">
        <MovieCardCollection post={post} onCardClick={this.onDeleteCard} />
        {/* {post.map(post => (
            <MovieCard {...post} makeClick={this.Click} key={post.id} />
          ))} */}
        {/* </MovieCardCollection> */}
        <MovieForm onFormSubmit={this.onAddNewPost} />
      </div>
    );
  }
}

export default AppBody;
