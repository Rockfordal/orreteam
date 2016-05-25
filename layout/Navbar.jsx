import React from 'react';
import classNames from 'classnames';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const muiTheme = getMuiTheme();

class MyNavbar extends React.Component {
  getChildContext() {
    return { muiTheme: muiTheme };
  }
  render() {
    var loc = this.props.location.pathname;

    return (
      <div>
        <AppBar
          title="Min App"
          iconElementLeft={<IconButton><NavigationClose/></IconButton>}
          iconElementRight={
            <IconMenu
              iconButtonElement={ <IconButton> <MoreVertIcon/> </IconButton> }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
           }
         />

        {this.props.children}
        <RaisedButton label="Spara" />
      </div>
    ) } }

MyNavbar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default MyNavbar
