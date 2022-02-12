import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllBooks } from "./Api";
import Card from "./Card";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  componentDidMount() {
    getAllBooks().then((res) => {
      this.setState({ books: res });
    });
  }
  
  render() {
    console.log(this.state.books, "all books");
    return (
      <div>
        <div className="books-list">
          <div className="books-list_title">
            <h1>NReads</h1>
          </div>
          <div className="books-list_content">
            <div>
              <div className="shelf">
                <h2 className="shelf-title">Currently Reading</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    {this.state.books
                      .filter((book) => book.shelf == "currentlyReading")
                      .map((book, index) => {
                        console.log(book, index);
                        console.log(book.authors);
                        console.log(book.imageLinks.thumbnail);
                        console.log(book.id);
                        console.log(book.shelf);
                        return (
                          <li>
                            <Card
                              key={index}
                              title={book.title}
                              authors={book.authors}
                              img={book.imageLinks.thumbnail}
                              id={book.id}
                              shelf={book.shelf}
                            />
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </div>
              <div className="shelf">
                <h2 className="shelf-title">Want to Read</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    {this.state.books
                      .filter((book) => book.shelf == "wantToRead")
                      .map((book, index) => {
                        console.log(book, index);
                        console.log(book.authors);
                        console.log(book.imageLinks.thumbnail);
                        console.log(book.id);
                        console.log(book.shelf);
                        return (
                          <li>
                            <Card
                              key={index}
                              title={book.title}
                              authors={book.authors}
                              img={book.imageLinks.thumbnail}
                              id={book.id}
                              shelf={book.shelf}
                            />
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </div>
              <div className="shelf">
                <h2 className="shelf-title">Read</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    {this.state.books
                      .filter((book) => book.shelf == "read")
                      .map((book, index) => {
                        console.log(book, index);
                        console.log(book.authors);
                        console.log(book.imageLinks.thumbnail);
                        console.log(book.id);
                        console.log(book.shelf);
                        return (
                          <li>
                            <Card
                              key={index}
                              title={book.title}
                              authors={book.authors}
                              img={book.imageLinks.thumbnail}
                              id={book.id}
                              shelf={book.shelf}
                            />
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="search-btn">
            <Link to="/SearchPage">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}