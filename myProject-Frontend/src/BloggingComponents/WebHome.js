import React, { Component } from 'react'
import ReactGA from 'react-ga';
// import '../../public/publicResume/App.css';
import AppHelper from '../ResumeComponents/AppHelper';

class WebHome extends Component {
    render() {
        return (
            <div className="App">
             
             <AppHelper/>
            
            </div>
        );
    }
}
export default WebHome;