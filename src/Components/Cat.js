import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const CatPic = styled.img`
  margin: auto;
  background-color: white;
  max-width: 60vw;
  max-height: 60vh;
  margin: 2em;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  border: 0.2em solid lightgrey;
`;

class Cat extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://cataas.com/cat" //default image - calling another cat api!
    };
    this.getCat = this.getCat.bind(this);
  }

  getCat() {
    axios
      .get("/cat")
      .then(data => this.setState({ url: data.data }))
      .catch(data => console.log(data));
  }

  showCat() {
    axios
      .get("/cat")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <CatPic src={this.state.url} onClick={this.getCat} />
        <div />
      </div>
    );
  }
}

export default Cat;
