import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Title = styled.div`
  background-color: black;
  font-weight: bold;
  color: white;
  margin: auto;
  padding: 2em;
  margin-bottom: 1em;
`;
const CatPic = styled.img`
  margin: auto;
  padding: 50px;
  background-color: black;
  max-width: 50vw;
  max-height: 50vh;
  margin-bottom: 1em;
`;

class Cat extends Component {
  constructor() {
    super();
    this.state = {
      url:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
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
        <Title>
          <h2>Heres a random cat!</h2>
        </Title>
        <button onClick={this.getCat}>New Cat</button>
        <br />
        <br />
        <CatPic src={this.state.url} />
      </div>
    );
  }
}

export default Cat;
