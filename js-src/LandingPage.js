import React from 'react'
import { Link } from 'react-router'

var LandingPage = React.createClass({
  render() {
    return (
      <div>
        <Link to='/list'>List</Link>
      </div>
    );
  }
});

module.exports = LandingPage;