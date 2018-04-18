import React, { Component } from "react";
import "./App.css";
import Cat from "./Components/Cat.js";
import SpotifyPlayer from "react-spotify-player";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const Title = styled.div`
  background-color: black;
  font-weight: bold;
  color: white;
  margin: auto;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 0.25em solid darkorange;
`;

const Middle = styled.div``;

const Footer = styled.div`
  background-color: black;
  font-weight: bold;
  color: white;
  margin: auto;
  padding: 1em;
  margin-top: 1em;
  border-top: 0.25em solid darkorange;
`;

const Linkage = styled.a`
  color: darkorange;
  text-decoration: none;
`;

const size = {
  width: "60%",
  height: "400"
};
const view = "list";
const theme = "black";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>
          <h2>Tap the Cat</h2>
        </Title>
        <Flex flexWrap="wrap">
          <Box p={3} width={[1, 5 / 7]}>
            <Middle>
              <h3>Cats Meow - Problems Later</h3>
              <Cat />
            </Middle>
          </Box>
          <Box p={3} width={[1, 2 / 7]}>
            <h3>Spotify Player</h3>
            <br />
            <SpotifyPlayer
              uri="https://open.spotify.com/user/scott04069419/playlist/721IDYz5WqovHi4ozx1v36"
              size={size}
              view={view}
              theme={theme}
            />
          </Box>
        </Flex>
        <Footer>
          <p>
            &copy; Daniel McMahon 2018
            <br />
            <br />
            Powered by{" "}
            <Linkage href="https://cataas.com">Cat as a Service</Linkage> &{" "}
            <Linkage href="http://thecatapi.com/">The Cat API</Linkage>
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
