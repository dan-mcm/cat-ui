# Cat Service

This project is setup for experimentation with the Express library and API communications.
The service uses [The Cat API](http://thecatapi.com/) running via a Node/[Express](https://expressjs.com/) frontend for backend solution.

The service currently allows the user to click a button and view a new Cat image displayed on a basic [React](https://reactjs.org/) frontend.

![Random Cat](https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350)

## Running Locally

To run the main application locally:

```
npm run start
```

To run the main server locally:

```
node server.js
```

You may also opt to build the app locally and run straight from that. A proxy is setup in the package.json that should allow for service to auto forward to port 8080:

```
npm run build
```


## Further Applications Ideas

- Integration of music/playlist
  - Provided Suggestion: [Spotify Link](https://open.spotify.com/user/scott04069419/playlist/721IDYz5WqovHi4ozx1v36)

- Improved UI layout & design
  - Integration of [Grid-Styled](https://github.com/jxnblk/grid-styled) library
  - Integration of [React-Bootstrap](https://react-bootstrap.github.io/components/navbar/) Navbar
  - Footer: Credits to APIs & Services Used

- Additional Components
  - Multiple random images displayed at once
  - Carousel options

- Hosting
  - Host publically -> due to local server an alternate free service to Github Pages required (Heroku perhaps...)
