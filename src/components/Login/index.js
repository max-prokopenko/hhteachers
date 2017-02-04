import React, { PropTypes, Component } from 'react'

//styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import teacherBaseTheme from 'material-ui/styles/baseThemes/teacherBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress';
//redux
import { connect } from 'react-redux';
import { userLogin } from '../../actions/userAction';
import { bindActionCreators } from 'redux';
import store from '../../store'
import { push } from 'react-router-redux'


import classnames from 'classnames'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './style.css'


injectTapEventPlugin();



function mapStateToProps(state) {
  return {
    user: state.userReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      userLogin: (a) => { dispatch(userLogin(a)) }
  }
}


 function Loading(props) {
  let isLogging = props.isLogging;
  if (isLogging == true) {
    return <CircularProgress size={90} thickness={7} />;
  }
  return <div>
              <TextField
                hintText="Login" 
                value={this.state.userName} 
              />
              <br/>
              <TextField
                hintText="Password"  
              />
        </div>;
}

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showLoading: false,
      userName: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({userName: event.target.value});
  }

  logger() {
    console.log(this.props.user);
  }
  userLogin(e) {
     e.preventDefault()
    this.props.userLogin(this.state.userName);
    this.setState(prevState => ({
      showLoading: !prevState.showLoading
    }));
    setTimeout(function() {
      store.dispatch(push('/'));
    }, 500);
  }


  render() {
    console.log(this.props);
    const { className, ...props } = this.props;
    const styles = {
      card: {
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        paddingTop: '25vh'

      },
    };
    
    return (
       <MuiThemeProvider muiTheme={getMuiTheme(teacherBaseTheme)} >
        <Card style={styles.card}>
          
          
           
          <form onSubmit={this.userLogin.bind(this)}>
            <CardTitle
              title="Login"
            />
            <CardText>
              <div>
                  <TextField
                    hintText="Login" 
                    value={this.state.userName} 
                    onChange={this.handleChange}
                  />
                  <br/>
                  <TextField
                    hintText="Password"  
                  />
            </div>

            </CardText>
            <CardActions>
              <FlatButton type="submit" label="Login" primary={true}/>
            </CardActions>
          </form>
        </Card>

        
        
        
       </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);