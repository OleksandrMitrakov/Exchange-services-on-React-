import React, {Component} from 'react';
import '.././sass/main.css';
import fbIcon from '../images/fb.png'
import gIcon from '../images/google.png'
import {
    Redirect
} from 'react-router-dom';


class WelcomeTyper extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentText: this.props.text[0],
            redirect: false
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let propsText = this.props.text
            let stateText = this.state.currentText

            this.setState({
                currentText: stateText + propsText[stateText.length]
            }, () => {

                if (propsText.length <= this.state.currentText.length)
                    clearInterval(this.interval)
            })


        }, 350)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    goToFormPage = () => {
        if (typeof this.props.changeActivePage === 'function') {
            this.props.changeActivePage(2)
        }

        this.setState({
            redirect: true
        })
    }

    pageRotationOnClick = () => {

    }

    render() {

        if (this.state.redirect)
            return <Redirect to="/form"/>

        return (
            <div className="rotatePage">
                <h1 className="welcome_text">{this.state.currentText}
                    <span className="cursor"> </span>
                </h1>
                <div className="underWelcomeLine"> </div>
                <h2 className="welcomeUnderlineText">
                    Please
                    <button className="LogInBtn" onClick={this.goToFormPage}>Log In</button>
                    or Sign Up with
                    <a href="https://www.facebook.com/" target="_blank"><img src={fbIcon} className="fbIcon"/></a>
                    or
                    <a href="https://myaccount.google.com/" target="_blank"><img src={gIcon} className="gIcon"/></a>
                </h2>
            </div>
        )
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true
        }
    }

    render() {

        if (this.state.show === true) {
            return <WelcomeTyper changeActivePage={this.props.changeActivePage} text="WELCOME"/>

        } else {
            return <h2>404</h2>
        }

    }
}


export default Welcome;