import React from 'react';
import '.././sass/main.css';
import LogInForm from "./LogInForm";
import {
    Redirect
} from 'react-router-dom';
import Popup from "reactjs-popup";


class WelcomeTyper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentText: this.props.text[0],
            redirect: false
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let propsText = this.props.text;
            let stateText = this.state.currentText;

            this.setState({
                currentText: stateText + propsText[stateText.length]
            }, () => {

                if (propsText.length <= this.state.currentText.length)
                    clearInterval(this.interval)
            })


        }, 200)
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
    };

    render() {

        if (this.state.redirect)
            return <Redirect to="/form"/>;

        return (
            <div>
                <h1 className="welcome_text">{this.state.currentText}
                    <span className="cursor"> </span>
                </h1>
                <h2 className="LogInRegBtns">
                    <Popup trigger={<button className="button LogInBtn"> Zaloguj się </button>}
                           modal>
                        {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>&times;</a>
                                <div className="header"> Zaloguj się </div>
                                <div className="content"><LogInForm/></div>
                            </div>
                        )}
                    </Popup>
                    lub
                    <button className="LogInBtn" onClick={this.goToFormPage}>Zarejestruj się</button>
                </h2>
                <div className="welcomeUnderBtnText">
                    ...i korzystaj z bogatych możliwości premium gełdy profesjonalistów

                </div>
            </div>
        )
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        }
    }

    render() {

        if (this.state.show === true) {
            return <WelcomeTyper changeActivePage={this.props.changeActivePage} text="Super&nbsp;fachowca"/>

        } else {
            return <h2>404</h2>
        }

    }
}


export default Welcome;