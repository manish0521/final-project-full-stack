import React, { Component } from 'react'
import { connect } from 'react-redux';
import ShowAllTalks from '../ShowAllTalks/ShowAllTalks';
import WebHome from '../../BloggingComponents/WebHome';

class Home extends Component {

  render() {
    return (
      <div className='App'>
       {this.props.authUser.isAuthenticated ? <ShowAllTalks user={this.props.authUser.user}/> : <WebHome/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};


export default connect(mapStateToProps, null)(Home);