import React from "react";
import "./style.css";

export default class Singlephoto extends React.Component {
  render() {
    return (
      <img
        className="board--singlephoto"
        src={this.props.titleUrl[0]}
        alt={this.props.titleUrl[1]}
      />
    );
  }
}
