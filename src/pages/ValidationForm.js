import React, {Component} from 'react';
import '.././sass/main.css';
import backArrow from '../images/back_arrow.png'
import nextArrow from '../images/next_arrow.png'
import profileIcon from '../images/profile_icon.png'
import keyIcon from '../images/key_icon.png'
import lockIcon from '../images/lock_icon.png'
import {
    Redirect
} from 'react-router-dom';

class ValidationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectBack: false,
            redirectForward: false,
            name: '',
            password: '',
            email: '',
            formMessageName: [],
            formMessagePassword: [],
            formMessageEmail: [],
            formError: false
        }
    }

    goToWelcomePage = () => {

        if (typeof this.props.changeActivePage === 'function') {
            this.props.changeActivePage(1)
        }
        this.setState({
            redirectBack: true
        })
    };

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

    validationForm = () => {
        let error = false;
        let infoMessageName = [];
        let infoMessagePassword = [];
        let infoMessageEmail = [];
        let tooltipBgStyle = {
            backgroundColor: 'rgba(67, 14, 12, 0.85)',
            borderRadius: '30px 15px 40px 30px',
            boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)',
            color: '#fff',
            marginLeft: '3px',
            marginTop: '2px',
            padding: '2px 10px 2px 20px',
            position: 'absolute',
            textDecoration: 'none',
            width: '330px',
            zIndex: '10'
        };

        if (this.state.name.length === 0) {
            error = true;
            infoMessageName.push(<span style={tooltipBgStyle}>Name can not be empty</span>)
        }
        if (this.state.password.length === 0) {
            error = true;
            infoMessagePassword.push(<span style={tooltipBgStyle}>Password can not be empty</span>)
        }
        if (this.state.email.indexOf('@') === -1) {
            error = true;
            infoMessageEmail.push(<span style={tooltipBgStyle}>E-mail can not be empty and should contain @</span>)
        }

        this.setState({
            formMessageName: infoMessageName,
            formMessagePassword: infoMessagePassword,
            formMessageEmail: infoMessageEmail,
            formError: error
        });

        return error;
    };

    render() {

        if (this.state.redirectBack)
            return <Redirect to="/"/>;

        if (this.state.redirectForward)
            return <Redirect to="/form/main"/>;

        const createAccountStyle = {
            position: 'fixed',
            left: '42vw',
            fontSize: '33px',
            top: '17vh'
        };

        return (
            <div>
                <h2 style={createAccountStyle}>LOGIN HERE</h2>
                <form className="regForm">
                    <img src={profileIcon} className="profileIcon"/>
                    <input type="text" value={this.state.name} onChange={this.handleFormInputs} id="name"
                           placeholder="Name"/>
                    <span className="tooltip">{this.state.formMessageName}</span>
                    <br/>
                    <img src={keyIcon} className="keyIcon"/>
                    <input type="password" value={this.state.password} onChange={this.handleFormInputs}
                           id="password"
                           placeholder="Password"/>
                    <span className="tooltip">{this.state.formMessagePassword}</span>
                    <br/>
                    <img src={lockIcon} className="lockIcon"/>
                    <input type="email" value={this.state.email} onChange={this.handleFormInputs} id="email"
                           placeholder="E-mail"/>
                    <span className="tooltip">{this.state.formMessageEmail}</span>
                    <br/>
                    <button onClick={this.goToWelcomePage}><img src={backArrow} className="backArrow"/></button>
                    <button onClick={this.goToMainPage}><img src={nextArrow} className="nextArrow"/></button>
                </form>
            </div>
        )
    }
}

export default ValidationForm;