import React, { Component } from 'react';
import classes from './Track.module.css';
import TrackInfo from './TrackInfo/TrackInfo';
import TrackPlayer from './TrackPlayer/TrackPlayer';
// import { ReactToolTip } from 'react-tooltip';

export default class Track extends Component {
    
    render() {
    
        return (
            <div className={classes.Track}>
                <div className={classes.Index}>
                    {this.props.index} .
                </div>
                <div className={classes.TrackInfo}>
                    <TrackInfo src={this.props.src} 
                        trackName={this.props.trackName}
                        artistName={this.props.artistName} 
                        alt={this.props.alt} />
                </div>
                <TrackPlayer audioSrc={this.props.audioSrc} 
                            onClick={this.props.onClick} 
                            SaveTrackColor={this.props.SaveTrackColor} />                
            </div>
        )

    }

}