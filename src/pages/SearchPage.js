import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchBook } from "../Api";
import Card from "../components/Card";
import "../App.css";

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchBookArr: [],
       inputValue: "",
       notFoundBook: false };
  }

  submitHandler = (e) => {
    e.preventDefault();
    searchBook(this.state.inputValue).then((res) => {
      console.log(res,"res");
      this.setState({notFoundBook: false}) 
      if (res.error == "empty query"){
        this.setState({notFoundBook: true})
        }
        else {
      this.setState({ searchBookArr: res });
      console.log(this.state.searchBookArr, "arr");
        }
    });
  
  };

  searchHandler = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className="main">
        <div className="search-container">
          <div className="search-container-bar">
            <Link to="/">
              <button
                className="close-btn-bar"
              >
                Close
              </button>
            </Link>
            <form className="input-wrapper" onSubmit={this.submitHandler}>
              <input
                type="text"
                placeholder="Search..."
                value={this.state.inputValue}
                onChange={this.searchHandler}
              />
            </form>
          </div>
          <div className="search-results">
              <ol className="books-box">
              {this.state.notFoundBook ? (<h1 className="notFound">Sorry .. No Books Available</h1>):(this.state.searchBookArr.map((book, index) => {
                  return (
                    <li>
                      <Card
                        key={index}
                        title={book.title}
                        authors={book.authors}
                        img={book.imageLinks.thumbnail}
                        id={book.id}
                        shelf={book.shelf}
                        info={book.infoLink}
                      />
                    </li>
                  );
                }))}  
              </ol>
          </div>
        </div>
      </div>
    );
  }
}
