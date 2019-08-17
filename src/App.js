import React from "react";
import classes from "./App.module.css";
import Navigation from "./componenets/Navigation/Navigation";
import Tracks from './componenets/Tracks/Tracks'
import Button from "./componenets/UI/Button/Button";
import { BrowserRouter, Route } from "react-router-dom";
import ls from "local-storage";

const TRACK_PER_PAGE = 6;

class App extends React.Component {
  
  constructor(props) {
    super(props);
    let accessToken = new URLSearchParams(window.location.search).get(
      "access_token"
    );

    if (accessToken != null && accessToken.length > 100)
      ls.set("access_token", accessToken);

    this.state = {
      accessToken: ls.get("access_token") || null,
      loggedIn: ls.get("access_token") ? true : false,
      tracks: [],
      tracksPerPage: [],
      begin: 0,
      end: 6,
      totalPages: 0
    };
  }

  getMyTracks = () => {
    fetch("https://api.spotify.com/v1/me/tracks", {
      headers: {
        Authorization: "Bearer " + this.state.accessToken
      }
    })
      .then(response => response.json())
      .then(data => {
        let totalPages = 0;
        let arr = [];
        if (data.items !== undefined) {
          totalPages = Math.ceil(data.items.length / TRACK_PER_PAGE);
          arr = Array(data.items.length);
          data.items.forEach(el => {
            arr[el.track.id] = "red";
          });
        }
        this.setState({
          tracksPerPage: data.items,
          tracks: data.items,
          saveColorArr: arr,
          totalPages
        });
      });
  };

  saveOrRemoveTrackHandler = (id, accessToken) => {
    let tracks = [...this.state.tracks];
    let newTracks = tracks.filter(el => el.track.id !== id);
    let totalPages = Math.ceil(newTracks.length / TRACK_PER_PAGE);
    
    fetch("https://api.spotify.com/v1/me/tracks?ids=" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
    .then(response => response.json())
    .then(data => {
    })
    .catch(err => console.log("Deleted.", err));
    this.setState({
      tracks: newTracks,
      totalPages
    });
  };

  paginationHandler = (event, data) => {
    let arr = [...this.state.tracks];
    let begin = data.activePage * TRACK_PER_PAGE - TRACK_PER_PAGE;
    let end = data.activePage * TRACK_PER_PAGE;
    let modifiedArr = arr.slice(begin, end);

    console.log("[App] >> paginationHandler >> TRACKS", this.state.tracks);
    console.log("[App] >> paginationHandler >> Array", modifiedArr);
    console.log("[App] >> paginationHandler >> Begin", begin);
    console.log("[App] >> paginationHandler >> End", end);

    this.setState({
      begin,
      end
    });
  };

  render() {
    let tracks = (
      <Tracks
        onClick={this.getMyTracks}
        paginationHandler={this.paginationHandler}
        totalPages={this.state.totalPages}
        begin={this.state.begin}
        end={this.state.end}
        saveOrRemoveTrackHandler={this.saveOrRemoveTrackHandler}
        accessToken={this.state.accessToken}
        loggedIn={this.state.loggedIn}
        tracks={this.state.tracks}
      />
    );

    let loggedIn = this.state.loggedIn;
    
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Navigation
            onClick={this.getMyTracks}
            token={this.state.accessToken}
          />
          <Button loggedIn={loggedIn} />
          <Route
            path="/my-tracks"
            exact
            render={() => tracks} 
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
