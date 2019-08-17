import React from "react";
import { FaSpotify } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Button.module.css";
import { IoIosHeartEmpty } from "react-icons/io";

const LOGIN_PAGE = "http://localhost:8888/login";

const Button = props => {
  return ( !props.loggedIn &&
    <div className={classes.Welcome}>
      <div className={classes.Title}>
        <div>
          Login with your spotify account, and control your playlists and
          libraries easily.
        </div>
        <div className={classes.Love}>
          <IoIosHeartEmpty />
        </div>
      </div>
      <a href={LOGIN_PAGE} className={classes.loginBtn}>
        {/* <div className={classes.btnContainer}> */}
          <div className={classes.InsideLoginBtn}>
            <span className={classes.Login}>Login</span>
            <span>
              <IconContext.Provider value={{ className: classes.Icon }}>
                <FaSpotify />
              </IconContext.Provider>
            </span>
          </div>
        {/* </div> */}
      </a>
    </div>
  );
};

export default Button;
