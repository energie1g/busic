import React, { Component } from "react";
import classes from "./Tracks.module.css";
import Track from "./Track/Track";
import defaultImg from "../../assets/images/default.png";
import { Pagination } from 'semantic-ui-react'

export default class Tracks extends Component {

  render() {
    let tracks = null;

    if (this.props.loggedIn && this.props.tracks !== undefined && this.props.tracks.length !== 0) {
      tracks = (
        <div className={classes.Loader}>
          <div />
        </div>
      );
    }

    if (this.props.tracks !== undefined && this.props.tracks.length !== 0) {
      let beforeTracks;

      if(this.props.begin === 0) {
          beforeTracks = this.props.tracks.slice(0, 6);
      } else {
            beforeTracks =  this.props.tracks.slice(this.props.begin, this.props.end);
      }

        console.log('TRACKS PER PAGE >> ', this.props.tracksPerPage);
        
      //   let beforeTracks = this.props.tracks.slice();
      tracks = beforeTracks.map((el, ind) => {
        let image = el.track.album.images;
        let src = image ? image[0].url : defaultImg;
        let trackName = el.track.name;
        let alt = el.track.name;
        let artistName = el.track.artists[0].name;
        let audioSrc = el.track.preview_url;
        let id = el.track.id;

        return (
          <Track
            audioSrc={audioSrc}
            key={id}
            index={(ind + 1)}
            src={src}
            onClick={() =>
              this.props.saveOrRemoveTrackHandler(id, this.props.accessToken)
            }
            trackName={trackName}
            artistName={artistName}
            alt={alt}
          />
        );
      });
    }

    return (
      <div className={classes.TracksContainer}>
        <div className={classes.Tracks}>
          {tracks}
        </div>
        {
          this.props.loggedIn && this.props.tracks !== undefined && this.props.tracks.length !== 0 && this.props.totalPages > 1 
          ? <div className={classes.Pagination}>
            <Pagination 
                defaultActivePage={1} 
                onPageChange={this.props.paginationHandler}
                totalPages={this.props.totalPages} />
            </div>
          : null
        }
      </div>
    );
  }
}
