import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class Tes extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.isLogedIn.toString()}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    isLogedIn: state.global.isLogedIn
})

export default withRouter(connect(mapStateToProps)(Tes))