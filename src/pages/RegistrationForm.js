import React, {Component} from 'react';
import '.././sass/main.css';
import backArrow from '../images/back_arrow.png'
import nextArrow from '../images/next_arrow.png'
import keyIcon from '../images/key_icon.png'
import lockIcon from '../images/lock_icon.png'
import profileIcon from '../images/profile_icon.png'
import phoneIcon from '../images/phone_icon.png'
import {
    Redirect
} from 'react-router-dom';

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectBack: false,
            redirectForward: false,
            name: '',
            password: '',
            email: '',
            phone: '',
            checked: '',
            formMessageName: [],
            formMessagePassword: [],
            formMessageEmail: [],
            formMessagePhone: [],
            formMessageChecked: [],
            formError: false,
            isChecked1: false,
            isChecked2: false
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

    toggleChange1 = () => {
        this.setState({
            isChecked1: !this.state.isChecked1
        });
    };

    toggleChange2 = () => {
        this.setState({
            isChecked2: !this.state.isChecked2
        });
    };

    validationForm = () => {
        let error = false;
        let infoMessageName = [];
        let infoMessagePassword = [];
        let infoMessageEmail = [];
        let infoMessagePhone = [];
        let infoMessageCheckBox = [];

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
            infoMessageName.push(<span
                style={tooltipBgStyle}>Pole imię nie może być puste i ma zawierać imię i nazwisko</span>)
        }
        if (this.state.name.indexOf(' ') === -1) {
            error = true;
            infoMessageName.push(<span
                style={tooltipBgStyle}>Pole imię nie może być puste i ma zawierać imię i nazwisko</span>)
        }
        if (this.state.password.length === 0) {
            error = true;
            infoMessagePassword.push(<span style={tooltipBgStyle}>Pole nie może być puste</span>)
        }
        if (this.state.email.indexOf('@') === -1) {
            error = true;
            infoMessageEmail.push(<span style={tooltipBgStyle}>Pole nie może być puste i ma zawierać @</span>)
        }
        if (this.state.phone.length < 9 || this.state.phone.length > 12) {
            error = true;
            infoMessagePhone.push(<span
                style={tooltipBgStyle}>Pole nie może być puste i ma zawierać od 9 do 12 znaków</span>)
        }
        if (this.state.isChecked1 === false || this.state.isChecked2 === false) {
            error = true;
            infoMessageCheckBox.push(<span className="tooltipAgreement">Akceptacja regulaminu jest wymagana.</span>)
        }

        this.setState({
            formMessageName: infoMessageName,
            formMessagePassword: infoMessagePassword,
            formMessageEmail: infoMessageEmail,
            formMessagePhone: infoMessagePhone,
            formMessageChecked: infoMessageCheckBox,
            formError: error
        });

        return error;
    };

    render() {

        if (this.state.redirectBack)
            return <Redirect to="/"/>;

        if (this.state.redirectForward)
            return <Redirect to="/main"/>;

        const createAccountStyle = {
            position: 'fixed',
            left: '41vw',
            fontSize: '30px',
            top: '4vh'
        };

        return (
            <div>
                <h2 style={createAccountStyle}>Zarejestruj się</h2>
                <form className="regForm">
                    <img src={profileIcon} className="profileIcon"/>
                    <input type="text" value={this.state.name} onChange={this.handleFormInputs} id="name"
                           placeholder="Imię i nazwisko"/>
                    <span className="tooltip">{this.state.formMessageName}</span>
                    <br/>
                    <img src={keyIcon} className="keyIcon"/>
                    <input type="password" value={this.state.password} onChange={this.handleFormInputs}
                           id="password"
                           placeholder="Hasło"/>
                    <span className="tooltip">{this.state.formMessagePassword}</span>
                    <br/>
                    <img src={lockIcon} className="lockIcon"/>
                    <input type="email" value={this.state.email} onChange={this.handleFormInputs} id="email"
                           placeholder="Adres e-mail"/>
                    <span className="tooltip">{this.state.formMessageEmail}</span>
                    <br/>
                    <img src={phoneIcon} className="phoneIcon"/>
                    <input type="tel" value={this.state.phone} onChange={this.handleFormInputs} id="phone"
                           placeholder="Numer telefonu"/>
                    <span className="tooltip">{this.state.formMessagePhone}</span>
                    <br/>
                    <div className="agreement">
                        <input type="checkbox" checked={this.state.isChecked1} onChange={this.toggleChange1}
                               id="checkBox1"/>
                        <label htmlFor="checkBox1" className="checkBoxLabel">
                            Niniejszym oświadczam, że na podstawie art. 10 ust. 2 ustawy z dnia 18
                            lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz. U. z 2002 r., nr 144, poz. 1204 z
                            późn. zm.), wyrażam zgodę na otrzymywanie od PwC Polska sp. z o.o., PricewaterhouseCoopers
                            sp. z
                            o.o., PwC Legal Pawłowski, Żelaźnicki Sp.k., PricewaterhouseCoopers Professional Services
                            sp. z
                            o.o., posiadających siedzibę w Warszawie, przy Al. Armii Ludowej 14, informacji handlowych
                            drogą
                            elektroniczną.
                        </label>
                    </div>
                    <br/>
                    <div className="agreement">
                        <input type="checkbox" checked={this.state.isChecked2} onChange={this.toggleChange2}
                               id="checkBox2"/>
                        <label htmlFor="checkBox2" className="checkBoxLabel">
                            Niniejszym oświadczam, że na podstawie art. 10 ust. 2 ustawy z dnia 18
                            lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz. U. z 2002 r., nr 144, poz. 1204 z
                            późn. zm.), wyrażam zgodę na otrzymywanie od PwC Polska sp. z o.o., PricewaterhouseCoopers
                            sp. z
                            o.o., PwC Legal Pawłowski, Żelaźnicki Sp.k., PricewaterhouseCoopers Professional Services
                            sp. z
                            o.o., posiadających siedzibę w Warszawie, przy Al. Armii Ludowej 14, informacji handlowych
                            drogą
                            elektroniczną.
                        </label>
                    </div>
                    <br/>
                    <span className="tooltip">{this.state.formMessageChecked}</span>
                    <br/>
                    <button onClick={this.goToWelcomePage}><img src={backArrow} className="backArrow"/></button>
                    <button onClick={this.goToMainPage}><img src={nextArrow} className="nextArrow"/></button>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;