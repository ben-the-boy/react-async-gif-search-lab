import React, { Component } from "react";

export default class GifList extends Component {

  createGifLis = () =>
    this.props.gifs.map(gif => <li><img src={gif.images.original.url} alt=""/></li>);
  

  render() {
    return <ul>{this.createGifLis()}</ul>
  }
}
