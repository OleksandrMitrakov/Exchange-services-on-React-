import React, {Component} from 'react';
import '.././sass/main.css';
import NavLine from "./MainPageComponents/NavLine"
import LeftBlock from './MainPageComponents/LeftBlock'

class MainPage extends Component {

    render() {
        return (
            <div>
                <NavLine/>
                <LeftBlock/>
            </div>
        )
    }
}

export default MainPage;

