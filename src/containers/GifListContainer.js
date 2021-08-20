import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    gifs: [],
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/search?q=coding&api_key=dc6zaTOxFJmzC&rating=g")
      .then(response => response.json())
      .then(object => {
        this.setState({
          gifs: [object.data[0], object.data[1], object.data[2]]
        }, () => console.log(this.state))
      })
  }

  fetchGIFs = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(object => {
        this.setState({
          gifs: [object.data[0], object.data[1], object.data[2]]
        }, () => console.log(this.state))
      })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch fetchGIFs={this.fetchGIFs}/>
      </div>
    )
  }
}
