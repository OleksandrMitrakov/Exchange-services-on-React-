import React from 'react';
import './sass/main.css';
import Welcome from './pages/WelcomePage';
import RegistrationForm from "./pages/RegistrationForm";
import MainPage from "./pages/MainPage";
import AddAnnouncementPage from "./pages/MainPageComponents/addAnnouncementPage";
import {
    HashRouter,
    Route
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
                    <div style={{...activePageStyle, backgroundColor: this.props.activePage === 1 ? '#98C444' : '#a9a9a9'}}> </div>
                    <div style={{...activePageStyle, backgroundColor: this.props.activePage === 2 ? '#98C444' : '#a9a9a9'}}> </div>
                    <div style={{...activePageStyle, backgroundColor: this.props.activePage === 3 ? '#98C444' : '#a9a9a9'}}> </div>
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
    };

    render() {
        return (
            <HashRouter>
                <div>
                    {/*<TopLineStatus activePage={this.state.activePage}/>*/}
                    <Route exact path="/" render={ props => <Welcome changeActivePage={this.changeActivePage} {...props}/> }/>
                    <Route exact path="/form" render={ props => <RegistrationForm changeActivePage={this.changeActivePage} {...props}/> }/>
                    <Route exact path="/main" render={ props => <MainPage changeActivePage={this.changeActivePage} {...props}/> }/>
                    <Route exact path="/addAnnouncement" render={ props => <AddAnnouncementPage changeActivePage={this.changeActivePage} {...props}/> }/>
                </div>
            </HashRouter>
        )
    }
}

export default App;


