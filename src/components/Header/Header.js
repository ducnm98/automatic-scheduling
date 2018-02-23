import React, { Component } from 'react';
import s from './Header.css';


class Header extends Component {
    render() {
        return (
            <div className={s.root}>
                <h1>Header</h1>
            </div>
        );
    }
}

export default Header;