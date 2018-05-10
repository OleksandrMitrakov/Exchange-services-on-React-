import React, {Component} from 'react';
import '../.././sass/main.css';
import logo from '../../images/logo.png'
import profileIcon from '../../images/profile_icon.png'
import exitProfileIcon from '../../images/exitProfile.png'
import chatIcon from '../../images/chatIcon.png'
import {
    Redirect
} from 'react-router-dom';

class NavLine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectBack: false
        };
    }

    goToWelcomePage = () => {

        if (typeof this.props.changeActivePage === 'function') {
            this.props.changeActivePage(1)
        }
        this.setState({
            redirectBack: true
        })
    };

    render() {

        if (this.state.redirectBack)
            return <Redirect to="/"/>;

        return (
            <div>
                <div className="navLine">
                    <nav className="clearfix container">
                        <img src={logo} className="navLineLogo"/>
                        <span className="logoNameMain">Super fachowca</span>
                        <ul className="menu">
                            <li><a>Wszyskie oferty</a></li>
                            <li><a>Wszysztkie zapytania</a></li>
                            <li>
                                <span className="profileAsideLines"> </span>
                                <img src={profileIcon} className="menuProfileIcon"/>
                                <span><a>Mój Profil</a></span>
                                <ul className="dropMenu">
                                    <li><a href="#">Moje oferty</a></li>
                                    <li><a href="#">Ulubione</a></li>
                                    <li><a>Wystaw ocenę</a></li>
                                    <li>
                                        <img src={exitProfileIcon} className="exitProfileIcon"/>
                                        <a href="#" onClick={this.goToWelcomePage}>Wyloguj się</a>
                                    </li>
                                </ul>
                            </li>
                            <li><img src={chatIcon} className="chatIcon"/></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}


export default NavLine;

