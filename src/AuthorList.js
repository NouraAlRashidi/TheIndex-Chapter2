import React, { Component } from "react";
import authors from "./data";
import AuthorCard from "./AuthorCard"


class AuthorList extends Component {
  render(){
    const OurAuthor = authors.map ((author) => <AuthorCard key = {author.first_name} author = {author}/>);

    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">
            {OurAuthor}

          </div>
        </div>


    );
  }
}

export default AuthorList;
