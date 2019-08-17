import React, { Component } from 'react';
import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom'

export default class NavItem extends Component {

    styles = {
        color: this.props.textColor,
        backgroundColor: this.props.backgroundColor
    };
    
    render() {
        return <NavLink onClick={this.props.onClick} tabIndex="1" activeClassName={classes.Active} className={classes.Container} to={this.props.to} style={this.styles} >
                    <div className={classes.NavItem}>
                        <span className={classes.Icon}>
                            <div>
                                {this.props.children}
                            </div>
                        </span>
                        <span className={classes.NavName}>{this.props.name}</span>
                    </div>
                </NavLink>
    }

}