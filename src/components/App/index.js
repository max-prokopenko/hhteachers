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
        textAlign: 'center'

    };
    const styleComment = {
        textAlign: 'left',
        fontSize: '0.95em'

    };
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(teacherBaseTheme)} >
        <div>
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={style}>
            <CardText>
             <UserTop />
            </CardText>
             <CardText expandable={true}>
             <List>
                <Subheader>Comments</Subheader>
                <ListItem
                  primaryText="Brendan Lim"
                  style={styleComment}
                  leftAvatar={<Avatar icon={<Person />}/>}
                />
                <ListItem
                  primaryText="Eric Hoffman"
                  style={styleComment}
                  leftAvatar={<Avatar icon={<Person />}/>}
                />
                <ListItem
                  primaryText="Grace Ng"
                  style={styleComment}
                  leftAvatar={<Avatar icon={<Person />}/>}
                />
                <ListItem
                  primaryText="Kerem Suer"
                  style={styleComment}
                  leftAvatar={<Avatar icon={<Person />}/>}
                />
                <ListItem
                  primaryText="Raquel Parrado"
                  style={styleComment}
                  leftAvatar={<Avatar icon={<Person />}/>}
                />
              </List>
            </CardText>
            <CardActions>
            {this.state.expanded && <ArrowUp onTouchTap={this.handleReduce} />}
            {!this.state.expanded && <Arrow onTouchTap={this.handleExpand} />}
              
              
            </CardActions>
          </Card> 
          
          
        </div>
       </MuiThemeProvider>
    );
  }
}

export default App;