import React from 'react';
import classes from './TrackInfo.module.css';

const TrackInfo = (props) => {

    return (
        <div className={classes.TrackInfo}>
            <div className={classes.TrackInfoImg}>
                <img src={props.src} alt={props.alt} />
            </div>
            <div className={classes.TrackInfoInfo}>
                <span>{props.trackName}</span>
                <span>{props.artistName}</span>
            </div>
        </div>
    )

}

export default TrackInfo;