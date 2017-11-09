import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router-dom';

import './index.css'

class Navigation extends Component {
  render(){
    return (
      <div>
      <Paper zDepth={1}>
        <AppBar
          title={this.props.title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div className="leiste">
          <Link className="leistenitem" to="/">
            <FlatButton label="Home" secondary={true} className="linker" />
          </Link>
          <Link className="leistenitem" to="/Week">
            <FlatButton label="Week" secondary={true} className="linker" />
          </Link>
          <Link className="leistenitem" to="/Day">
            <FlatButton label="Day" secondary={true} className="linker" />
          </Link>
          <Link className="leistenitem" to='/Working'>
            <FlatButton className="linker" label="Working" secondary={true} />
          </Link>
          </div>
      </Paper>
      </div>
    )
  }
}
export default Navigation;
