import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchBook } from "./Api";
import Card from "./Card";
import "./App.css";

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchBookArr: [], inputValue: "" };
  }

  submitHandler = (e) => {
    e.preventDefault();
    searchBook(this.state.inputValue).then((res) => {
      this.setState({ searchBookArr: res });
      console.log(this.state.searchBookArr, "arr");
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
            <div className="shelf-books">
              <ol className="books-box">
                {this.state.searchBookArr.map((book, index) => {
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
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
