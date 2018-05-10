import React, {Component} from 'react';
import '.././sass/main.css';
import keyIcon from '../images/key_icon.png'
import lockIcon from '../images/lock_icon.png'
import logo from '../images/logo.png'
import {
    Redirect
} from 'react-router-dom';

class LogInForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectForward: false,
            password: '',
            email: '',
            formMessagePassword: [],
            formMessageEmail: [],
            formError: false,
            isChecked: true
        }
    }

    goToMainPage = () => {

        if (this.validationForm() === false) {
            if (typeof this.props.changeActivePage === 'function') {
                this.props.changeActivePage(3)
            }
            this.setState({
                redirectForward: true
            })
        }
    };

    handleFormInputs = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    };

    validationForm = () => {
        let error = false;
        let infoMessagePassword = [];
        let infoMessageEmail = [];

        let tooltipBgStyle = {
            backgroundColor: 'rgba(67, 14, 12, 0.85)',
            borderRadius: '30px 15px 40px 30px',
            boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)',
            color: '#fff',
            marginLeft: '3px',
            marginTop: '13px',
            padding: '2px 10px 2px 20px',
            position: 'absolute',
            textDecoration: 'none',
            width: '222px',
            zIndex: '10'
        };

        if (this.state.password.length === 0) {
            error = true;
            infoMessagePassword.push(<span style={tooltipBgStyle}>Pole nie może być puste</span>)
        }
        if (this.state.email.indexOf('@') === -1) {
            error = true;
            infoMessageEmail.push(<span style={tooltipBgStyle}>Pole nie może być puste i ma zawierać @</span>)
        }

        this.setState({
            formMessagePassword: infoMessagePassword,
            formMessageEmail: infoMessageEmail,
            formError: error
        });

        return error;
    };

    render() {

        if (this.state.redirectForward)
            return <Redirect to="/main"/>;

        return (
            <div>
                <form className="LogInForm">
                    <img src={lockIcon} className="lockIcon"/>
                    <input type="email" value={this.state.email} onChange={this.handleFormInputs} id="email"
                           placeholder="Adres e-mail"/>
                    <span className="tooltip">{this.state.formMessageEmail}</span>
                    <br/>
                    <img src={keyIcon} className="keyIcon"/>
                    <input type="password" value={this.state.password} onChange={this.handleFormInputs}
                           id="password"
                           placeholder="Hasło"/>
                    <span className="tooltip">{this.state.formMessagePassword}</span>
                    <br/>
                    <div className="agreement">
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}
                               id="checkBox1"/>
                        <label htmlFor="checkBox1" className="checkBoxLabel">
                            Zapamientaj mnie
                        </label>
                    </div>
                    <button onClick={this.goToMainPage} className="logInBtn">zaloguj się</button>
                    <img src={logo} className="logo"/>
                </form>
            </div>
        )
    }
}

export default LogInForm;