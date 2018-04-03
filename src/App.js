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
`;

const Middle = styled.div``;

const Footer = styled.div`
  background-color: black;
  font-weight: bold;
  color: white;
  margin: auto;
  padding: 1em;
  margin-top: 1em;
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
          <Box p={3} width={[1, 3 / 4]}>
            <Middle>
              <h3>Cats Meow; Problems Later</h3>
              <hr />
              <Cat />
            </Middle>
          </Box>
          <Box p={3} width={[1, 1 / 4]}>
            <h3>Spotify Player</h3>
            <hr />
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
          <p>&copy; Daniel McMahon 2018</p>
        </Footer>
      </div>
    );
  }
}

export default App;
