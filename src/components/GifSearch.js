import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    search: "",
  }

  handleOnChange = event => {
    this.setState({
      search: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.search);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Search for a gif:
        <input type="text" value={this.state.search} onChange={this.handleOnChange}/>
        <input type="submit" value="Find gifs"/>
      </form>
    )
  }
}
