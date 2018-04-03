# Cat Service

This project is setup for experimentation with the Express library and API communications.
The service uses [The Cat API](http://thecatapi.com/) running via a Node/[Express](https://expressjs.com/) frontend for backend solution.

Due to the use of Express this service has been deployed via [Heroku](https://www.heroku.com/) as a free hosting solution. The services is auto deployed everytime the master branch is updated.

The service currently allows the user to click an image and view a new Cat. The frontend is displayed on a basic [React](https://reactjs.org/) frontend. An additional Spotify player has been included with random cat ASMR tracks. (generated using the [react-spotify-player](https://www.npmjs.com/package/react-spotify-player) library)

![Screenshot](/screenshots/mobile-screenshot.png)

## Running Locally

You will need to build the app locally and run straight from the build. A proxy is setup in the package.json that should allow for service to auto forward to port 8080:

```
npm run build
npm run start
```

An additional debugging option is available at `npm run dev`. Note that calls to the server will not function correctly in this mode.

## Further Applications Ideas

* Integration of music/playlist

  * Provided Suggestion: [Spotify Link](https://open.spotify.com/user/scott04069419/playlist/721IDYz5WqovHi4ozx1v36) ✔ Completed

* Improved UI layout & design

  * Integration of [Grid-Styled](https://github.com/jxnblk/grid-styled) library ✔ Completed
  * Integration of [React-Bootstrap](https://react-bootstrap.github.io/components/navbar/) Navbar
  * Footer: Credits to APIs & Services Used

* Additional Components

  * Multiple random images displayed at once
  * Carousel options

* Hosting
  * Host publically -> due to local server an alternate free service to Github Pages required (Heroku perhaps...) ✔ Completed
