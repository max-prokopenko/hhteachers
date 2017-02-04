import React, { PropTypes, Component } from 'react';

import AppBar from 'material-ui/AppBar';

import classnames from 'classnames';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import UserTop from './UserTop';

//Avatar
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/social/person';
import Arrow from 'material-ui/svg-icons/navigation/expand-more';
import ArrowUp from 'material-ui/svg-icons/navigation/expand-less';
import FontIcon from 'material-ui/FontIcon';

//styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import teacherBaseTheme from 'material-ui/styles/baseThemes/teacherBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';


class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };
  render()   {
    const { className, ...props } = this.props;
    const style = {
        width: '90vw',
        minHeight: '85vh',
        marginLeft: '5vw',
        marginTop: '5vh',
        marginBottom: '5vh',
        textAlign: 'center',
        transitionDuration: '1s'
    };
    const styleComment = {
        textAlign: 'left',
        fontSize: '0.95em'

    };
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(teacherBaseTheme)} >
        <div>
          
             <UserTop />
            
          
          
        </div>
       </MuiThemeProvider>
    );
  }
}

export default App;