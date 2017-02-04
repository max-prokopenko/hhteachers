import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconDate from 'material-ui/svg-icons/navigation/apps'; 
import IconHome from 'material-ui/svg-icons/action/home';
import IconHistory from 'material-ui/svg-icons/action/history';

const homeIcon = <IconHome />;
const historyIcon = <IconHistory />;
const dateIcon = <IconDate />;

class Navigation extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
   
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Log"
            icon={historyIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Calendar"
            icon={dateIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Navigation;
