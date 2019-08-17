import React from "react";
import classes from "./TrackPlayer.module.css";
import { IconContext } from "react-icons";
import { IoIosHeartDislike, IoIosSad } from "react-icons/io";
import ReactTooltip from 'react-tooltip';

const TrackPlayer = props => {

  let SaveTrack = (
    <div onClick={props.onClick} className={classes.SaveTrack}>
        <IconContext.Provider data-tip data-for='remove' value={{ color: props.SaveTrackColor }}>
          <IoIosHeartDislike />
        </IconContext.Provider>
      <ReactTooltip id="remove" type="warning" effect="solid">
          remove a song from your favorite tracks
      </ReactTooltip>
    </div>
  );

  return typeof props.audioSrc === "string" 
  ? (
        <div className={classes.AudioPlayer}>
        <audio className={classes.Audio} controls src={props.audioSrc} />
        {SaveTrack}
        </div>
    ) 
  : (
        <div className={classes.NoPreview}>
        <div className={classes.NoPreviewNotice}>
            <p>
            No preview found. <IoIosSad />
            </p>
        </div>
        {SaveTrack}
        </div>
    );
};

export default TrackPlayer;
