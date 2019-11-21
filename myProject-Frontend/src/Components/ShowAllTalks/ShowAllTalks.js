import React, { Component } from 'react'
import Talks from '../Talks/Talks'
import { connect } from 'react-redux';
import { getAllTalks } from '../../redux/action/talkAction';
import Spinner from '../../Factory/Spinner/Spinner';

 class ShowAllTalks extends Component {

  state = {
    loading: false,
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    this.props.getAllTalks()
        .then(() => {
          this.setState({
            loading: false
          })
        })
        .catch(error => {
          this.setState({
            loading: false
          })
        })
  }

  render() {
    return (
      <div>
        Welcome {this.props.user.username} !
        <br />
        {
                this.state.loading ? <Spinner /> : <Talks />
        }
      </div>
    )
  }
}

export default connect(null, {getAllTalks})(ShowAllTalks)
