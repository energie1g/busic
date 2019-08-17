import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosHeart } from 'react-icons/io';
import { FaMusic, FaSearch } from "react-icons/fa";
import NavItem from './NavItem/NavItem';
import classes from './Navigation.module.css';


const Navigation = (props) => {

    return (
        <header>
            <div className={classes.Navigation}>
                <nav>
                    <NavItem to="/" name="Busic" textColor='#45CB85' backgroundColor='black'>
                        <IconContext.Provider value={{color: '#45CB85'}}>
                            <FaMusic />
                        </IconContext.Provider>
                    </NavItem>
                    <NavItem to="/browse" name="Browse">
                        <FaSearch />
                    </NavItem>
                    <NavItem to="/my-tracks" onClick={props.onClick} name="My Tracks">
                        <IoIosHeart />
                    </NavItem>
                </nav>
            </div>
        </header>
    );

}

export default Navigation;