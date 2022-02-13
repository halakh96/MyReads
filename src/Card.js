import React, { Component } from "react";
import { updateBook } from "./Api";
import { Link } from "react-router-dom";
import "./App.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "move" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    console.log(e.target.value, "'selected option'");
    console.log(this.props.id, "'book id'");
    updateBook(this.props.id, e.target.value).then((res) => {
      console.log(res);
    });

   
  };

  render() {
    console.log(this.props.info,"link of book");
    return (
      <div className="book">
        <div className="book-position">
          <div className="book-cover">
            <img src={this.props.img}></img>
          </div>
          <div className="shelf-shfiter">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-author">{this.props.authors.join(" , ")}</div>
        <Link className="book-info" to={this.props.info}>more info</Link>
      </div>
    );
  }
}
