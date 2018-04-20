import React, {Component} from 'react';
import './sass/main.css';
import Welcome from './pages/WelcomePage';
import ValidationForm from "./pages/ValidationForm";
import BasicMap from "./pages/MainPage";
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

class TopLineStatus extends React.Component {

    render() {
        
        const activePageStyle = {
            width: '17px',
            height: '17px',
            borderRadius: '50%',
            backgroundColor: '#a9a9a9',
            display: 'inline-block',
            marginLeft: '15px',
            border: '1px solid grey'
        };

        return (
            <div>
                <div className="topLights">
                    <div style={{...activePageStyle, backgroundColor: this.props.activePage === 1 ? 'orange' : '#a9a9a9'}}> </div>
                    <div style={{...activePageStyle, backgroundColor: this.props.activePage === 2 ? 'orange' : '#a9a9a9'}}> </div>
                    <div style={{...activePageStyle, backgroundColor: this.props.activePage === 3 ? 'orange' : '#a9a9a9'}}> </div>
                </div>
                <div className="topLine" style={{zIndex: 1000}}> </div>
            </div>
        )
    }
}


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            activePage: 1
        }
    }

    changeActivePage = ( page ) => {
        this.setState({
            activePage: page
        })
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <TopLineStatus activePage={this.state.activePage}/>
                    <ul className="navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/form">Registration Form</Link></li>
                        <li><Link to="/form/main">Main Page</Link></li>
                    </ul>
                    <Route exact path="/" render={ props => <Welcome changeActivePage={this.changeActivePage} {...props}/> }/>
                    <Route exact path="/form" render={ props => <ValidationForm changeActivePage={this.changeActivePage} {...props}/> }/>
                    <Route exact path="/form/main" render={ props => <BasicMap changeActivePage={this.changeActivePage} {...props}/> }/>
                </div>
            </HashRouter>
        )
    }
}

export default App;


