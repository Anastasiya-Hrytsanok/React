import { Component } from 'react';
import logo from './images/Lays-Logo.png';
import './component.css';

class Header extends Component {
    render() {
        return (<div className="header">
            <img id="logo" src={logo} alt="LaysLogo" />
            <div>
                <a href="">History</a>
                <a href="">Career</a>
                <a href="">Results</a>
                <button>Log in</button>
            </div>
        </div>)
    };
}

export default Header;
